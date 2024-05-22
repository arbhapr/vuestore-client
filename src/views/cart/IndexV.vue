<template>
    <div>
        <div id="page-wrap">
            <h1>Shopping Cart</h1>
            <!-- <div v-for="item in cartItems" :key="item.id" class="product-container">
                <img :src="item.imageUrl" alt="" class="product-image">
                <div class="details-wrap">
                    <h3>{{ item.name }}</h3>
                    <p>Rp {{ item.price }}</p>
                </div>
                <button class="remove-button">Remove</button>
            </div> -->
            <CartItemC
                v-for="item in cartItems"
                :key="item.id"
                :item="item"
            />
            <h3 id="total-price">Total: Rp {{ totalPrice }}</h3>
            <button id="checkout-button">Check Out</button>
        </div>
    </div>
</template>

<script>
import { cartItems } from '@/assets/data-seed';
import CartItemC from '../../components/CartItemC';
export default {
    components: {
        CartItemC
    },
    data() {
        return {
            cartItems
        }
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce(
                (sum, item) => sum + Number(item.price),
                0
            )
        }
    }
}
</script>

<style scoped>
h1 {
    border-bottom: 1px solid #41B883;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
}

#total-price {
    padding: 16px;
    text-align: right;
}

#checkout-button {
    width: 100%;
}
</style>