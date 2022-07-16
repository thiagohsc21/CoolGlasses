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
                    <input type="file" accept="image/png, image/jpeg" id="inputImage">
                </label>

                <div id="tags">
                <label>Editar Preço: <span>&nbsp;&nbsp;R$</span>
                    <input  type="number " v-model="produto.preco">
                </label>
                    <label>Tipo de Oculos: 
                        <input list="tipos" v-model="produto.tipo">
    
                        <datalist id="tipos">
                          <option value="Aviador"></option>
                          <option value="Quadrado"></option>
                          <option value="Redondo"></option>
                        </datalist>
                    </label>
                    
                    <label>Cor: 
                        <input list="cor" v-model="produto.cor">
    
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
                        <input list="genero" v-model="produto.genero">
    
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
        let imageInput = document.getElementById('inputImage').files[0]

        if(imageInput){
            const data = new Date();
            var dia     = data.getDate();
            var mes     = data.getMonth();
            var ano4    = data.getFullYear();
            var str_data = dia + '-' + (mes+1) + '-' + ano4;

            var hora    = data.getHours();          // 0-23
            var min     = data.getMinutes();        // 0-59
            var seg     = data.getSeconds();        // 0-59
            var str_hora = hora + '-' + min + '-' + seg;

            this.produto.imagem = str_data + "_" + str_hora + "_" + imageInput.name;

        }

        // Se a rota for 'Novo' => faz um POST; se nao => faz PUT com id
        if(this.$route.params.id == "Novo") {
            fetch('http://localhost:8888', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.produto)
            })
            .catch(err => console.log(err.message));
        }
        else {
            fetch('http://localhost:8888/' + this.$route.params.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.produto)
            })
            .catch(err => console.log(err.message));
        }

        if(imageInput) {
            // Criando o multipart/form para a requisicao POST
            const formData = new FormData();
            formData.append("image", imageInput);
            // Faz o fetch para dar upload na imagem
            fetch('http://localhost:8888/upload-image', {
                method: 'POST',
                body: formData
            });
        }

        alert("Edição finalizada com sucesso");
        
        setTimeout(function(){
            router.push('/admin1')
        }, 500); 
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