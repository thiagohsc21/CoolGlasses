<template>
        <div class="slogan">
            <div id="imagem_slogan">
                <img src="../assets/imagens/slogan.png" alt="ImgSlogan">
            </div>
            
            <div v-for="produto in produtos.slice(0,1)" :href="'/produto/' + produto.id">
                <p_produto :obj="produto" id="produto_slogan"/>
            </div>
            
        </div>
        
        <br><br>
        <div id="EmAlta">
            <h3>Em Alta</h3>
            <br>
            <a id  ="botao2" href="/produtos">Ver todos os produtos ></a>
            <br><br>

            <div id="grid">
                <div class="produtos" v-for="produto in produtos.slice(1,5)">
                    <p_produto :obj="produto" />
                </div>
            </div>
            
        </div>
</template>

<script>

import p_produto from '@/components/components/p-produto.vue'

export default {
  name: 'HomePage',
  props: {
    produtos: Array
  },
  components: {
    p_produto
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .slogan{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
}

#imagem_slogan{
    width: 100%;
    padding-right: 10px;
}

#imagem_slogan img{
    width: 100%;
    height: 380px;
    object-fit: cover;
}

#produto_slogan{
    color: black;
    background-color: var(--cinza-claro);
    float: right;
    height: 333px;
    width: 333px;
    align-items: center;
    text-align: center;
}

#produto_slogan:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}   


#produto_slogan img{
    height: 333px;
    align-items: center;
}

#EmAlta{
    margin: 10px;
}

#EmAlta h3{
    text-align: center;
    color: white;
    background-color: var(--primary);
    margin: auto;
}


#grid {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-self: center;
}

.produtos a{
    color: black;
    text-decoration: none;
    margin: auto;
}

#botao2{
    float: right;
    border-radius: 20px;
    padding: 2px 10px;
    background-color: var(--primary);
}

#botao2:hover{
    filter: brightness(1.5);
}

#botao2 {
    color: white;
    text-decoration: none;
}   


</style>
