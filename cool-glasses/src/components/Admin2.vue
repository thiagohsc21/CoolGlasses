<template>

    <div class="siteInfo">
        <p> ADMIN > EDITAR PRODUTOS > EDIÇÃO > ÓCULOS </p>
    </div> 

    <form action="admin2.html" method="put">

        <div class="destaque">
            <div class="imgEPreco">
                <label id="foto" for="file">
                    <p id="editFoto">Editar Foto</p>
                    <img id="imagem" :src="require(`@/assets/imagens/aviatorpreto.png`)">
                    <input type="file" accept="image/png, image/jpeg">
                </label>
                <label>Editar Preço: <span>R$</span>
                    <input type="number " value="249.90">
                </label>

                <div id="tags">
                    <label>Tipo de Oculos: 
                        <input list="tipos">
    
                        <datalist id="tipos">
                          <option value="Aviador"></option>
                          <option value="Quadrado"></option>
                          <option value="Redondo"></option>
                        </datalist>
                    </label>
                    
                    <label>Cor: 
                        <input list="cor">
    
                        <datalist id="cor">
                          <option value="Preto"></option>
                          <option value="Vermelho"></option>
                          <option value="Marrom"></option>
                        </datalist>
                    </label>
                    
                    <label>Tipo da Lente: 
                        <input list="tiposLente">
    
                        <datalist id="tiposLente">
                          <option value="Oculos de Sol"></option>
                          <option value="Oculos de Grau"></option>
                          <option value="Juliet"></option>
                        </datalist>
                    </label>
                    
                    <label>Genero:
                        <input list="genero">
    
                        <datalist id="genero">
                          <option value="Feminino"></option>
                          <option value="Masculino"></option>
                          <option value="Unisex"></option>
                        </datalist>
                    </label>
                </div> 

            </div>
            <div class="descricaoEComprar">
                <label>Editar Título <br>
                    <input id="titulo" value="Oculos Aviador Classico em Ouro">
                </label>
                <label>Editar Texto <br>
                <textarea rows="10" id="texto">Atualmente um dos modelos de óculos de sol mais icônicos do mundo, os óculos de sol Aviator Classic foram originalmente criados aos pilotos americanos em 1937.
Os óculos de sol Aviator Classic são um modelo atemporal que combina o grande estilo Aviator com qualidade, desempenho e conforto excepcionais."
                </textarea>
                </label>
                <label id="quantidade">Quantidade: 
                    <input id="qtd" type="number" value="2">
                </label>
                </div>

        </div>

    </form>

    <br/>

</template>

<script>

export default {
  name: 'Admin2',
  props: {
    produto : Object
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

.destaque label {
    color: blue;
    font-size: large;
}


.imgEPreco {
    width: 40%;
    align-self: center;
    display: flex;
    flex-direction: column;
    margin-left: 5em;
    /* text-align:center; */
    /* font-size:xx-large; */
}

#editFoto {
    text-align: left;
    margin-bottom:0px;
}

#foto {
    margin-bottom: 15px;
}

#tags {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 400px;
}

#tags label {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-justify: distribute;
}

#tags input {
    flex-direction: row;
    width: 100%; 
}

.descricaoEComprar {
    width: 60%;
    display:flex;
    flex-direction: column;
}

.descricaoEComprar label {
    margin-top: 15px;
}

.descricaoEComprar #titulo {
    width: 100%;
}

.descricaoEComprar #texto {
    width: 100%;
    font-size:medium;
}

.descricaoEComprar #qtd {
    width: 100px;
    text-align: center;
}

#imagem {
    background-color: white;
    border: 1px solid black;
    width: 400px;
    filter: drop-shadow(10px 10px 10px #fff);
    /* margin: 10px; */
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


</style>