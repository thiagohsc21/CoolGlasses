const submit = document.getElementById("botao_entrar");

// submit.addEventListener("click", validaVazio);
submit.addEventListener("click", validaEntradas);


const nome = document.getElementById("nome");
const senha = document.getElementById("password");


function validaEntradas(e) {
    e.preventDefault();
    let valid = true;
    var re_email = /\S+@\S+\.\S+/;

    if (!(re_email.test(email.value))){
        if (!email.value)
            alert("Insira seu email");
        else
            alert("Insira um email valido");
    }

    if (!senha.value)
        alert("Insira sua senha");

    return valid;
  }