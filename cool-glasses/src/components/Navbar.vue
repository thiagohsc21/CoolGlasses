<template>
     <div class="site-navbar">
        <div class="container">
            <div class="row">
                <div class="navegacao">
                    <a href="/">
                        <h1 class="navbar-title"><img id="logo" src="../assets/logo.png" alt="Logo"> CoolGlasses</h1>
                    </a>
                    
                    <span v-show="isAdm" id="link_produtos">
                        <a href="/admin1" >ADMIN</a>
                    </span>

                    <span id="link_produtos">
                        <a href="/produtos" >Produtos</a>
                    </span>

                    <span class="navbar-icons">
                        <a id="cart" class="shopping-cart" href="/carrinho"><i class="fa fa-shopping-cart"></i></a> 
                        <a href="/user"><i class="fa fa-user"></i></a>
                        <a v-if="!isLoged" href="/login">Entrar</a>
                        <a v-else @click="logout()" href="/">Logout</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return  {
        isLoged : false,
        isAdm : false,
    }
  },
  mounted () {
    this.isLoged = localStorage.getItem('usuario') ? true : false;
    
    if (localStorage.getItem('admin') && localStorage.admin == 's')
        this.isAdm = true;
    else
        this.isAdm = false;
  },
  methods:{
    logout() {
        localStorage.removeItem('usuario')
        localStorage.removeItem('admin')
    }
  }
}
</script>

<style>
    
.site-navbar{
    width: 100%;
    height: 75px;
    background-color: var(--dark);
}
.navegacao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.navbar-title{
    font-size: 32px;
    line-height: 75px;
    font-weight: bolder;
    color:white;
    text-decoration: none;
}
#link_produtos{
    padding-right: 100px;
    align-self: center;
    font-size: large;
}
.navbar-icons{
    font-size: 25px;
    line-height: 70px;
    font-weight:bolder;
}
.navbar-icons a{
    color: white;
    /* color: var(--primary); */
    text-decoration: none;
    margin: 7px;
}

.row a {
    text-decoration: none; 
    color: white;
}

.row a:hover{
    color: var(--light);
    text-decoration: underline;
}

</style>