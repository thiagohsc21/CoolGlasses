<template>
        <div class="login">
        <div class="container">
            <div class="row">
                <form>
                    <h2> Login</h2><br>
                    <p style="font-weight:bold">E-mail</p>
                    <input id="email"  type="text"><br><br>
                    <p style="font-weight:bold">Senha</p>
                    <input id="password" type="password"><br><br>      
                    <input id="botao_entrar" type="submit" value="Entrar"><br><br>
                    <p style="font-size: 0.7em">Caso não tenha uma conta, clique <a href="/cadastro">aqui</a> para se cadastrar</p>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Login',
}
</script>

<style>
    .login{    
    width: 400px;
    height: 400px;
    background-color: var(--cinza-claro);
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 2em;
}

.login input {
    background-color: var(--cinza-claro);
    border: none;
    border-bottom: 1px solid black;
}

.login input[type=submit]{
    background-color: black;
    color: white;
    transition-duration: 0.2s;
}
.login input[type=submit]:hover{
    font-weight: bold;
    background-color: white;
    color: black;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.login form{
    text-decoration: none;
    color: black;
    text-align: center;
}

.login h2{
    text-align: center;
}

.login a {
    color: var(--primary);
    font-weight: bold;
}
</style>