<template>
    <div>
        <div id="page-wrap">
            <h4 v-if="notif" class="notif">Item removed from cart successfully!</h4>
            <h1>Shopping Cart</h1>
            <CartItemC
                v-for="item in cartItems"
                :key="item.id"
                :item="item"
                v-on:remove-item="removeFromCart($event)"
            />
            <h3 id="total-price">Total: Rp {{ totalPrice }}</h3>
            <button id="checkout-button">Check Out</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CartItemC from '../../components/CartItemC';
export default {
    components: {
        CartItemC
    },
    data() {
        return {
            cartItems: [],
            notif: false,
        }
    },
    async created() {
        const result = await axios.get('http://localhost:8000/v1/api/orders/user/1')
        this.cartItems = result.data.products
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce(
                (sum, item) => sum + Number(item.price),
                0
            )
        }
    },
    methods: {
        async removeFromCart(productCode) {
            await axios.delete(`http://localhost:8000/v1/api/orders/user/1/product/${productCode}`, {
                product: productCode,
            })
            this.notif = true
            setTimeout(() => {
                this.notif = false;
            }, 3000);
            let indexCart = this.cartItems.map(function (item) {
                return item.code
            }).indexOf(productCode)
            this.cartItems.splice(indexCart, 1)
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

.notif {
    text-align: center;
    color: white;
    background-color: #b84141;
    padding: 3%;
    border-radius: 8px;
}
</style>