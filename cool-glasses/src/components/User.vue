<template>
    <div v-if="user" id="user">
        <div id="barraEsquerda">
            <h2>Meu Perfil</h2>
            <ul id="links">
                <li id="pedidos"> <a href="/pedidos">Meus Pedidos</a></li>
            </ul>
        </div>
        <div id="dados">
            <div id="fotoEEditar">
                <img id="foto" src="../assets/imagens/user.png">
                <button id="editar" @click="alterar()">Editar</button>
            </div>

            <div class="dado">
                <h1 class="tituloDado">Nome</h1>
                <p v-if="!isEditing">{{user.nome}}</p>
                <input v-else type="text"  v-model="user.nome"/>
            </div>
            <div class="dado">
                <h1 class="tituloDado">E-mail</h1>
                <p v-if="!isEditing">{{user.email}}</p>
                <input v-else type="text"  v-model="user.email"/>
            </div>
            <div class="dado">
                <h1 class="tituloDado">CPF</h1>
                <p v-if="!isEditing">{{user.cpf}}</p>
                <input v-else type="text"  v-model="user.cpf"/>
            </div>
            <div class="dado">
                <h1 class="tituloDado">Telefone</h1>
                <p v-if="!isEditing">{{user.telefone}}</p>
                <input v-else type="text"  v-model="user.telefone"/>
            </div>
            <div class="dado">
                <h1 class="tituloDado">Celular</h1>
                <p v-if="!isEditing">{{user.celular}}</p>
                <input v-else type="text"  v-model="user.celular"/>
            </div>
            <div class="dado">
                <h1 class="tituloDado">Endereço</h1>
                <ul id="endereco">
                    <li>
                        <p v-if="!isEditing"><span class="tituloEndereco">Rua: </span>{{user.endereco.rua}}</p>
                        <p v-else> <span class="tituloEndereco">Rua: </span> <input type="text"  v-model="user.endereco.rua"/> </p>
                    </li>
                    <li>
                        <p v-if="!isEditing"><span class="tituloEndereco">Numero: </span>{{user.endereco.numero}}</p>
                        <p v-else> <span class="tituloEndereco">Numero: </span> <input type="text"  v-model="user.endereco.numero"/> </p>
                    </li>
                    <li>
                        <p v-if="!isEditing"><span class="tituloEndereco">Bairro: </span>{{user.endereco.bairro}}</p>
                        <p v-else> <span class="tituloEndereco">Bairro: </span> <input type="text"  v-model="user.endereco.bairro"/> </p>
                    </li>
                    <li>
                        <p v-if="!isEditing"><span class="tituloEndereco">Complemento: </span>{{user.endereco.complemento}}</p>
                        <p v-else> <span class="tituloEndereco">Complemento: </span> <input type="text"  v-model="user.endereco.complemento"/> </p>
                    </li>
                    <li>
                        <p v-if="!isEditing"><span class="tituloEndereco">CEP: </span>{{user.endereco.cep}}</p>
                        <p v-else> <span class="tituloEndereco">CEP: </span> <input type="text"  v-model="user.endereco.cep"/> </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div v-else id="notLogin">
        <h1>VOCÊ NÃO FEZ LOGIN</h1>
        <p>Você não está logado, volte para a página de 
            <a href="/login">login</a> para entrar com sua conta</p>
    </div>
</template>

<script>
export default {
  props: {
    user : Object,
  },
  data () {
    return {
        isEditing : false
    }
  },
  name: 'User',
  methods: {
    alterar() {
        if (this.isEditing) {
            fetch('http://localhost:8888/user/' + this.user._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.user)
            })
            .then(res => console.log(res))
            .catch(err => console.log(err.message));
        }

        this.isEditing = !this.isEditing;
        document.getElementById('editar').innerText = this.isEditing ? "Salvar" : "Editar";
    }
  },
  mounted(){
    console.log('user',this.user)
  }
}
</script>

<style>
    #user {
    display: flex;
    flex-direction: row;
}

#barraEsquerda{
    margin-top:30px;
    width: 18%;
    height: 95%;
    border-right: 1px solid black;
}

#barraEsquerda h2 {
    margin: 10px;
}

#barraEsquerda ul {
    list-style:disc;
    width: 90%;
    height: 70px;
    padding-top: 20px;
    align-items: center;
    background-color: var(--cinza-claro);
}

#pedidos a{
    color: black;
    text-decoration: none;
}
#pedidos a:hover{
    color: var(--primary);
}

#dados {
    padding-left: 20px;
    width: 75%;
}

#fotoEEditar {
    display: flex;
    width: 100%;
}
#foto{
    margin: auto;
    filter: invert(100);
    width: 250px;
}
#editar {
    align-self: flex-end;
    margin-bottom: 10px;
    height: 100%;
    float: right;
}

.dado{
    background-color: var(--cinza-claro);
    border-radius: 10px;
    margin-bottom: 20px;
}

.dado h1 {
    font-size: small;
    padding: 5px;
}

.dado p {
    font-weight: 200;
    font-size: larger;
    padding: 5px;   
}

.dado input {
    background-color: var(--cinza-claro);
    font-weight: 400;
    width: 30%;
    border-radius: 20px;
    border: none;
    border-bottom: 1px solid black;
}

.tituloEndereco {
    font-weight:600;
} 

#notLogin{
    text-align: center;
    margin-top: 5%;
    /* align-items: center;
    align-self: center; */
    height: 95%;
    /* margin-top: 3.6%; */
}
</style>