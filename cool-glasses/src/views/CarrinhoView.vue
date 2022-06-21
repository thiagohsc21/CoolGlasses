<template>
    <div v-if="c">
      <Carrinho :compras="c"/>
      {{teste}}
    </div>
</template>

<script>
import Carrinho from '@/components/Carrinho.vue'
import {compras, testee} from '@/objects/objects.js'

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

    fetch('http://localhost:3000/produtos')
      .then(res => res.json())
      .then(data => {
        let produtos = data;
        
        let produtoNoCarrinho = [];


        (compras.getObjs()).forEach((compra, idx) => {
          produtoNoCarrinho.push(produtos[compra.idx_produto]);
          produtoNoCarrinho[idx].qtd = compra.qtd;
        });       

        this.c = produtoNoCarrinho;

      })
      .catch(err => alert(err.message));

  }
}
</script>