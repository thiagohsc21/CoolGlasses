const produtos = require('./produtos.json');
const compras = require('./compras.json');
const estoque = require('./estoque.json');
const users = require('./users.json');

module.exports = () => ({
  compras: compras,
  produtos: produtos,
  estoque : estoque,
  users : users,
});