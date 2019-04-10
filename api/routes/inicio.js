var controller = require('../controllers/inicio.js');

app.get('/', controller.index);
app.get('/login', controller.login);
app.get('/logout', controller.logout);

app.get('/contact', (req, res) => {
    res.render('pages/contact')
  })
  app.get('/home', (req, res) => {
    res.render('pages/home')
  })

  