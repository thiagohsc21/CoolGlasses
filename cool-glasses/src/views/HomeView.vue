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
    fetch('http://localhost:3000/produtos')
        .then(res => res.json())
        .then(data =>  {

          this.produtos = data;
          console.log(data);

        })
        .catch(err => console.log(err.message))
        
  },
  components: {
    HomePage
  }
}
</script>
