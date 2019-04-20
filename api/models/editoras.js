var client = require('../../config/conexao.js');

module.exports = {
    editorasListar,
    editorasEditar
    // listarUmLivro,
    // alterarLivro,
    // salvarLivro
    // inativarLivro    

}

function editorasListar (callback) {
    client.query('select * from editoras order by edt_nome', callback);
}

function editorasEditar (id, callback){
    client.query('SELECT * FROM editoras WHERE edt_codigo = ' + id, callback);
}

function editorasEditar(dados, callback) {
    var msql = 
    "UPDATE editoras SET edt_dtcadastro = '" + dados.edt_dtcadastro + 
                    "' , edt_nome = '" + dados.edt_nome + 
                    "' , edt_cidade = '" + dados.edt_cidade + 
                    "' , edt_cep = '" + dados.edt_cep + 
                    "' , edt_estado = '" + dados.edt_estado + 
                    "' , edt_email = '" + dados.edt_email + 
                    "' , edt_telefone = '" + dados.edt_telefone + 
               "'  WHERE edt_codigo = '" + dados.edt_codigo + "'";
    client.query(msql, callback);
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
