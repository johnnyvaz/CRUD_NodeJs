var client = require('../../config/conexao.js');

module.exports = {
    editorasListar,
    listarUmaEditora,
    // listarUmLivro,
    // alterarLivro,
    // salvarLivro
    // inativarLivro    

}

function editorasListar (callback) {
    client.query('select * from editoras order by edt_nome', callback);
}

function listarUmaEditora (id, callback){
    client.query('SELECT * FROM editoras WHERE edt_codigo = ' + id, callback);
}

// function alterarLivro(dados, callback) {
//     var msql = "UPDATE editoras SET liv_titulo = '" + dados.liv_titulo + 
//     "' , liv_edicao = '" + dados.liv_edicao + 
//     "' , liv_isbn = '" + dados.liv_isbn + 
//     "' , aut_codigo = '" + dados.aut_codigo + 
//     "' , edt_codigo = '" + dados.edt_codigo + 
//     "' , liv_ano = '" + dados.liv_ano + 
//     // "' , liv_ativoinativo = '" + dados.liv_ativoinativo + 
//     "' , liv_dtcadastro = '" + dados.liv_dtcadastro + 
//     "'  WHERE liv_codigo = '" + dados.liv_codigo + "'";
// //    console.log('Estou alterando o livro.......');
// //    console.log(msql);
//     client.query(msql, callback);
// }
