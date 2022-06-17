<template>
        <div class="slogan">
            <div id="imagem_slogan">
                <img src="../assets/imagens/slogan.png" alt="ImgSlogan">
            </div>

            <a v-for="produto in produtos.slice(0,1)" href="/produto">
                <div id="produto_slogan">
                    <img :src="require(`../assets/imagens/${produto.imagem}`)" alt="oculos1">
                    <p>{{produto.nome}}<br>R$ {{produto.preco}}</p>
                </div>
            </a>
        </div>
        
        <br><br>
        <div id="EmAlta">
            <h3>Em Alta</h3>
            <br>
            <div id="botao">
                <button type="button">Ver todos os produtos ></button>
            </div>
            <br><br>

            <div class="produtos">
                <a v-for="produto in produtos.slice(1,5)" href="/produto">
                    <div class="produto">
                        <img class="OculosEmAlta" :src="require(`../assets/imagens/${produto.imagem}`)" alt="oculos1">
                        <p>{{produto.nome}}<br>R$ {{produto.preco}}</p>
                    </div>
                </a>
            </div>
        </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    produtos: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    height: 380px;
    width: 380px;
    align-items: center;
    text-align: center;
}

#produto_slogan:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}

#produto_slogan img{
    height: 300px;
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

#EmAlta button{
    color: white;
    border-radius: 50px;
    background-color: var(--primary);
}

#EmAlta button:hover{
    filter: brightness(1.5);
}

.produtos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.produtos a{
    color: black;
    text-decoration: none;
    margin: auto;
}

#botao{
    float: right;
    margin-right: 59px;
}
.produto{
    background-color: var(--cinza-claro);
    width: 300px;
}

.produto p{
    text-align: center;
}

.produto:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}

.produto .OculosEmAlta{
    width: 100%;
}


</style>
