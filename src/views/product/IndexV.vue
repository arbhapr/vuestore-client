<template>
    <div id="page-wrap">
        <div class="grid-wrap">
            <ProductItemC v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProductItemC from '../../components/ProductItemC'

export default {
    components: {
        ProductItemC,
    },
    data() {
        return {
            products: []
        }
    },
    async created() {
        const result = await axios.get('http://localhost:8000/v1/api/products')
        this.products = result.data
    }
}
</script>

<style scoped>
.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
}
</style>