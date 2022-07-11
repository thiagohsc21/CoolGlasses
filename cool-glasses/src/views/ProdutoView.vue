<template>

    <div v-if="produtos">
        <Produto :obj="produtos"/>
    </div>

</template>

<script>
import Produto from '@/components/Produto.vue'
    
export default {
    name: 'ProdutoView',
    data() {
        return {
            produtos: null
        }
    },
    mounted(){
        fetch('http://localhost:8888/' + this.$route.params.id)
            .then(res => res.json())
            .then(data => this.produtos = data)
            .then(console.log('prodtuto', this.produtos))
            .catch(err => console.log(err.message));

        console.log(this.produtos);
    },
    components: {
        Produto
    }
}
</script>
