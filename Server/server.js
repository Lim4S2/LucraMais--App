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

// Configurar a conexão com o banco de dados MySQL
const dbConfig = {
  host: 'localhost',   // Substitua pelo endereço do seu servidor MySQL
  user: 'root',        // Substitua pelo seu usuário MySQL
  password: '',// Substitua pela sua senha MySQL
  database: 'agroclient' // Substitua pelo nome do seu banco de dados
};

// Rota para registrar um novo usuário
app.post('/api/register', async (req, res) => {
  const { comercio, email, cpf, senha } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Verifica se o email já foi registrado
    const [existingUser] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      await connection.end();
      return res.status(400).json({ message: 'Email já registrado' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Insere o novo usuário no banco de dados
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

// Endpoint para login de usuários
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Verifica se o usuário existe
    const [users] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      await connection.end();
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const user = users[0];

    // Verifica a senha
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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
