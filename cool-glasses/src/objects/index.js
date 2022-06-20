const produtos = require('./produtos.json');
const compras = require('./compras.json');
const compras = require('./estoque.json');

module.exports = () => ({
  compras: compras,
  produtos: produtos,
  estoque : estoque
});