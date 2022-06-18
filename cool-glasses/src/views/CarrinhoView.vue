<template>
    <div v-if="compras">
      <Carrinho :compras="compras"/>
    </div>
</template>

<script>
import Carrinho from '@/components/Carrinho.vue'
import compras from '@/objects/carrinho'

compras = compras.compras;

var produtos = null;

fetch('http://localhost:3000/produtos')
    .then(res => res.json())
    .then(data => {
      produtos = data;
    })
    .catch(err => alert(err.message));

//
async function funcName(url){
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

produtos = funcName('http://localhost:3000/produtos');

console.log('produtos ', produtos);
//


let produtoNoCarrinho = [];

compras.forEach((compra, idx) => {
  produtoNoCarrinho.push(produtos[compra.id])
  produtoNoCarrinho[idx].qtd = compra.qtd
});


export default {
  name: 'CarrinhoView',
  data () {
    return {
      compras : produtoNoCarrinho
    }
  },
  components: {
    Carrinho
  }
}
</script>
