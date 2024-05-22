<template>
    <div>
        <div id="page-wrap" v-if="product">
            <h4 v-if="notif" class="notif">Item added successfully!</h4>
            <div id="img-wrap">
                <img :src="`http://localhost:8000${product.imageUrl}`" alt="" loading="lazy">
            </div>
            <div id="product-details">
                <h1>{{ product.name }}</h1>
                <h3 id="price">Rp {{ product.price }}</h3>
                <p>Average Rating: {{ product.averageRating }}</p>
                <button id="add-to-cart" @click="addToCart(product.code)">Add to Cart</button>
                <p>{{ product.description }}</p>
            </div>
        </div>
        <NotFound v-else/>
    </div>
</template>

<script>
import axios from 'axios';
import NotFound from '../../views/errors/NotFound'

export default {
    data() {
        return {
            product: {},
            notif: false
        }
    },
    async created() {
        const code = this.$route.params.id
        const product = await axios.get('http://localhost:8000/v1/api/products/' + code)
        this.product = product.data
    },
    components: {
        NotFound
    },
    methods: {
        async addToCart(productCode) {
            await axios.post('http://localhost:8000/v1/api/orders/user/1/add', {
                product: productCode,
            })
            this.notif = true
            setTimeout(() => {
                this.notif = false;
            }, 3000);
        }
    }
}
</script>

<style scoped>
#page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
}

#img-wrap {
    text-align: center;
}

img {
    width: 400px;
}

#product-details {
    padding: 16px;
    position: relative;
}

#add-to-cart {
    width: 100%;
}

#price {
    position: absolute;
    top: 24px;
    right: 16px;
}

.notif {
    text-align: center;
    color: white;
    background-color: #41B883;
    padding: 3%;
    border-radius: 8px;
}
</style>