// Importa as bibliotecas
const jsonServer = require('json-server');
const express = require('express');

// Cria uma instância do servidor json-server
const server = jsonServer.create();

// Cria o roteador com o arquivo db.json
const router = jsonServer.router('db.json');

// Importa os middlewares padrões do json-server
const middlewares = jsonServer.defaults();

// Configura o servidor para usar os middlewares
server.use(middlewares);

// Configura o express para servir arquivos estáticos (HTML, CSS, JS)
const app = express();
app.use(express.static('public'));

// Define a porta para o servidor rodar
const porta = 3000;

// Rota para enviar o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Usa o roteador json-server para manipulação de dados
server.use(router);

// Inicia o servidor na porta configurada
server.listen(porta, () => {
  console.log(`JSON SERVER está rodando em http://localhost:${porta}`);
});
