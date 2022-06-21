<template>
    <FinalizarCompra />
</template>

<script>
// @ is an alias to /src
import FinalizarCompra from '@/components/FinalizarCompra.vue'

export default {
  name: 'FinalizarCompraView',
  components: {
    FinalizarCompra
  },
  mounted(){

    const submit = document.getElementById("botao_finalizar");
    submit.addEventListener("click", validaEntradas);

    const cpf = document.getElementById("CPF");
    const cartao = document.getElementById("numero-cartao");
    const validade = document.getElementById("data-validade");
    const codigo = document.getElementById("codigo-seguranca");
    const endereco = document.getElementById("endereco");

    function validaEntradas(e) {
        e.preventDefault();

        let re_cpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

        if (!(re_cpf.test(cpf.value))){
            if (!cpf.value)
                alert("Insira seu CPF");
            else
                alert("Insira um CPF válido");
            return false;
        }

        let re_cartao = /^[0-9]{16}/;

        if (!(re_cartao.test(cartao.value))){
            if (!cartao.value)
                alert("Insira seu cartão");
            else
                alert("Insira um cartão válido");
            return false;
        }

        // data
        if(!validade.value)
          alert("Insira a data de validade");

        let re_codigo = /^[0-9]{3}/;

        if (!(re_codigo.test(codigo.value))){
            if (!codigo.value)
                alert("Insira seu código de segurança");
            else
                alert("Insira um código de segurança válido");
            return false;
        }

        if(!endereco.value)
          alert("Insira seu endereço");
    }

      fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          for (let [key, usuario] of Object.entries(data)) {
            console.log(senha, usuario.senha);
            console.log(email.value, usuario.email);
            if(usuario.email == email.value && usuario.senha == senha.value) {
              alert('LOGOU');
              localStorage.usuario = usuario.nome;
            }
          }
          router.back()
        })
        .catch(err => alert(err.message))
      
      return true;
  }
}

</script>
