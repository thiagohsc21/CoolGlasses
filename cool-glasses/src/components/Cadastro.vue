<template>
        <br><br><h2 id="cadastrarse"> Cadastre-se</h2><br>

    <div class="cadastrar_se">
        <div class="container">
            <div class="row">
                <form>
                    <p style="font-weight:bold">Nome</p>
                    <input id="nome"  type="text"><br><br>

                    <p style="font-weight:bold">E-mail</p>
                    <input id="email"  type="text"><br><br>

                    <p style="font-weight:bold">Senha</p>
                    <input id="password" type="password"><br><br>

                    <p style="font-weight:bold">Confirmar senha</p>
                    <input id="confirm_password" type="password"><br><br>
                    <input id = "botao_registro" type="submit" value="Registrar"><br><br>
                </form>
            </div>
        </div>
    </div>
    <br><br><br>
</template>

<script>
export default {
  name: 'Cadastro',
}
</script>

<style>
    .cadastrar_se{    
    width: 400px;
    height: 500px;
    background-color: var(--cinza-claro);
    margin:auto;
    padding-top: 2em;
}

.cadastrar_se input {
    background-color: var(--cinza-claro);
    border: none;
    border-bottom: 1px solid black;
}

.cadastrar_se input[type=submit]{
    background-color: black;
    color: white;
    transition-duration: 0.2s;
}
.cadastrar_se input[type=submit]:hover{
    font-weight: bold;
    background-color: white;
    color: black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.cadastrar_se form{
    text-decoration: none;
    color: black;
    text-align: center;
}

#cadastrarse{
    text-align: center;
}
</style>