var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Получил GET запрос');
});

app.get('/:id', function (req, res) {
  let id = req.params.id;
  res.send('Получил GET запрос с параметром: ' + id);
});

app.post('/', function (req, res) {
  res.send('Получил POST запрос');
});

app.put('/', function (req, res) {
  res.send('Получил PUT запрос');
});

app.delete('/', function (req, res) {
  res.send('Получил DELETE запрос');
});

app.listen(3000, function () {
  console.log('Сервер запущен!');
});