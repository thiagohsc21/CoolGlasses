<template>
    <User v-if="user" :user="user"/>
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
    fetch('http://localhost:3000/users')
          .then(res => res.json())
          .then(data => {
            this.user = data[localStorage.usuario]; 
          })
          .catch(err => alert(err.message))
  }
}
</script>
