<template>
    <div v-if="produtos">
        <Produto :obj="produtos"/>
    </div>
    
    
</template>
        <!-- <img :src="require(`../assets/imagens/${produtos.imagem}`)" alt="img_produto"> -->

<script>
    // @ is an alias to /src
    import Produto from '@/components/Produto.vue'

    
    export default {
    name: 'ProdutoView',
    props: ['id'],
    data() {
        return {
            produtos: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/produtos/' + this.id)
            .then(res => res.json())
            .then(data => this.produtos = data)
            .catch(err => console.log(err.message))
    },
    components: {
        Produto
    },
    
    }
</script>
