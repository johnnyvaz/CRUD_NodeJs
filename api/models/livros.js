var client = require('../../config/conexao.js');

module.exports = {
    listarLivros,
    listarAutores,
    listarEditoras,
    listarUmLivro,
    alterarLivro,
    salvarLivro
    // inativarLivro    

}

function listarLivros(callback) {
    // client.query('select l.liv_codigo,l.liv_titulo, l.liv_edicao, l.liv_isbn, l.liv_ano, a.aut_apelido,  e.edt_nome from livros as l join autores as a on (l.aut_codigo = a.aut_codigo) join editoras as e on (l.edt_codigo = e.edt_codigo)', callback)
    client.query('select * from livros as l join autores as a on (l.aut_codigo = a.aut_codigo) join editoras as e on (l.edt_codigo = e.edt_codigo)', callback)
}

function listarAutores (callback) {
    client.query('select * from autores order by aut_apelido', callback);
}

function listarEditoras (callback) {
    client.query('select * from editoras order by edt_nome', callback);
}

function listarUmLivro (id, callback){
    client.query('SELECT * FROM livros WHERE liv_codigo = ' + id, callback);
}

function salvarLivro(dados, callback) {
    var msql = 'INSERT INTO livros SET ? ';

	client.query(msql, dados, callback);
}

function alterarLivro(dados, callback) {
    var msql = "UPDATE livros SET liv_titulo = '" + dados.liv_titulo + 
    "' , liv_edicao = '" + dados.liv_edicao + 
    "' , liv_isbn = '" + dados.liv_isbn + 
    "' , aut_codigo = '" + dados.aut_codigo + 
    "' , edt_codigo = '" + dados.edt_codigo + 
    "' , liv_ano = '" + dados.liv_ano + 
    // "' , liv_ativoinativo = '" + dados.liv_ativoinativo + 
    "' , liv_dtcadastro = '" + dados.liv_dtcadastro + 
    "'  WHERE liv_codigo = '" + dados.liv_codigo + "'";
//    console.log('Estou alterando o livro.......');
//    console.log(msql);
    client.query(msql, callback);
}
