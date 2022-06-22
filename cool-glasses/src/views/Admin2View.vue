<template>
    <!-- <div v-if="produto"> -->
        <Admin2 :produto="produto"/>
    <!-- </div> -->
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
      fetch('http://localhost:3000/produtos/' + this.$route.params.id)
          .then(res => res.json())
          .then(data => this.produto = data)
          .catch(err => alert(err.message))
  }
}
</script>
