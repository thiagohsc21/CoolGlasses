<template>
    <Cadastro />
</template>

<script>
// @ is an alias to /src
import Cadastro from '@/components/Cadastro.vue'
import router from '@/router'


export default {
  name: 'CadastroView',
  components: {
    Cadastro
  },
  mounted(){
    const submit = document.getElementById("botao_registro");

    // submit.addEventListener("click", validaVazio);
    submit.addEventListener("click", validaEntradas);


    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const senha = document.getElementById("password");
    const confirma_senha = document.getElementById("confirm_password");


    function validaEntradas(e) {
      e.preventDefault();
      let valid = true;
      var re_email = /\S+@\S+\.\S+/;
      var re_nome = /^[a-z A-Z]+$/;

      if(!re_nome.test(nome.value)){
          if (!nome.value)
              alert("Insira um nome");
          else
              alert("Insira um nome sem caracteres especiais");
              
          valid = false;
      }

      if (!(re_email.test(email.value))) {
          if (!email.value)
              alert("Insira um email");
          else
              alert("Insira um email valido");

          valid = false;
      }

      if(senha.value != confirma_senha.value || !senha.value && !confirma_senha.value){
          if (!senha.value)
              alert("Insira uma senha");

          if (!confirma_senha.value)
              alert("Confirme a senha");
    
          if(senha.value != confirma_senha.value)
              alert("A senha deve ser igual nos dois campos");

          valid = false;
      }

      if (valid) {
          
          var user = new Object();
          user.email = email.value;
          user.nome = nome.value;
          user.senha = senha.value;

          user.cpf=""; user.telefone=""; user.celular=""; user.admin="n"
          user.endereco = new Object();
          user.endereco.rua=""; user.endereco.numero=""; user.endereco.bairro=""; user.endereco.complemento=""; user.endereco.cep="";
          console.log(user);

          fetch('http://localhost:8888/user/', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => localStorage.usuario = data.data._id)
          .catch(err => console.log(err.message));

            alert("Cadastro finalizado com sucesso");

            // localStorage.usuario = data._id;
            localStorage.admin = user.admin;
        
            setTimeout(function(){
                router.push('/')
            }, 300); 
        }
      return valid;
    }
  }
}
</script>
