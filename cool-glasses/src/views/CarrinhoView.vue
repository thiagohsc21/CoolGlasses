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
    var produtoNoCarrinho = [];

    var p = new Promise ( () => (compras.getObjs()).forEach((compra, idx) => {
      console.log('compra', compra)
      fetch('http://localhost:8888/' + compra.id_produto)
        .then (res => res.json ())
        .then (data => {
          // console.log(data)

          produtoNoCarrinho.push(data);
          produtoNoCarrinho[idx].qtd = compra.qtd;

          // this.c = produtoNoCarrinho;

          // console.log('AAA')
        })
        .catch(err => alert(err.message));


    }))

    console.log(p)

    // p.then(this.c = produtoNoCarrinho[0])
    Promise.resolve(p);
    this.c = produtoNoCarrinho;
      // console.log('p in cart', Array.from( produtoNoCarrinho ))

      console.log('c:',this.c)
    setTimeout(() => {console.log("dealy")}, "1000")

    // fetch('http://localhost:8888')
    //   .then(res => res.json())
    //   .then(data => {
    //     let produtos = data;
        
    //     let produtoNoCarrinho = [];

    //       console.log(produtos);

    //     (compras.getObjs()).forEach((compra, idx) => {
    //       // console.log(produtos)
    //       produtoNoCarrinho.push(produtos[compra.id_produto]);
    //       console.log(produtoNoCarrinho[idx])
    //       // produtoNoCarrinho[idx].q td = compra.qtd;
    //     });       

      //   this.c = produtoNoCarrinho;
      // })
      // .catch(err => alert(err.message));

  }
}
</script>