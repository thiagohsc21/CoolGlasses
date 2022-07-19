<template>
  <div v-if="produtos">
    <HomePage :produtos="produtos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      produtos: null,
    }
  },
  mounted(){
    fetch('http://localhost:8888')
        .then(res => res.json())
        .then(data =>  {
          
          data = data.filter ( (element) => element.estoque > 0)
          this.produtos = data;

        })
        .catch(err => console.log(err.message))        

  },
  components: {
    HomePage
  }
}
</script>
