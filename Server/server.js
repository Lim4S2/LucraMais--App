const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowedHeaders: ['Content-Type']
}));

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'agroclient'
};

// Registro de Usuário
app.post('/api/register', async (req, res) => {
  const { comercio, email, cpf, senha } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);
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
    const connection = await mysql.createConnection(dbConfig);
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

  if (!name || !quantity || !price) {
    return res.status(400).json({ message: 'Nome, quantidade e preço são obrigatórios.' });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
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
app.get('/produtos', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute('SELECT * FROM produtos');
    await connection.end();
    res.json(results);
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Excluir
app.delete('/produtos/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const connection = await mysql.createConnection(dbConfig);
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

// EDITA O PRODUTO LÁ DO ESTOQUE
app.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity, price, category } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);
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
  const { vendas, formaPagamento } = req.body;
  
  try {
    const connection = await mysql.createConnection(dbConfig);
    
    const query = 'INSERT INTO vendas (produtoId, quantidade, preco, formaPagamento) VALUES (?, ?, ?, ?)';
    
    for (let venda of vendas) {
      await connection.execute(query, [venda.id, venda.quantidade, venda.price, formaPagamento]);
    }
    
    await connection.end();
    res.status(200).send('Venda registrada com sucesso!');
  } catch (error) {
    console.error('Erro ao registrar venda:', error);
    res.status(500).send('Erro ao registrar venda.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/api/vendas', async (req, res) => {
  try {
      // Você pode ajustar a lógica para filtrar vendas específicas, se necessário
      const vendas = await Venda.findOne().sort({ closingTime: -1 }); // Pega a venda mais recente
      if (!vendas) {
          return res.status(404).json({ message: 'Nenhuma venda encontrada.' });
      }
      res.json(vendas);
  } catch (error) {
      console.error('Erro ao buscar vendas:', error);
      res.status(500).json({ message: 'Erro ao buscar vendas.' });
  }
});


{/*
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
    id INT AUTO_INCREMENT PRIMARY KEY,
    openingTime DATETIME NOT NULL,
    closingTime DATETIME NOT NULL,
    totalSales DECIMAL(10, 2) NOT NULL,
    revenue DECIMAL(10, 2) NOT NULL
);

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fechamentoId INT,
    produtoId INT,
    quantidade INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    formaPagamento INT,
    FOREIGN KEY (fechamentoId) REFERENCES fechamento(id),
    FOREIGN KEY (produtoId) REFERENCES produtos(id)
);

*/}
