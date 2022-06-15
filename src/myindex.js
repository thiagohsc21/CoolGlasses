VUe.component('nav-bar', {
    template
})

const app = new Vue({
    el: '#myapp'
})


import { createApp } from 'vue'
import App from './'

createApp(NavBar).mount('#app')
