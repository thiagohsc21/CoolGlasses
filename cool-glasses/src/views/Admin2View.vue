<template>
    <div v-if="produto">
        <Admin2 :produto="produto"/>
    </div>
</template>

<script>

import Admin2 from '@/components/Admin2.vue'

export default {
  name: 'Admin2View',
  data () {
    return {
        produto : null
    }
  },
  components: {
    Admin2
  },
  mounted () {
    let param = this.$route.params.id;
    if(param == 'Novo') {
      this.produto = {
        imagem : "noImgOculos.png"
      }
    }
    else {
      fetch('http://localhost:8888/' + param)
          .then(res => res.json())
          .then(data => this.produto = data)
          .catch(err => alert(err.message))
    }
  }
}
</script>
