<template>
    <div v-if="c">
      <Carrinho :comprass="c"/>
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
  async mounted() {


    /*

      const {productIds} = req.body;

      const products = await Product.find({
        _id: {
          $in: productIds
        }
      });
      

      await fetch('http://localhost:3000/api/carrinho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          products
        })
      });

     */

    const produtosPromises = [];

    for (const compra of compras.getObjs()) {
      produtosPromises.push((async () => {
        const produto = await fetch('http://localhost:8888/' + compra.id_produto).then(res => res.json()).catch(err => alert(err.message));

        produto.qtd = compra.qtd;

        return produto;
      })());
    }

    const produtos = await Promise.all(produtosPromises);

    this.c = produtos;

  }
}
</script>