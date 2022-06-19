<template>
    <div v-if="c">
      <Carrinho :compras="c"/>
    </div>
</template>

<script>
import Carrinho from '@/components/Carrinho.vue'
import {compras} from '@/objects/objects.js'

export default {
  name: 'CarrinhoView',
  data () {
    return {
      c : null
    }
  },
  components: {
    Carrinho
  },
  mounted() {
    // compras = compras.compras;
    console.log('compras no mounted ',compras);

    fetch('http://localhost:3000/produtos')
      .then(res => res.json())
      .then(data => {
        let produtos = data;
        
        let produtoNoCarrinho = [];

        console.log(compras.getObjs());

        compras.getObjs().forEach((compra, idx) => {
          produtoNoCarrinho.push(produtos[compra.id]);
          produtoNoCarrinho[idx].qtd = compra.qtd;
        });       

        this.c = produtoNoCarrinho;
      })
      .catch(err => alert(err.message));

  }
}
</script>
