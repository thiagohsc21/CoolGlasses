<template>
    <br><br>
    <a class="titulo" href="/user">
        <h2> Meu Perfil</h2>
    </a>
    <br><br>
    <h6 id="caminho"><a class="item_caminho" href="/user">MEU PERFIL</a> > <a class="item_caminho" href="/pedidos"> PEDIDOS</a></h6>
    <br><br>

    <div class="painel_pedidos">
        <div class="container">
            <div class="row">
                <div class="produtos_pedidos">
                    <a href="p1.html">
                        <div class="produto">
                            <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                            <div class="valor_prod"> 
                                <p>Valor: <br> R$ 249,99</p>
                            </div>
                            <div class="nome_prod"> 
                                <p>Oculos de Sol Quadrado Preto <br> <br> Quantidade: X</p>
                            </div> 
                        </div>
                    </a>
                    
                    <a href="p2.html">
                        <div class="produto">
                            <img class="OculosEmAlta" src="../assets/imagens/aviatorRosa.png" alt="oculos2">
                            <div class="valor_prod"> 
                                <p>Valor: <br> R$ 199,99</p>
                            </div> 
                            <div class="nome_prod"> 
                                <p>Oculos Aviator Rosa <br> <br> Quantidade: X</p>
                            </div>
                        </div> 
                    </a>
                </div>
            </div>
        </div>
    </div>
    <br><br><br>

</template>

<script>
    export default {
    name: 'Pedidos',
    }
</script>

<style>
    .painel_pedidos{    
        width: 1000px;
        background-color: var(--cinza-claro);
        margin: auto;
    }

    .produtos{
        width: 100%;
        display: inline-block;
        align-items: center;
    }

    .produtos_pedidos img{
        height: 200px;
    }

    .produtos_pedidos a{
        color: black;
        text-decoration: none;
        margin: auto;
    }

    .nome_prod{
        float: right;
        width: 50%;
        padding-top: 60px;
    }

    .valor_prod{
        float: right;
        width: 20%;
        padding-top: 60px;
    }

    .titulo{
        width: 150px;
        float: left;
        margin-left: 20%;
        color: black;
        text-decoration: none;
    }

    .titulo:hover{
        color: gray;
    }

    #caminho{
        float: left;
        margin-left: 20%;
    }

    .item_caminho{
        color: black;
    }

    .item_caminho:hover{
        color: gray;
    }

</style>