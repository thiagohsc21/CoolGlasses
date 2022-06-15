<template>
<a href="p1.html">
    <div class="produto">
        <!-- <img class="OculosEmAlta" src="../assets/aviatorpreto.png" alt="oculos1"> -->
        <img class="OculosEmAlta" :src="obj.imagem" alt="oculos1">
        <p>{{obj.nome}}<br>R$ {{obj.preco}}</p>
    </div>
</a>
</template>

<script>
export default {
    name: 'MeuProduto',
    props: {
        obj : {
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

