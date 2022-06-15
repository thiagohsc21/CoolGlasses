<template>
<div class="site-navbar">
    <div  class="row">
        <div class="navegacao">
            <a href="home.html">
                <!-- <h1 class="navbar-title"><img id="logo" src="../imagens/emogiLogo.png" alt="Logo"> CoolGlasses</h1> -->
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
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
:root {
    --azul-claro-fundo: rgb(149, 149, 243);

    --cinza-claro: rgb(235, 233, 246);

    --primary: #4b6387;
    --dark:#1d395a;
    --light:#7990b7;
}
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
}


.list-inline {
    display: flex; 
    flex-direction: row; 
    font-size: 2em;
    gap: 2em;
}
.list-inline li{
    color: black
}

#logo{
    width: 40px;
    height: 40px;
    position: relative;
    bottom: 5px;
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