<template>
     <div class="siteInfo">
        <p> PÁGINA INICIAL > PRODUTOS > OCULOS </p>
    </div> 

    <div class="destaque">
        <div class="imgEPreco">
            <img id="imagem"  :src="require(`../assets/imagens/${obj.imagem}`)">
            <p>R$ {{obj.preco}}</p>
        </div>
        <div class="descricaoEComprar">
            <h1>{{obj.nome}}</h1>
            <p>{{obj.descricao}}</p>
            <div>
                <button v-on:click="addCarrinho()" id="comprar">
                    <Transition name="bounce">
                        <p v-if="!clicado">Adicionar ao carrinho <i class="bi bi-cart-plus"></i></p>
                        <p v-else>No Carrinho</p>
                    </Transition>
                </button>
            </div>
        </div>
    </div>

    <div class="tituloRecomendados">Outros compraram</div>

    <div class="recomendados" >
        <div class="x" v-for="produto in recomendados" v-if="limite<=2">
            <p_produto class="y" :obj="produto" v-if="produto._id != obj._id" >
                <div @focusin="teste()"></div>
            </p_produto>
        </div>
    </div>

</template>

<script>
import {compras} from '@/objects/objects'
import p_produto from '@/components/components/p-produto.vue'

export default {
    name: "Produto",
    props: {
        obj: {
            nome: String,
            id: String,
            descricao: String,
            imagem: String,
            preco: Number
        },
        recomendados: Array
    },
    data() {
        return {
            clicado: false,
            limite: 0
        };
    },
    methods: {
        addCarrinho() {
            console.log(this.limite)
            compras.pushObjs({
                id_produto: this.obj._id,
                qtd: 1,
                valor: this.obj.preco
            });
            this.clicado = true;
            document.getElementById("comprar").style.filter = "grayscale(0.6)";

        },
        teste () {
            this.limite ++;
        }
    },
    components: { p_produto  }
}

</script>

<style>
    .siteInfo{
    margin-top:10px;
    margin-left: 10px;
}

.destaque {
    margin-right: 20px;
    margin-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    background-color: var(--cinza-claro);
}

.imgEPreco {
    width: 40%;
    align-self: auto;
    text-align: center;
    font-size:xx-large;
}

.descricaoEComprar {
    width: 60%;
    display:flex;
    flex-direction: column;
}

#imagem {
    width: 350px;
    filter: drop-shadow(10px 10px 10px #fff)
}

#comprar {
    width: 100%;
    height: 40px;
    width: 100%;
    background-color: green;
    color: white;
    border-radius: 4px;
    font-weight: 100;
    font-size: x-large;
    text-align: center;
    align-self: center;
    border: none;
}

#comprar:hover {
    filter: brightness(1.3);
}

.tituloRecomendados {
    font-size: large;
    margin: 20px;
    text-align: center;
    color: white;
    background-color: var(--primary);
}


.recomendados {
    margin: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-self: center;
    width: 100%;
}

.y{
    color: black;
    text-decoration: none;
    /* margin: auto; */
    /* width: 300px; */
}



.bounce-enter-active {
  animation: bounce-in 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>