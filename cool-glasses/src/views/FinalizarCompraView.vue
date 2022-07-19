<template>
    <FinalizarCompra />
</template>

<script>
// @ is an alias to /src
import router from '@/router';
import FinalizarCompra from '@/components/FinalizarCompra.vue'
import {compras} from '@/objects/objects.js'


export default {
  name: 'FinalizarCompraView',
  data () {
    return {
        c: null
    }
  },
  components: {
    FinalizarCompra
  },
  async mounted(){

    const produtosPromises = [];

    for (const compra of compras.getObjs()) {
      produtosPromises.push((async () => {
        const produto = await fetch('http://localhost:8888/' + compra.id_produto).then(res => res.json()).catch(err => alert(err.message));

        produto.qtd = compra.qtd;

        return produto;
      })());
    }

    const produtos = await Promise.all(produtosPromises);

    this.c = produtos;



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

        if(!validade.value){
            alert("Insira a data de validade");
            return false
        }

        let re_codigo = /^[0-9]{3}/;

        if (!(re_codigo.test(codigo.value))){
            if (!codigo.value)
                alert("Insira seu código de segurança");
            else
                alert("Insira um código de segurança válido");
            return false;
        }

        if(!endereco.value){
            alert("Insira seu endereço");
            return false;
        }

        if (localStorage.getItem('usuario')) {
            //copiando os itens do carrinho para o pedidos (salvando no local storage)
            // fetch('http://localhost:3000/produtos')
            // .then(res => res.json())
            // .then(data => {
            //     let produtos = data;

            //     (compras.getObjs()).forEach((compra, idx) => {
            //         pedidos.pushObjs({
            //             idx_produto: compra.idx_produto,
            //             qtd: compra.qtd,
            //             valor: compra.valor
            //         });

            //     });
                    
                alert("Compra finalizada com sucesso");
                //
                //limpando o carrinho
                compras.deleteCarrinho();
                for (compra of this.compras) {

                }


                setTimeout(function(){
                    router.push('/')
                }, 500); 

            // .catch(err => alert(err.message));
        }
    }
  }
}

</script>
