<template>
    <div id="tudo">
        <div id="barraEsquerda">
            <h1>FILTRAR POR</h1>

            <div id="filtros">

                <h2>Tipo de Óculos</h2>
                
                    <div v-for="tipo in tipos" class="filtroCheck">
                        <input type="checkbox" :id="tipo" :value="tipo" v-model="checked.tipos">
                        <label :for="tipo">{{tipo}}</label>
                    </div>
                    <!-- 
                    <div class="filtroCheck">
                        <input type="checkbox" id="sol" name="oculos de sol">
                        <label for="oculos de sol">Óculos de Sol</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="aviador" name="oculos aviador">
                        <label for="oculos aviador">Óculos Aviador</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="juliette" name="juliette">
                        <label for="juliette">Juliette</label>
                    </div> -->
            
                
                <h2>Cor da Armação</h2>
                
                    <div v-for="cor in cores" class="filtroCheck">
                        <input type="checkbox" :id="cor" :value="cor" v-model="checked.cores">
                        <label :for="cor">{{cor}}</label>
                    </div>
                    <!-- <div class="filtroCheck">
                        <input type="checkbox" id="marrom" name="marrom" value="Marrom" v-model="corSelecionada">
                        <label for="marrom">Marrom</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="preto" name="preto" value="Preto" v-model="corSelecionada">
                        <label for="preto">Preto</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="vermelho" name="vermelho" value="Vermelho" v-model="corSelecionada">
                        <label for="vermelho">Vermelho</label>
                    </div> -->
                


                <h2>Gênero</h2>
                
                    <div v-for="genero in generos" class="filtroCheck">
                        <input type="checkbox" :id="genero" :value="genero" v-model="checked.generos">
                        <label :for="genero">{{genero}}</label>
                    </div>
                    <!-- <div class="filtroCheck">
                        <input type="checkbox" id="masculino" name="masculino">
                        <label for="masculino">Masculino</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="feminino" name="feminino">
                        <label for="feminino">Feminino</label>
                    </div> -->

                <!-- <h2>MEU COR TESTE</h2>
                <template v-for="option in cor">
                    <input :id="option" type="checkbox" :value="option" v-model="checked.cor"><label :for="option" >{{ option }}</label>
                </template> -->

                
                    <br>
                <input id='filtroSubmit' type="submit" value="Aplicar Filtros" v-on:click="filtrar()">
                    <br>
            </div>
        </div>
        <div id="produtos">
            <h1>Produtos</h1>

            <div id="grid">

                <div v-for="produto in objs">
                    <p_produto :obj="produto" v-show="visible(produto)"/>
                </div> 


            </div>

        </div>

    </div>

</template>

<script>

import p_produto from './components/p-produto.vue'

export default {
  name: 'Produtos',
  props: {
    objs: Array
  },
  data() {
    return {
        tipos: ['Oculos de Sol', 'Aviador', 'Juliette'],
        cores: ['Preto', 'Vermelho', 'Marrom'],
        generos: ['Masculino', 'Feminino', 'Unisex'],
        checked: {
            tipos: [],
            cores: [],
            generos: [],
        }
    }
  },
  components: {
    p_produto
  },
  methods: {
    filtrar() {
        this.objs.forEach(p => {
            console.log(p.tipo, p.cor, p.genero)
            if ((this.checked.tipos.includes(p.tipo)) && (this.checked.cores.includes(p.cor)) && (this.checked.generos.includes(p.genero)))
                p.selected=true;
            else
                p.selected=false;
        });

        console.log("teste:", this.objs);
    },
    visible (produto) {
        if ('selected' in produto && produto.selected==false)
            return false;
        else 
            return true; 
    }
  }
}
</script>

<style>
    #tudo {
        display: flex;
        flex-direction: row;
    }

    #barraEsquerda{
        width: 15%;
        height: 95%;
    }

    #barraEsquerda h1 {
        font-size: x-large;
        color: white;
        background-color: var(--primary);
        height: 75px;
        padding-top: 20px;
        text-align: center;
        margin-bottom: 0px;
    }

    #filtros {
        display:flex;
        flex-direction: column;
        background-color: #a9b8d3c0;
    }

    #filtros h2 {
        font-size: x-large;
        padding-top: 20px;
        padding-left: 20px;
    }
    .filtroCheck {
        padding-left: 50px;
    }
    #filtroSubmit {
        background-color: var(--primary);
        color: white;
        width: 75%;
        margin-bottom: 30px;
        margin: auto;
        border:0px;
        border-radius: 10px;
        font-weight:500;
        box-shadow: 0px 6px 12px -6px black;
    }
    #filtroSubmit:hover {
        filter: brightness(1.4)
    }
    
    #produtos {
        width: 100%;
        margin:auto;
        padding: 0px;
        margin-top: 0px;
    }

    #produtos h1 {
        background-color: #a9b8d3c0;
        height: 75px;
        padding-top: 15px;
        text-align: center;
        font-weight: lighter;
        font-size: xx-large;
    } 


    #grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-self: center;
    }

    #grid div {
        margin:auto;
    }

    .produto{
        background-color: var(--cinza-claro);
        max-width: 380px;
    }

    .produto:hover {
        box-shadow: 3px 5px 10px -3px #000000;
    }

    .produto .OculosEmAlta{
        width: 100%;
    }
</style>