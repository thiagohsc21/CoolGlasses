<template>

    <div class="siteInfo">
        <p> ADMIN > EDITAR PRODUTOS > EDIÇÃO > ÓCULOS </p>
    </div> 

    <form action="admin2.html" method="put">

        <div class="destaque">
            <div class="imgEPreco">
                <label id="foto" for="file">
                    <p id="editFoto">Editar Foto</p>
                    <img id="imagem" :src="require(`@/assets/imagens/${produto.imagem}`)">
                    <input type="file" accept="image/png, image/jpeg">
                </label>

                <div id="tags">
                <label>Editar Preço: <span>&nbsp;&nbsp;R$</span>
                    <input  type="number " v-model="produto.preco">
                </label>
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
                    <input id="titulo" v-model="produto.nome">
                </label>
                <label>Editar Texto <br>
                <textarea rows="10" id="texto" v-model="produto.descricao"></textarea>
                </label>
                <label id="quantidade">Quantidade: 
                    <input id="qtd" type="number" v-model="produto.estoque">
                </label>
            </div>

        </div>
        <div id="salvar">
            <input id="salvar" type="button" value="Salvar" @click="salvar()"> 

        </div>
    </form>

    <br/>

</template>

<script>
import router from '@/router';

export default {
  name: 'Admin2',
  props: {
    produto : Object
  },
  mounted () {
    console.log(this.produto)
  },
  methods: {

    salvar () {
        console.log(this.produto);
        fetch('http://localhost:8888/' + this.$route.params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.produto)
        })
        .then(res => console.log(res))
        .catch(err => console.log(err.message));
        alert("Edição finalizada com sucesso")
                setTimeout(function(){
                    router.push('/admin1')
                }, 500); 
        console.log(this.produtos)
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

.destaque label {
    color: var(--dark);
    font-size: 20px;
    font-weight: bold;
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
    justify-content: flex-end;
    text-justify: distribute;
    height: 30px;
    margin-bottom:20px;
    margin-top:10px;

}

#tags input {
    flex-direction: row;
    width: 200px; 
    align-items: flex-end;
    
    margin-left: 30px;

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

#salvar {
    background-color: var(--cinza-claro);
    text-align: center ;
    margin-bottom: 15px;
    font-size: large;
    font-weight: 500;
}

#salvar input {
    color: white;
    border-radius: 5px;
    width: 10%;
    border: none;
    background-color: var(--primary);
}

#salvar input:hover {
    filter: brightness(1.5)
}


</style>