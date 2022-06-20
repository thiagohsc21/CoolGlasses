<template>
    <br><br>
    <h2 id="titulo"> Carrinho</h2>
    <br><br>
    <h6 id="caminho"><a class="item_caminho" href="/">PÁGINA INICIAL</a> > <a class="item_caminho" href="/carrinho"> CARRINHO</a></h6>
    <br><br>

    <div v-if="carrinho_vazio" id="carrinho_vazio">
        <h1>SEU CARRINHO ESTÁ VAZIO</h1>
        <p>Não há nenhum produto no seu carrinho, volte para a página de 
            <a href="/produtos">Produtos</a> para adicionar algum oculos em seu carrinho</p>
    </div>

    <div v-else>
        <div class="painel_carrinho">
        <div class="container">
            <div class="row">
                <div class="produtos_carrinho">
                    <a href="/produto">
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
                    
                    <a href="/produto">
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
    <br><br>
    <h4 id="sub_titulo">Método de Pagamento: </h4>

    <div class="fim_painel">
        <div id="met_pag">
            <div class="chechbox_pag">
                <input type="checkbox" id="avista" name="avista" checked>
                <label for="scales">À VISTA</label>
            </div>

            <div class="chechbox_pag">
                <input type="checkbox" id="parcelado" name="parcelado">
                <label for="scales">PARCELADO (4x R$ 50,00)</label>
            </div>
            <br>
            <div id="total">
                <p> Preço Total: R$449,98</p>
            </div>
        </div>
    </div>
    
    <br>
    <a href="/finalizar_compra">
        <input class="finalizar_compra" type="button" value="Finalizar Compra">
    </a>

    <br><br>
    <a id="continue_comprando" href="/produto"> Continue Comprando</a>
    <br><br><br>
    </div>

    <div>
        <!-- {{compras}} -->

        <div v-for="compra in compras">
            
        </div>

    </div>

</template>

<script>

export default {
  name: 'Carrinho',
  props: {
    compras: Array,
    carrinho_vazio: Boolean
  },
  mounted(){
    // console.log(this.compras)
  }
}
</script>

<style>
    .painel_carrinho{    
        width: 1000px;
        background-color: var(--cinza-claro);
        margin: auto;
    }

    .produtos{
        width: 100%;
        display: inline-block;
        align-items: center;
    }

    .produtos_carrinho img{
        height: 200px;
    }

    .produtos_carrinho a{
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


    .fim_painel{
        width: 1000px;
        background-color: var(--cinza-claro);
        margin: auto;
    }

    #met_pag{
        width: 100%;
        display: inline-block;
        align-items: center;
        padding: 30px;
    }

    .chechbox_pag{
        width: 50%;
    }

    #total{
        float: left;
        vertical-align: top;
    }

    #titulo{
        float: left;
        padding-left: 20%;
    }
    #sub_titulo{
        color: black;
        margin-left: 20%;
    }
    .finalizar_compra{
        width: 150px;
        margin-left: 20%;
    }

    #continue_comprando{
        margin-left: 20%;
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

    #carrinho_vazio{
        margin-left: 20%;
        margin-top: 5%;
        margin-bottom: 15%;
    }
</style>