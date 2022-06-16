<template>
    <Produto :obj="p"/>
</template>

<script>
// @ is an alias to /src
import Produto from '@/components/Produto.vue'
import produtos from '@/objects/objects.js'

let p = produtos[$route.params.nome];

export default {
  name: 'ProdutoView',
  data() {
    return {
      p : p
    }
  },
  components: {
    Produto
  }
}
</script>
