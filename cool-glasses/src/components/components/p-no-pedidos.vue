<template>
    <a :href="'/produto/' + obj._id">
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
    <br><br>    
</template>


<script>

export default {
    nome: "p_no_pedidos",
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