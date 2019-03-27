var Controller = require('../models/formularios.js');

module.exports = {
  
    menu,
    empresa,
    veiculo

}  

function menu(req, res) {
  res.render('formularios/frm_menu.ejs', {title: 'Formularios'});      
}
function empresa(req, res) {
  res.render('formularios/frm_empresa.ejs', {title: 'Empresa'});      
}
function veiculo(req, res) {
  res.render('formularios/frm_veiculos.ejs', {title: 'Veículos'});      
}
