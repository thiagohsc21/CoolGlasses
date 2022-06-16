<template>
  <NavBar/>
  
    <div id="slogan">
        <!-- <img src="./assets/emogiLogo.png"> -->
        <produto :obj="myObj"/>
    </div>

</template>

<script>
import NavBar from './components/nav-bar.vue'
import Produto from './components/produto.vue'

let teste = {
  id: 'p1',
  nome: 'oculos legal',
  preco: 199.90,
  imagem: './assets/aviatorpreto.png'
};

export default {
  name: 'App',
  data() {
    return {
      myObj: teste
    }
  },
  components: {
    NavBar,
    Produto
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
