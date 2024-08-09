const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Simulação de banco de dados
let users = []; 

// Rota para registrar
app.post('/api/register', async (req, res) => {
  const { comercio, email, cpf, senha } = req.body;

  // Verifica se o email já foi registrado
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email já registrado' });
  }

  // Criptografa a senha
  const hashedPassword = await bcrypt.hash(senha, 10);

  // Adiciona o usuário com a senha criptografada
  users.push({ comercio, email, cpf, senha: hashedPassword });

  res.status(201).json({ message: 'Usuário registrado com sucesso', user: { comercio, email, cpf } });
});

// Endpoint para login
app.post('/api/login', async (req, res) => {
  const { email, senha } = req.body;

  // Verifica se o caba existe
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  // Verifica senha
  const isPasswordValid = await bcrypt.compare(senha, user.senha);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  res.status(200).json({ message: 'Login bem-sucedido!' });
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
