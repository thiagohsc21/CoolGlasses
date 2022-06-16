<template>
     <div class="site-navbar">
        <div class="container">
            <div class="row">
                <div class="navegacao">
                    <a href="home.html">
                        <h1 class="navbar-title"><img id="logo" src="../assets/logo.png" alt="Logo"> CoolGlasses</h1>
                    </a>

                    <span id="produtos">
                        <a href="produtos.html" >Produtos</a>
                    </span>

                    <span class="navbar-icons">
                        <a id="cart" class="shopping-cart" href="carrinho.html"><i class="fa fa-shopping-cart"></i></a> 
                        <a href="user.html"><i class="fa fa-user"></i></a>
                        <a href="login.html">Entrar</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
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
#produtos{
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
    color: var(--primary);
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