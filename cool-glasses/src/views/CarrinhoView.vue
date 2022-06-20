<template>
    <div v-if="produtos">
    {{produtos}}
      <Carrinho :compras="compras"/>
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
    }
  },
  mounted() {
    this.compras = compras.compras;

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
