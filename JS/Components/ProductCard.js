const ProductCard = {
    template: `
        <div class="product-card">

            <!-- IMAGE -->
            <div class="product-card__image-wrapper">
                <img 
                    :src="product.image"
                    class="product-card__image"
                />

                <!-- LIKE BUTTON -->
                <div class="product-card__like">
                    <button-cus 
                        icon-only
                        @click="toggleHeart"
                    >
                        <template #icon>
                            <icon-heart 
                                :filled="heartFill"
                                :size="15" 
                                class="iconPrimary"
                            />
                        </template>
                    </button-cus>
                </div>
            </div>

            <!-- INFO -->
            <div class="product-card__info">

                <!-- DISCOUNT ALERT -->
                <alert-cus
                    v-if="product.discount > 0"
                    :message="discountPercentage + '%'"
                />

                <!-- AUTHOR -->
                <div class="product-card__author">
                <p class="b5">{{ product.author }}</p>       
                </div>

                <!-- NAME -->
                <div class="product-card__name">
                    <p class="b3">{{ product.name }}</p>   
                </div>

                <!-- PRICE + CART -->
                <div class="product-card__footer">

                    <div class="product-card__prices">
                        <div class="product-card__price-final">
                            <p class="b5">{{ formattedFinalPrice }}</p>  
                        </div>

                        <div 
                            v-if="product.discount > 0"
                            class="product-card__price-old"
                        >
                        <p class="b5">{{ formattedOldPrice }}</p>
                        </div>
                    </div>

                    <button-cus 
                        variant="tertiary"
                        @click="toggleCart"
                    >
                        <template #icon>
                            <icon-cart />
                        </template>

                        <p class="b5">
                            {{ product.isCart ? 'En carrito' : 'Añadir' }}
                        </p>
                    </button-cus>

                </div>
            </div>
        </div>
    `,

    props: {
        product: {
            type: Object,
            required: true
        }
    },

    emits: ['add-like', 'remove-like', 'add-cart', 'remove-cart'],

    data() {
        return {
            heartFill: this.product.isLiked // **local para cada card**
        };
    },

    watch: {
        'product.isLiked'(newVal) {
            this.heartFill = newVal;
        },
        'product.isCart'(newVal) {
            // si es necesario sincronizar carrito también
        }
    },

    computed: {
        finalPrice() {
            return this.product.price - (this.product.price * this.product.discount);
        },
        discountPercentage() {
            return Math.round(this.product.discount * 100);
        },
        formattedFinalPrice() {
            return '$' + this.finalPrice.toLocaleString();
        },
        formattedOldPrice() {
            return '$' + this.product.price.toLocaleString();
        }
    },

    methods: {
        toggleHeart() {
            this.heartFill = !this.heartFill;        // solo afecta esta card
            this.product.isLiked = this.heartFill;   // sincroniza con el producto
            if (this.heartFill) {
                this.$emit('add-like', this.product);
            }
        },

        toggleCart() {
            this.product.isCart = !this.product.isCart;
            if (this.product.isCart) {
                this.$emit('add-cart', this.product);
            }
        }
    }
};