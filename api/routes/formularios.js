var controller = require('../controllers/formularios.js');

app.get('/formularios/menu', controller.menu);
app.get('/formularios/empresa', controller.empresa);
app.get('/formularios/veiculo', controller.veiculo);

