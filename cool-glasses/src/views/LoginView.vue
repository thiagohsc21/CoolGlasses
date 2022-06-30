<template>
    <Login />
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import router from '@/router/index'

export default {
  name: 'LoginView',
  components: {
    Login
  },
  mounted(){
    const submit = document.getElementById("botao_entrar");

    submit.addEventListener("click", validaEntradas);


    const nome = document.getElementById("nome");
    const senha = document.getElementById("password");


    function validaEntradas(e) {
        e.preventDefault();
        var re_email = /\S+@\S+\.\S+/;

        if (!(re_email.test(email.value))){
            if (!email.value)
                alert("Insira seu email");
            else
                alert("Insira um email valido");
            return false;
        }

        if (!senha.value) {
            alert("Insira sua senha");
            return false;
        }

        fetch('http://localhost:3000/users')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            for (let [key, usuario] of Object.entries(data)) {
              if(usuario.email == email.value && usuario.senha == senha.value) {
                localStorage.usuario = usuario.nome;
                localStorage.admin = usuario.admin;
                if(localStorage.admin == 's'){
                  alert("admin", localStorage.usuario)
                }
                router.back();
                setTimeout(alert('Bem vindo '+ localStorage.usuario+ " !"), 2);
                return true;
              }
            }
            alert("Email ou senha Inválidos")
            return false;
          })
          .catch(err => alert(err.message))
        
        return true;
    }
  }
}
</script>
