<template>
    <div id="user">
        <div id="barraEsquerda">
            <h2>Meu Perfil</h2>
            <ul id="links">
                <li id="pedidos"> <a href="pedidos.html">Meus Pedidos</a></li>
            </ul>
        </div>
        <div id="dados">
            <div id="fotoEEditar">
                <img id="foto" src="../assets/imagens/user.png">
                <button id="editar">Editar</button>
            </div>

            <div class="dado">
                <h1 class="tituloDado">Nome</h1>
                <p>Zé</p>
            </div>
            <div class="dado">
                <h1 class="tituloDado">E-mail</h1>
                <p>ze@hotmail.com</p>
            </div>
            <div class="dado">
                <h1 class="tituloDado">CPF</h1>
                <p>123.123.123-12</p>
            </div>
            <div class="dado">
                <h1 class="tituloDado">Telefone</h1>
                <p>(16) 3131-3131</p>
            </div>
            <div class="dado">
                <h1 class="tituloDado">Celular</h1>
                <p>(16) 9999-9876</p>
            </div>
            <div class="dado">
                <h1 class="tituloDado">Endereço</h1>
                <ul id="endereco">
                    <li>
                        <p><span class="tituloEndereco">Rua: </span>Rua do Usuario 1</p>
                    </li>
                    <li>
                        <p><span class="tituloEndereco">Numero: </span>123</p>
                    </li>
                    <li>
                        <p><span class="tituloEndereco">Bairro: </span>JD Usuario 1</p>
                    </li>
                    <li>
                        <p><span class="tituloEndereco">Complemento: </span>Apto 13</p>
                    </li>
                    <li>
                        <p><span class="tituloEndereco">CEP: </span>12345-123</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'User',
}
</script>

<style>
    #user {
    /* margin: 15px; */
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
    /* text-align: center; */
    display: flex;
    width: 100%;
}
#foto{
    margin: auto;
    filter: invert(100);
    width: 250px;
}
#editar {
    height: 100%;
    float: right;
}

.dado{
    background-color: var(--cinza-claro);
    border-radius: 10px;
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

.tituloEndereco {
    font-weight:600;
}
</style>