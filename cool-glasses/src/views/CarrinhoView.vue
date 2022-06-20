<template>
    <div v-if="produtos">
    {{produtos}}
      <Carrinho :compras="compras" :vazio="vazio"/>
    </div>
    <div v-else>

    </div>
</template>

<script>
import Carrinho from '@/components/Carrinho.vue'
import compras from '@/objects/carrinho.js'


export default {
  name: 'CarrinhoView',
  data () { 
    return {
      compras: null,
      produtos: null,
      vazio: null
    }
  },
  mounted() {
    this.compras = compras.compras;

    if (compras.length() == 0)
      vazio = true;

      async function myfetch(){
        let produtos = fetch('http://localhost:3000/produtos')
        return (await produtos).json()
      }
      
      async function recebe_prod(compras){
          let produtos = await myfetch()
          let produtoNoCarrinho = [];
          let idx = 0;
          
          for(let i in produtos){
            for(const compra of compras){
              if(produtos[i].id == compra.id){
                produtoNoCarrinho.push(produtos[compra.id])
                produtoNoCarrinho[idx].qtd = compra.qtd
                idx += 1
              }
            }
          }
        return produtoNoCarrinho
             
      }
    
    recebe_prod(this.compras).then(prods=>this.produtos=prods)
    console.log(this.produtos)
  },
  components: {
    Carrinho
  },
}
</script>

<!-- <template>
    <Carrinho />
</template>

<script>
// @ is an alias to /src
import Carrinho from '@/components/Carrinho.vue'
export default {
  name: 'CarrinhoView',
  components: {
    Carrinho
  }
}
</script> -->
