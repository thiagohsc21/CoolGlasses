const produtos = require('./produtos.json');
const compras = require('./compras.json');

module.exports = () => ({
  compras: compras,
  produtos: produtos
});