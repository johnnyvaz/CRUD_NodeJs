/*
*   criar objetos básicos
*/
const express = require('express');
const consign = require('consign');

const path = require('path');
const body = require('body-parser');

// instanciando objeto express
app = express();

//configurando recursos para tratamento json
app.use(body.urlencoded({extended:true}));
app.use(body.json());

//diretório estático
app.set('views',path.join(__dirname, '../api/views'));
app.set('view engine', 'ejs');

// configurando a porta para http
app.set('port', 3000);

consign({ cwd: 'api' })
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app)
;

module.exports = app;
