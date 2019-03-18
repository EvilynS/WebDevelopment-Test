const http      = require('http');
const express   = require('express');
const path      = require('path');

const appweb = express();

appweb.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'./src')); //faz o server.js puxa a pagina HTML
});

appweb.use(express.static(__dirname + '/src')); //faz o server.js puxa os arquivos .js e .css tambem

appweb.listen(3001); //mostra a porta do localhost (onde a pagina vai aparecer)