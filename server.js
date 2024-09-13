const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Permitir CORS
app.use(cors());

// Rota para sorteio de número aleatório
app.get('/sortear', (req, res) => {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  res.json({ numero: numeroAleatorio });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
