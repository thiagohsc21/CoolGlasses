<template>
    <a class="titulo" href="user.html">
        <h2> ADMIN </h2>
    </a>
    
    <br/><br/>
    <h6 id="caminho"><a class="item_caminho" href="user.html">ADMIN</a> > EDITAR PRODUTOS</h6>
    <br/>

    <div class="painel_produtos">
        <div v-if="produtosNovo.length" v-for="produto in produtosNovo">

            <div class="item">
                <input type="checkbox" :id="produto._id" v-model="checkeds[produto._id]">
                <img :src="require(`@/assets/imagens/${produto.imagem}`)" :alt="produto.nome">
                <div class="produto">
                    <p>{{produto.nome}}</p> 
                    <div class="descricao">
                        <p class="valor"> R$ {{produto.preco}} </p>
                        <p> Estoque: {{produto.estoque}} </p>
                        <p> Vendidos: {{produto.vendidos}} </p>
                    </div>
                </div> 
                <a class="teste" :href="'/admin2/' + produto._id"><i class="bi bi-pencil-square"></i></a>
                
            </div>  

        </div>
    </div>

    <div class="botoes">
        <div id="botaoAdd" @click="addFunc()">
            <a>
                <i class="bi bi-plus-square"></i>
                <p>Adicionar</p>
            </a>
        </div>
        <div id="botaoDelete" @click="deleteFunc()">
            <a>
                <i class="bi bi-trash"></i>
                <p>Deletar Selecionados</p>
            </a>
        </div>
    </div>
    <br/>

</template>

<script>
import router from '@/router'


export default {
    nome: 'Admin1',
    props: {
        produtos : Array
    },
    data () {
        return {
            checkeds : [],
            produtosNovo: [],
        }
    },
    methods: {
        addFunc () {
            router.push("/admin2/Novo")
            
        },
        deleteFunc() {
            console.log(this.checkeds.values())
            this.checkeds.forEach((value, index) => {
                if(value){
                    console.log(index);
                // fetch("http://localhost:8888/" + index, {
                    //     method: 'DELETE'
                    // })
                }

            })
            this.produtosNovo = this.produtosNovo.filter((value, index, arr) => {
                return (!(this.checkeds[index] == true))
            })
        }
    },
    mounted () {
        if (localStorage.getItem("admin") && localStorage.admin == 'n')
            router.back();
        if(!localStorage.getItem("admin"))
            router.back();
        

        this.produtosNovo = this.produtos
    }
}


</script>

<style>

.painel_produtos{    
    width: 1000px;
    background-color: var(--cinza-claro);
    margin: auto;
}

.produtos{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.item {
    width: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
}

.item input {
    margin-right: 20px;
    cursor:pointer;
    width: 1.15em;
    height: 1.15em;
}

.item img{
    height: 200px;
}

.item a{
    margin-left: auto;
    margin-right: 40px;
    font-size:4.5ch;
}

.produto {
    padding-left: 10px;
    display:flex;
    flex-direction: column;
    padding-right: 100px;
}

.descricao {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap:60px;
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

.botoes {
    font-weight: bolder;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1000px;
    margin: auto;
}

.botoes div {
    cursor: pointer;
}

#botaoAdd {
    padding:0px 10px;
    background-color: green;
    transition: width 2s, height 2s, transform 2s;
}

#botaoAdd:active, #botaoDelete:active {
    font-size: 18px;
    transition: 0.1s;
}

#botaoAdd:hover, #botaoDelete:hover{
    box-shadow: 0px 4px 20px;
}

#botaoDelete {
    padding:0px 10px;
    background-color: red;
}

#botaoAdd a, #botaoDelete a{
    height: 25px;
    color:white;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.teste {
    cursor: pointer;
    color:black
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