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
  methods: ['GET', 'POST'],
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
  
  console.log('Recebido:', { name, description, quantity, price, saleType, category });

  if (!name || !quantity || !price) {
    console.log('Dados inválidos');
    return res.status(400).json({ message: 'Nome, quantidade e preço são obrigatórios.' });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conectado ao banco de dados');

    const [result] = await connection.execute(
      'INSERT INTO produtos (name, description, quantity, price, saleType, category) VALUES (?, ?, ?, ?, ?, ?)',
      [name, description, quantity, price, saleType, category]
    );

    console.log('Produto inserido:', result);
    await connection.end();

    res.status(201).json({ message: 'Produto cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
