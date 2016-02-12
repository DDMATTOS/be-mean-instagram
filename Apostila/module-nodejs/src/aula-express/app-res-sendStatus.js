const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('*', function (req, res) {
  res.sendStatus(404);
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});