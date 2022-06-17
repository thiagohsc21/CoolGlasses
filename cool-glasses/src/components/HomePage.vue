<template v-for="produto in obj">
    <p>{{produto}}</p>
    <div class="slogan">
        <div id="imagem_slogan">
            <img src="../assets/imagens/slogan.png" alt="ImgSlogan">
        </div>

        <a href="/produto">
            <div id="produto_slogan">
                <img src="../assets/imagens/aviatorpreto.png" alt="oculos1">
                <p>Oculos de Sol Preto<br>R$ 249,99</p>
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

            <a href="/produto">
                <div class="produto">
                    <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                    <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                </div>
            </a>

            <a href="/produto">
                <div class="produto">
                    <img class="OculosEmAlta" src="../assets/imagens/aviatorRosa.png" alt="oculos2">
                    <p>Oculos Aviator Rosa<br>R$ 199,99</p>
                </div>
            </a>
            
            <a href="/produto">
                <div class="produto">
                    <img class="OculosEmAlta" src="../assets/imagens/quadrado.webp" alt="oculos3">
                    <p>Oculos Maneirim Preto<br>R$ 199,99</p>
                </div>
            </a>
            
            <a href="/produto">
                <div class="produto" id="ultima_imagem">
                    <img class="OculosEmAlta" src="../assets/imagens/glasses.png" alt="oculos4">
                    <p>Oculos de Grau Retangular<br>R$ 249,99</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
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

.produto:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}

.produto .OculosEmAlta{
    width: 100%;
}


</style>
