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

        fetch('http://localhost:8888/user/email/' + email.value)
          .then(res =>  
            res.json()
          )
          .then(data => {
            console.log(data);
            if (senha.value == data.senha) {
              localStorage.usuario = data._id;
              setTimeout(alert('Bem vindo '+ data.nome + " !"), 2);
              setTimeout(function(){
                  router.push('/')
              }, 1000); 
              return true;
            }
            else {
              alert("Email ou senha Inválidos")
              return false;
            }
          })
          .catch(err => alert('Email ou Senha Incorretos'))
        
        return true;
    }
  }
}
</script>
