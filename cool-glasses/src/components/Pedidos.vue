<template>
    <br><br>
    <a class="titulo" href="/user">
        <h2> Meu Perfil</h2>
    </a>
    <br><br>
    <h6 id="caminho"><a class="item_caminho" href="/user">MEU PERFIL</a> > <a class="item_caminho" href="/pedidos"> PEDIDOS</a></h6>
    <br><br>

    <div v-if="pedidos_vazio" id="pedidos_vazio">
        <h1>VOCÊ AINDA NÃO TEM NENHUM PEDIDO EM NOSSA LOJA</h1>
        <p>Não há nenhum produto no seu pedidos, volte para a página de 
            <a href="/produtos">Produtos</a> para adicionar algum oculos em seu carrinho, ao finalizar a compra ela aparecerá aqui</p>
    </div>

    <div v-else>
        <div class="painel_pedidos">
            <div class="container">
                <div class="row">
                    <div class="produtos_pedidos" v-for="produto in produtos">
                        <p_no_pedidos :obj="produto"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
<br><br><br>
</template>

<script>
import p_no_pedidos from '@/components/components/p-no-pedidos.vue'

    export default {
    name: 'Pedidos',
    props: {
        produtos: Array
    },
    components: {
        p_no_pedidos
    },
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