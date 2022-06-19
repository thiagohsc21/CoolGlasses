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
        fetch('http://localhost:3000/produtos/' + this.$route.params.id)
            .then(res => res.json())
            .then(data => this.produtos = data)
            .catch(err => console.log(err.message))
    },
    components: {
        Produto
    }
}
</script>
