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
                <div class="produtos_carrinho" v-for="produto in comprass">
                    <p_no_carrinho :obj="produto"/>
                </div>
            </div>
        </div>
    </div>
    <br><br>
    <h4 id="sub_titulo">Método de Pagamento: </h4>

    <div class="fim_painel">
        <div id="met_pag">
            <div class="chechbox_pag">
                <input type="radio" id="avista" name="pagamento" checked onclick="if(document.getElementById('parcelas').disabled==false){document.getElementById('parcelas').disabled=true}">
                <label for="scales">À VISTA</label>
            </div>
            <br>
            <div id="total">
                <p> Preço Total: R$ {{valor_total}}</p>
            </div>
        </div>
    </div>
    
    <br>
    <a>
        <input @click="finalizaCompra()" class="finalizar_compra" type="button" value="Finalizar Compra">
    </a>

    <br><br>
    <a id="continue_comprando" href="/produtos"> Continue Comprando</a>
    <br><br><br>
    </div>

</template>

<script>
import p_no_carrinho from '@/components/components/p-no-carrinho.vue'
import { compras } from '@/objects/objects'
import router from '@/router'


export default {
  name: 'Carrinho',
  props: {
    comprass: Array
  },
  components: {
    p_no_carrinho
  },
  data(){
    return{
        carrinho_vazio: false,
        valor_total: 0,
        num_parcelas: 0
    }
  },
  methods: {
    finalizaCompra() {
        console.log('compras', this.comprass);
        if (localStorage.getItem('usuario')) {
            // this.comprass.forEach(compra => {
            for (const compra of this.comprass) {
                console.log('compra', compra);
                if ( compra.qtd > compra.estoque ) {
                    alert ("Impossivel comprar essa quantidade!");
                    return;
                }
            };


            router.push('/finalizar_compra');
        }
        else{
            alert("Faça Login para continuar")
            router.push('/login')
        }
    }
  },
  mounted() {
    this.carrinho_vazio = this.comprass.length == 0
    function calcula_total(comprass){
        let valor_aux = 0
        for(let i in comprass){
            valor_aux += (comprass[i].qtd * comprass[i].preco)
        }

        return (valor_aux.toFixed(2))
    }

    this.valor_total = calcula_total(this.comprass)
  },
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