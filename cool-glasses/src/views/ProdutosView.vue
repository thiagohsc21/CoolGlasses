<template>
    <div v-if="produtos">
      <Produtos :objs="produtos" />
    </div>
</template>

<script>
import Produtos from '@/components/Produtos.vue'

export default {
  name: 'ProdutosView',
  data () {
    return {
      produtos : null
    }
  },
  components: {
    Produtos
  },
  mounted(){
      fetch('http://localhost:8888')
          .then(res => res.json())
          .then(data => this.produtos = data)
          .catch(err => alert(err.message))
  }
}
</script>
