<template>
<a :href="obj.id">
    <div class="produto">
        <img :src="/obj.imagem" :alt="obj.id">
        <p>{{obj.nome}}<br>R$ {{obj.preco}}</p>
    </div>
</a>
</template>

<script>
export default {
    name: 'MeuProduto',
    props: {
        obj : {
            id: String,
            nome: String,
            preco: Number,
            imagem: String
        }
    }
}
</script>

<style>
.produto{
    background-color: var(--cinza-claro);
    width: 300px;
}

.produto:hover {
    box-shadow: 3px 5px 10px -3px #000000;
}
</style>

