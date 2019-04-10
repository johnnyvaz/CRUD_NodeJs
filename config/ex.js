var express = require('express');
var expressLayouts = require('express-ejs-layouts');
 
var app = express();
 
app.set('view engine', 'ejs');
 
app.use(expressLayouts);
 
app.get('/', function(req, res) {
  var locals = {
    title: 'Page Title',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('the-view', locals);
});
 
app.listen(3000);