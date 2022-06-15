<template>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="shortcut icon" href="../imagens/emogiLogo.png">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoolGlasses</title>
     <div class="site-navbar">
        <div class="container">
            <div class="row">
                <div class="navegacao">
                    <a href="home.html">
                        <h1 class="navbar-title"><img id="logo" src="../assets/emogiLogo.png" alt="Logo"> CoolGlasses</h1>
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
    :root {
    --azul-claro-fundo: rgb(149, 149, 243);

    --cinza-claro: rgb(235, 233, 246);

    --primary: #4b6387;
    --dark:#1d395a;
    --light:#7990b7;
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
body {
    display: flex;
    flex-direction: column;
    color: var(--primary);
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

.rodape{
    display: block;
    background-color: var(--dark);
    font-size: x-medium;
    padding: 9px;
    width: 100%;
}
.rodape p, a, h3{ 
    color:white; 
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