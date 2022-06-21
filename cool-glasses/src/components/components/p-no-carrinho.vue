<template>
    <a :href="'/produto/' + obj.id">
        <div class="produto">
            <img id="imagem"  :src="require(`../../assets/imagens/${obj.imagem}`)">
            <div class="valor_prod">
                <p>Valor: <br> R$ {{(obj.preco*obj.qtd).toFixed(2)}}</p>
            </div>
            <div class="nome_prod"> 
                <p> {{obj.nome}} <br> <br> Quantidade: {{obj.qtd}}</p>
            </div> 
        </div>
    </a>
</template>


<script>

export default {
    nome: "p_no_carrinho",
    props: {
        obj: Object
    }
}

</script>


<style>

    .nome_prod{
        float: right;
        width: 50%;
        padding-top: 60px;
    }

    .valor_prod{
        float: right;
        width: 20%;
        padding-top: 60px;
    }

</style>