<template>
    <p>aloooo</p>
    <Produto :obj="p"/>
    <p>{{$route.params.nome}}</p>
</template>

<script>
// @ is an alias to /src
import Produto from '@/components/Produto.vue'
import produtos from '@/objects/objects.js'


export default {
  name: 'ProdutoView',
  data() {
    return {
      nome: this.$route.params.nome,
      p: produtos.produtos[this.nome]
    }
  },
  components: {
    Produto
  },
  created() {
    console.log(produtos.produtos)
  }
}
</script>
