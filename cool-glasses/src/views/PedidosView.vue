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
  async mounted() {


        let ppedidos;

        await fetch('http://localhost:8888/pedidos/' + this.$route.params.id)
          .then(res => res.json())
          .then(data => ppedidos = data)
          .catch(err => alert(err.message));

        const produtosPromises = [];

        for (const pedido of ppedidos) {
          produtosPromises.push((async () => {
            const produto = await fetch('http://localhost:8888/' + pedido.id_produto).then(res => res.json()).catch(err => alert(err.message));

            produto.qtd = pedido.qtd;

            return produto;
          })());

        // (pedidos.getObjs()).forEach((pedido, idx) => {
        //   produtosPedidos.push(produtos[pedido.idx_produto]);
        //   console.log("pedido qtd: ", pedido.qtd)
        //   produtosPedidos[idx].qtd = pedido.qtd;
        // });       
        const produtosPedidos = await Promise.all(produtosPromises);

        this.prod = produtosPedidos;
        }
  }
}
</script>
