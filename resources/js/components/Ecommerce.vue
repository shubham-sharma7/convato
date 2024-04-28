<template>
    <div class="row ms-auto">
        <div class="col-2 border p-0 m-3" v-for="product in products" :key="product.id">
            <img style="width:100%;" :src="product.image" alt="">
            <h5 class="text-center p-0 mt-2 mb-0">{{ product.title }}</h5>
            <div class="align-items-center d-flex">
                <p class="mt-3 px-2">₹ {{ product.price }}</p>
                <button @click="addToCart(product)" class="mx-2 ms-auto">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 2,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 3,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 4,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 5,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 6,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 7,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 8,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 9,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                },
                {
                    id: 10,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdmGcws0hRvQ2o9EFEgA2zygSWm907ajJbnL38ogzpg&s',
                    title: 'Delicious Fruits',
                    price: '100'
                }
            ],
            cartData: []
        }
    },
    computed: {
        ...mapGetters('cart', ['getCartData'])
    },
    methods: {
        ...mapActions('cart', ['setCartData']),
        addToCart(item) {
            if(this.cartData.length > 0) {
                this.cartData.forEach(element => {
                    console.log(element);
                    console.log('item: ', item);
                    if(item.id != element.id) {
                        this.cartData.push(item);
                    } else {
                        return false;
                    }
                });
            } else {
                this.cartData.push(item);
            }
            this.setCartData(this.cartData);
            console.log('cartData: ', this.cartData);
            console.log('vuex: ', this.getCartData);
        }
    }
}
</script>