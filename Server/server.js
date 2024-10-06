const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const app = express();
const port = 5000;

// Configurações do banco de dados
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agroclient'
};

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type']
}));

// Conexão com o banco de dados
const getDbConnection = async () => {
  return mysql.createConnection(dbConfig);
};

// Registro de Usuário
app.post('/api/register', async (req, res) => {
  const { comercio, email, cpf, senha } = req.body;

  try {
    const connection = await getDbConnection();
    const [existingUser] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      await connection.end();
      return res.status(400).json({ message: 'Email já registrado' });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);
    await connection.execute(
      'INSERT INTO users (comercio, email, cpf, senha) VALUES (?, ?, ?, ?)',
      [comercio, email, cpf, hashedPassword]
    );

    await connection.end();
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const connection = await getDbConnection();
    const [users] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
      await connection.end();
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const user = users[0];
    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
      await connection.end();
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    await connection.end();
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Cadastro de Produto
app.post('/api/products', async (req, res) => {
  const { name, description, quantity, price, saleType, category } = req.body;

  if (!name || !description || !quantity || !price || !saleType || !category) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const connection = await getDbConnection();
    await connection.execute(
      'INSERT INTO produtos (name, description, quantity, price, saleType, category) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, quantity, price, saleType, category]
    );

    await connection.end();
    res.status(201).json({ message: 'Produto cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// ESTOQUE DE PRODUTO

//requisição dos produtos para tela venda.
app.get('/produtos', async (req, res) => {
  try {
    const connection = await getDbConnection();
    const [results] = await connection.execute('SELECT * FROM produtos');
    await connection.end();
    res.json(results);
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// exclusão de produtos
app.delete('/produtos/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const connection = await getDbConnection();
    const [result] = await connection.execute('DELETE FROM produtos WHERE id = ?', [productId]);
    await connection.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// edição do produto
app.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity, price, category } = req.body;

  try {
    const connection = await getDbConnection();
    const [result] = await connection.execute(
      'UPDATE produtos SET name = ?, description = ?, quantity = ?, price = ?, category = ? WHERE id = ?',
      [name, description, quantity, price, category, id]
    );
    await connection.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Registrar Venda
app.post('/api/vendas', async (req, res) => {
  let connection;

  try {
    const { vendas, formaPagamento } = req.body;

    // Cria uma conexão
    connection = await getDbConnection();
    
    // Início da transação
    await connection.beginTransaction();

    // Registro das vendas
    for (const venda of vendas) {
      const { id, quantidade, price } = venda;
      await connection.execute(
        'INSERT INTO vendas (produtoId, quantidade, preco, formaPagamento) VALUES (?, ?, ?, ?)',
        [id, quantidade, price, formaPagamento]
      );
    }

    // Finaliza a transação
    await connection.commit();

    res.status(200).json({ message: 'Venda registrada com sucesso!' });
  } catch (error) {
    // Rollback em caso de erro
    if (connection) await connection.rollback();
    console.error('Erro ao registrar a venda:', error);
    res.status(500).json({ error: 'Erro ao registrar a venda.' });
  } finally {
    if (connection) await connection.end();
  }
});

//Desgraça de fechamento que acabou com a minha vida
//Cadastro do Fechamento (pegando os dados da tabela vendas)
app.post('/api/fechamento', async (req, res) => {
  const connection = await getDbConnection();

  try {
      const { openingTime, closingTime } = req.body;

      // Calcula totalSales e revenue por forma de pagamento
      const [results] = await connection.execute(`
          SELECT 
              SUM(quantidade) AS totalSales,
              SUM(preco * quantidade) AS revenue,
              SUM(CASE WHEN formaPagamento = 3 THEN quantidade ELSE 0 END) AS salesCash,
              SUM(CASE WHEN formaPagamento = 1 THEN quantidade ELSE 0 END) AS salesPix,
              SUM(CASE WHEN formaPagamento = 2 THEN quantidade ELSE 0 END) AS salesCard
          FROM vendas
          WHERE DATE(vendaData) BETWEEN DATE(?) AND DATE(?)
      `, [openingTime, closingTime]);

      const { totalSales, revenue, salesCash, salesPix, salesCard } = results[0];

      // Registro do fechamento
      await connection.execute(
          'INSERT INTO fechamento (openingTime, closingTime, totalSales, revenue, salesCash, salesPix, salesCard) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [openingTime, closingTime, totalSales, revenue, salesCash, salesPix, salesCard]
      );

      res.status(200).json({ message: 'Fechamento registrado com sucesso!' });
  } catch (error) {
      console.error('Erro ao registrar o fechamento:', error);
      res.status(500).json({ error: 'Erro ao registrar o fechamento.' });
  } finally {
      connection.end();
  }
});

//Coleta de dados do fechamento
app.get('/api/fechamento', async (req, res) => {
  try {
    const connection = await getDbConnection(); // Obtém a conexão com o banco de dados
    const [rows] = await connection.execute('SELECT * FROM fechamento ORDER BY closingTime DESC LIMIT 1');
    await connection.end(); // Fecha a conexão
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar fechamento:', error);
    res.status(500).send('Erro ao buscar fechamento mais recente.');
  }
});


//FIM DO ESTOQUE


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


{/*

TABELAS

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255)NOT NULL,
  quantity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  saleType VARCHAR(50),
  category VARCHAR(100)
); 

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comercio VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf CHAR(11) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE fechamento (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    openingTime DATETIME NOT NULL,
    closingTime DATETIME NOT NULL,
    totalSales INT(11) NOT NULL,
    revenue DECIMAL(10,2) NOT NULL,
    salesCash INT(11) NOT NULL DEFAULT 0,
    salesPix INT(11) NOT NULL DEFAULT 0,
    salesCard INT(11) NOT NULL DEFAULT 0
);

CREATE TABLE vendas (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    produtoId INT(11) NOT NULL,
    quantidade INT(11) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    formaPagamento ENUM('PIX', 'Cartão', 'Dinheiro') NOT NULL,
    vendaData DATETIME DEFAULT CURRENT_TIMESTAMP,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

*/}
