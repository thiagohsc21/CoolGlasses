<template>
  <div v-if="prod">
    <Pedidos :produtos="prod"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pedidos from '@/components/Pedidos.vue'
import {pedidos} from '@/objects/objects.js'

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


        (pedidos.getObjs()).forEach((pedido, idx) => {
          produtosPedidos.push(produtos[pedido.idx_produto]);
          console.log("pedido qtd: ", pedido.qtd)
          produtosPedidos[idx].qtd = pedido.qtd;
        });       

        this.prod = produtosPedidos;
      })
      .catch(err => alert(err.message));

  }
}
</script>
