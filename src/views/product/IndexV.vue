<template>
    <div id="page-wrap">
        <div class="grid-wrap">
            <ProductItemC v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script>
import { products } from '@/assets/data-seed'
import ProductItemC from '../../components/ProductItemC'

export default {
    components: {
        ProductItemC,
    },
    data() {
        return {
            products
        }
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