var controller = require('../controllers/editoras.js');

// app.get('/editoras/menu', controller.menuEditoras);

app.get('/editoras/listar', controller.editorasListar);

// app.get('/editoras/novo', controller.editorasNovo);

// app.post('/editoras/salvar', controller.editorasSalvar);

app.get('/editoras/editar/:codigo', controller.editorasEditar);

