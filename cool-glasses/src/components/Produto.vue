<template>
     <div class="siteInfo">
        <p> PÁGINA INICIAL > PRODUTOS > OCULOS </p>
    </div> 

    <div class="destaque">
        <div class="imgEPreco">
            <img id="imagem" src="../assets/imagens/aviatorpreto.png">
            <p>R$ 249,90</p>
        </div>
        <div class="descricaoEComprar">
            <h1>Oculos Aviador Classico em Ouro</h1>
            <p> Atualmente um dos modelos de óculos de sol mais icônicos do mundo, os óculos de sol Aviator Classic foram originalmente criados aos pilotos americanos em 1937. <br>
                Os óculos de sol Aviator Classic são um modelo atemporal que combina o grande estilo Aviator com qualidade, desempenho e conforto excepcionais.
            </p>
            <div class="comprar">
                <button id="comprar">Adicionar ao carrinho</button>
            </div>
        </div>
    </div>

    <div class="tituloRecomendados">Outros compraram</div>

    <div class="recomendados">
        <a href="/produto">
            <div class="produto">
                <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                <p>Oculos Maneiro Branco<br>R$ 249,99</p>
            </div>
        </a>

        <a href="/produto">
            <div class="produto">
                <img class="OculosEmAlta" src="../assets/imagens/aviatorRosa.png" alt="oculos2">
                <p>Oculos Maneirim Roxo<br>R$ 199,99</p>
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
                <p>Oculos Maneiro Preto<br>R$ 249,99</p>
            </div>
        </a>
    </div>

    <div class="teste">
        <h2>TESTE </h2>
        <li>
            <ul>Nome: {{obj.nome}}</ul>
            <ul>Descrição: {{obj.descricao}}</ul>
            <ul>Preco: {{obj.preco}}</ul>
            <ul><img :src="obj.imagem"></ul>
        </li>
    </div>


</template>

<script>
export default {
  name: 'Produto',
  props: {
    obj: {        
        nome: String,
        descricao: String,
        imagem: String,
        preco: Number
    }
  }
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
    width: 400px;
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

.tituloRecomendados {
    font-size: large;
    margin: 20px;
    text-align: center;
    color: white;
    background-color: var(--primary);
}


.recomendados {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.recomendados a{
    color: black;
    text-decoration: none;
    margin: auto;
}

.produto{
    background-color: var(--cinza-claro);
    width: 350px;
}

.produto .OculosEmAlta{
    width: 100%;
}

.produto:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}

</style>