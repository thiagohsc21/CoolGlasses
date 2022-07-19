<template>

    <div v-if="recomendados!=null && produtos!=null">
        <Produto :obj="produtos" :recomendados="recomendados"/>
    </div>

</template>

<script>
import Produto from '@/components/Produto.vue'
    
export default {
    name: 'ProdutoView',
    data() {
        return {
            produtos: null,
            recomendados: null
        }
    },
    mounted(){
        fetch('http://localhost:8888/' + this.$route.params.id)
            .then(res => res.json())
            .then(data => this.produtos = data)
            .catch(err => console.log(err.message));
            
        fetch('http://localhost:8888')
            .then(res => res.json())
            .then(data => {
                this.recomendados = data.filter( (element) => element._id != this.$route.params.id && element.estoque > 0)
            })
            .catch(err => console.log(err.message));

    },
    components: {
        Produto
    }
}
</script>
