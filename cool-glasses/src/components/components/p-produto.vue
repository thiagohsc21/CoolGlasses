<template>
<a :href="'/produto/' + obj._id">
    <div class="pproduto">
        <img id="imagem"  :src="require(`../../assets/imagens/${obj.imagem}`)">
        <p>{{obj.nome}}<br>R$ {{obj.preco}}</p>
    </div>
</a>
</template>

<script>
export default {
    name: 'p_produto',
    props: {
        obj : Object
    }
}
</script>

<style>
.pproduto{
    background-color: var(--cinza-claro);
    max-width: 380px;
    min-width: 300px;
}
.pproduto:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}
.pproduto img{
    width: 100%;
}

</style>
