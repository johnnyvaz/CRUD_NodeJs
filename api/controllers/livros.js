var Livros = require('../models/livros.js');

module.exports = {
  menuLivros,
  livrosListar,
  livrosBuscar,
  livrosNovo,
  livrosSalvar
  
}

function menuLivros(req, res) {
  res.render('livros/frm_menulivros.ejs', { title: 'Livros' });
}

function livrosBuscar(req, res){
  var id = req.params.codigo;
  Livros.listarUmLivro(id, function(err, result){
    if (err) {
      throw err;
    } else{
      Livros.listarAutores(function (err, result_autores) {
        if (err) {
          throw err;
        } else {
          Livros.listarEditoras(function (err, result_editoras) {
            if (err) {
              throw err;
            }else{
              
              res.render('livros/frm_livrosEditar.ejs', 
              {livro: result,
                lista_autores: result_autores,
                lista_editoras: result_editoras
              });            
            }
          });            
        }
      });
    }
  });
}



function livrosListar(req, res) {
  Livros.listarLivros(function (err, result) {
    console.log("Listar Livros: ");
    if (err) {
      throw err;
    }
    res.render('livros/frm_livrosListar.ejs',
    {
      title: 'Listar Livros',
      livros: result
    });
  });
};

function livrosNovo(req, res) {
  var dados = [
    {
      liv_codigo: "",
      liv_titulo: "",
      liv_edicao: "",
      liv_isbn: "",
      liv_ano: "",
      aut_codigo: "",
      edt_codigo: ""
    }
  ];
  
  Livros.listarAutores(function (err, result_autores) {
    if (err) {
      throw err;
    } else {
      Livros.listarEditoras(function (err, result_editoras) {
        if (err) {
          throw err;
        } else {
          res.render('livros/frm_livrosEditar.ejs',
          {
            livro: dados,
            lista_autores: result_autores,
            lista_editoras: result_editoras
          });
        }
      });
    }
  });
}

function livrosSalvar(req, res) {
  var dados = req.body;
  console.log("Salvando Livro...");
  console.log(req.body);
  if (dados.liv_codigo == "") {
    dados.liv_codigo = null;
    console.log("Inserindo Livro...");
    Livros.salvarLivro(dados, function (err, result) {
      if (err) {
        throw err;
      }
      res.redirect('/livros/Listar');
    })
  } else {
    console.log("Alterando Livro...");
    Livros.alterarLivro(dados, function (err, result) {
      if (err) {
        throw err;
      }
      res.redirect('/livros/listar');
    });
  }
  
}




