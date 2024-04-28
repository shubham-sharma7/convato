<template>
    <div class="row ms-auto">
        <div class="col-12">
            <h4 class="bg-secondary text-white text-center p-2 ms-4">Cart Items: 10</h4>
        </div>
        <div class="col-12 border p-0 m-3 d-flex" v-for="product in products" :key="product.id">
            <img style="width:200px; height: 200px;" :src="product.image" alt="">
            <h5 class="text-center p-4 my-4 mb-0">{{ product.title }}</h5>
            <div class="align-items-center d-flex">
                <p class="mt-3 px-2">₹ {{ product.price }}</p>
                <button class="mx-2 ms-auto">-</button>
                <button class="mx-2 ms-auto">+</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            products: []
        }
    },
    computed: {
        ...mapGetters('cart', ['getCartData'])
    },
    mounted() {
        console.log('vuex: ', this.getCartData);
        this.products = this.getCartData;
    }
}
</script>