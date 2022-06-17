<template>
    <div id="tudo">
        <div id="barraEsquerda">
            <h1>FILTRAR POR</h1>

            <div id="filtros">

                <h2>Tipo de Óculos</h2>

                    <div class="filtroCheck">
                        <input type="checkbox" id="sol" name="oculos de sol">
                        <label for="oculos de sol">Óculos de Sol</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="aviador" name="oculos aviador">
                        <label for="oculos aviador">Óculos Aviador</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="juliette" name="juliette">
                        <label for="juliette">Juliette</label>
                    </div>
            
                
                <h2>Cor da Armação</h2>
                    <div class="filtroCheck">
                        <input type="checkbox" id="marrom" name="marrom">
                        <label for="marrom">Marrom</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="preto" name="preto">
                        <label for="preto">Preto</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="vermelho" name="vermelho">
                        <label for="vermelho">Vermelho</label>
                    </div>
                
                <h2>Gênero</h2>
                    <div class="filtroCheck">
                        <input type="checkbox" id="masculino" name="masculino">
                        <label for="masculino">Masculino</label>
                    </div><div class="filtroCheck">
                        <input type="checkbox" id="feminino" name="feminino">
                        <label for="feminino">Feminino</label>
                    </div>
                
                    <br>
                <input id='filtroSubmit' type="submit" value="Aplicar Filtros">
                    <br>
            </div>
        </div>
        <div id="produtos">
            <h1>Produtos</h1>

            <div id="grid">

                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>
                <a href="p1.html">
                    <div class="produto">
                        <img class="OculosEmAlta" src="../assets/imagens/raybanpreto.webp" alt="oculos1">
                        <p>Oculos de Sol Quadrado Preto<br>R$ 249,99</p>
                    </div>
                </a>

            </div>

        </div>
    </div>

</template>

<script>
export default {
  name: 'Produtos',
}
</script>

<style>
    #tudo {
        margin: 15px;
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
    
    #produtos {
        width: 100%;
        margin:auto;
        padding: 0px;
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

    #grid a {
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