<template>
  <!-- <div v-if="user"></div> -->
    <User :user="user"/>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User.vue'

export default {
  name: 'UserView',
  data() {
    return {
      user: null
    }
  },
  components: {
    User
  },
  mounted () {
    fetch('http://localhost:8888/user/' + localStorage.usuario)
          .then(res => res.json())
          .then(data => {
            this.user = data; 
          })
          .catch(err => alert(err.message))
  }
}
</script>
