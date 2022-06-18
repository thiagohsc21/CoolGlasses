<template>
    <div v-if="c">
      <Carrinho :compras="c"/>
    </div>
</template>

<script>
import Carrinho from '@/components/Carrinho.vue'
import compras from '@/objects/carrinho.js'

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
    compras = compras.compras;

    fetch('http://localhost:3000/produtos')
      .then(res => res.json())
      .then(data => {
        let produtos = data;
        
        let produtoNoCarrinho = [];

        compras.forEach((compra, idx) => {
          produtoNoCarrinho.push(produtos[compra.id]);
          produtoNoCarrinho[idx].qtd = compra.qtd;
        });       

        this.c = produtoNoCarrinho;
      })
      .catch(err => alert(err.message));

  }
}
</script>
