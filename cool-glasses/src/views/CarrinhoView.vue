<template>
    <div v-if="c">
      <Carrinho :compras="c"/>
    </div>
</template>

<script>
import Carrinho from '@/components/Carrinho.vue'
import compras from '@/objects/carrinho.js'

compras = compras.compras;

var produtos = null;

fetch('http://localhost:3000/produtos')
  .then(res => res.json())
  .then(data => {
    produtos = data;
  })
  .catch(err => alert(err.message));

console.log('produtos depois: ', produtos);

let produtoNoCarrinho = [];

compras.forEach((compra, idx) => {
  produtoNoCarrinho.push(produtos[compra.id])
  produtoNoCarrinho[idx].qtd = compra.qtd
});

this.c = produtoNoCarrinho;

export default {
  name: 'CarrinhoView',
  data () {
    return {
      c : null,
      teste : null
    }
  },
  components: {
    Carrinho
  },
  mounted() {
  }
}
</script>
