<template>
    <div v-if="produtos">
        <Admin1 :produtos="produtos"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Admin1 from '@/components/Admin1.vue'

export default {
  name: 'Admin1View',
  data () {
    return {
        produtos : null
    }
  },
  components: {
    Admin1
  },
  mounted () {
      fetch('http://localhost:8888')
          .then(res => res.json())
          .then(data => this.produtos = data)
          .catch(err => alert(err.message))
  }
}
</script>
