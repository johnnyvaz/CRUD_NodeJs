var editoras = require('../models/editoras.js');

module.exports = {
  menueditoras,
  salvarLivro,
  editorasBuscar,

  editorasListar
  // editorasNovo,
  // editorasSalvar
  
}

function menueditoras(req, res) {
  res.render('editoras/frm_menueditoras.ejs', { title: 'editoras' });
}

function salvarLivro(dados, callback) {
  var msql = 'INSERT INTO editoras SET ? ';
  
  client.query(msql, dados, callback);
}

function editorasBuscar(req, res){
  var id = req.params.codigo;
  editoras.listarUmaEditora(id, function(err, result){
    if (err) {
      throw err;
    } else{              
      res.render('editoras/frm_editorasEditar.ejs', 
      {livro: result,
        lista_autores: result_autores,
        lista_editoras: result_editoras
      });            
    }
  });            
}



// function alterarLivro(dados, callback) {
//   var msql = "UPDATE editoras SET liv_titulo = '" + dados.liv_titulo + 
//   "' , liv_edicao = '" + dados.liv_edicao + 
//   "' , liv_isbn = '" + dados.liv_isbn + 
//   "' , aut_codigo = '" + dados.aut_codigo + 
//   "' , edt_codigo = '" + dados.edt_codigo + 
//   "' , liv_ano = '" + dados.liv_ano + 
//   "' , liv_ativoinativo = '" + dados.liv_ativoinativo + 
//   "' , liv_dtcadastro = '" + dados.liv_dtcadastro + 
//   "'  WHERE liv_codigo = '" + dados.liv_codigo + "'";
//   //    console.log('Estou alterando o livro.......');
//   //    console.log(msql);
//   client.query(msql, callback);
// }

function editorasListar(req, res) {
  editoras.editorasListar(function (err, result) {
    console.log("Listar editoras: ");
    if (err) {
      throw err;
    }
    res.render('editoras/frm_editorasListar.ejs',
    {
      title: 'Listar editoras',
      editoras: result
    });
  });
};

// function editorasNovo(req, res) {
//   var dados = [
//     {
//       edt_codigo: "",
//       edt_dtcadastro: "",
//       edt_nome: "",
//       edt_cidade: "",
//       edt_cep: "",
//       edt_estado:"",
//       edt_email:"",
//       edt_telefone:""
//     }
//   ];
  
//   editoras.listarAutores(function (err, result_autores) {
//     if (err) {
//       throw err;
//     } else {
//       editoras.listarEditoras(function (err, result_editoras) {
//         if (err) {
//           throw err;
//         } else {
//           res.render('editoras/frm_editorasEditar.ejs',
//           {
//             livro: dados,
//             lista_autores: result_autores,
//             lista_editoras: result_editoras
//           });
//         }
//       });
//     }
//   });
// }

// function editorasSalvar(req, res) {
//   var dados = req.body;
//   console.log("Salvando Livro...");
//   console.log(req.body);
//   if (dados.liv_codigo == "") {
//     dados.liv_codigo = null;
//     console.log("Inserindo Livro...");
//     editoras.salvarLivro(dados, function (err, result) {
//       if (err) {
//         throw err;
//       }
//       res.redirect('/editoras/listar');
//     })
//   } else {
//     console.log("Alterando Livro...");
//     editoras.alterarLivro(dados, function (err, result) {
//       if (err) {
//         throw err;
//       }
//       res.redirect('/editoras/listar');
//     });
//   }
  
// }




