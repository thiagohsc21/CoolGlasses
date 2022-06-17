<template>
    <Cadastro />
</template>

<script>
// @ is an alias to /src
import Cadastro from '@/components/Cadastro.vue'

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
      }

      if (!(re_email.test(email.value))){
          if (!email.value)
              alert("Insira um email");
          else
              alert("Insira um email valido");
      }

      if(senha.value != confirma_senha.value || !senha.value && !confirma_senha.value){
          if (!senha.value)
              alert("Insira uma senha");

          if (!confirma_senha.value)
              alert("Confirme a senha");
    
          if(senha.value != confirma_senha.value)
              alert("A senha deve ser igual nos dois campos");
      }
      return valid;
    }
  }
}
</script>
