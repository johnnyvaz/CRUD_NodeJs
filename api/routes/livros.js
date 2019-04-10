var controller = require('../controllers/livros.js');

app.get('/livros/menu', controller.menuLivros);

app.get('/livros/listar', controller.livrosListar);

app.get('/livros/novo', controller.livrosNovo);

app.post('/livros/Salvar', controller.livrosSalvar);

app.get('/livros/editar/:codigo', controller.livrosBuscar);

