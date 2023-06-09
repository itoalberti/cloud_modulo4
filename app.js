const express = require('express');
const os = require('os');
const app = express();

app.get('/', (request, response) => {
  return response.status(200).json({ message: 'Olá!' });
});

app.get('/liveness', (request, response) => {
  return response.status(200).json({
    message: 'Meu app está vivo!',
    path: process.cwd(),
  });
});

app.get('/readiness', (request, response) => {
  return response.status(200).json({
    message: 'Meu app está pronto!',
    platform: os.platform(),
    freemem: os.freemem(),
    homedir: os.homedir(),
    date: new Date().getTime(),
  });
});

app.get('/consulta', (request, response) => {
  // SCRIPT CREATE DATABASE
  // SCRIPT TABLE
  // SCRIPT INSERT

  // SUBIR NO GITHUB E PUBLICAR IMAGEM NO DOCKERHUB

  // LISTAGEM DOS CADASTROS DA TABELA CRIADA
  // conexão com BD
  // instalação do pacote npm
  return response.status(200).json({
    message: 'Meu app está pronto!',
    platform: os.platform(),
    freemem: os.freemem(),
    homedir: os.homedir(),
    date: new Date().getTime(),
  });
});

module.exports = app;
