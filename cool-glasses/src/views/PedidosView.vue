<template>
  <div v-if="prod">
    <Pedidos :produtos="prod"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pedidos from '@/components/Pedidos.vue'
import {compras} from '@/objects/objects.js'

export default {
  name: 'LoginView',
  data(){
    return{
      prod : null
    }
  },
  components: {
    Pedidos
  },
    mounted() {

    fetch('http://localhost:3000/produtos')
      .then(res => res.json())
      .then(data => {
        let produtos = data;
        
        let produtosPedidos = [];


        (compras.getObjs()).forEach((compra, idx) => {
          produtosPedidos.push(produtos[compra.idx_produto]);
          produtosPedidos[idx].qtd = compra.qtd;
        });       

        this.prod = produtosPedidos;
      })
      .catch(err => alert(err.message));

  }
}
</script>
