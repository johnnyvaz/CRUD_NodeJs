/*
*   criar objetos básicos
*/
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

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

app.use(expressLayouts);
 
// app.get('/teste', function(req, res) {
//   var locals = {
//     title: 'Page Title',
//     description: 'Page Description',
//     header: 'Page Header'
//   };
//   res.render('the-view', locals);
// });


// configurando a porta para http
app.set('port', 4000);

consign({ cwd: 'api' })
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app);

module.exports = app;
