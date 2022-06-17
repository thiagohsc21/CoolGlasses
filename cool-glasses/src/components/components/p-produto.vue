<template>
<a :href="'/produto/' + obj.id">
    <div class="produto">
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
.produto{
    background-color: var(--cinza-claro);
    max-width: 380px;
    min-width: 300px;
}
.produto:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}
.produto img{
    width: 100%;
}

</style>
