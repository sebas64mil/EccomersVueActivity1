const ProductCardHorizontal = {
  template: `
    <div class="product-card-horizontal">

      <!-- IMAGEN -->
      <div class="product-card-horizontal__image-wrapper">
        <img 
          :src="product.image"
          class="product-card-horizontal__image"
        />
        <!-- LIKE BUTTON -->
        <div class="product-card-horizontal__like">
          <button-cus icon-only @click="toggleHeart">
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
      <div class="product-card-horizontal__info">
        <!-- DISCOUNT -->
        <alert-cus
          v-if="product.discount > 0"
          :message="discountPercentage + '%'"
        />

        <!-- AUTOR -->
        <div class="product-card-horizontal__author">
          <p class="b5">{{ product.author }}</p>
        </div>

        <!-- NOMBRE PRODUCTO -->
        <div class="product-card-horizontal__name">
          <p class="b3">{{ product.name }}</p>
        </div>

        <!-- PRECIOS + BOTÓN CARRITO -->
        <div class="product-card-horizontal__footer">
          <div class="product-card-horizontal__prices">
            <div class="product-card-horizontal__price-final">
              <p class="b5">{{ formattedFinalPrice }}</p>
            </div>
            <div v-if="product.discount > 0" class="product-card-horizontal__price-old">
              <p class="b5">{{ formattedOldPrice }}</p>
            </div>
          </div>

          <button-cus variant="tertiary" @click="toggleCart">
            <template #icon>
              <icon-cart />
            </template>
            <p class="b5">{{ product.isCart ? 'En carrito' : 'Añadir' }}</p>
          </button-cus>
        </div>
      </div>

    </div>
  `,

  props: {
    product: { type: Object, required: true }
  },

  emits: ['add-like', 'remove-like', 'add-cart', 'remove-cart'],

  data() {
    return {
      heartFill: this.product.isLiked
    };
  },

  watch: {
    'product.isLiked'(newVal) {
      this.heartFill = newVal;
    }
  },

  computed: {
    finalPrice() {
      return this.product.price - this.product.price * this.product.discount;
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
      this.heartFill = !this.heartFill;
      this.product.isLiked = this.heartFill;
      if (this.heartFill) {
        this.$emit('add-like', this.product);
      } else {
        this.$emit('remove-like', this.product);
      }
    },
    toggleCart() {
      this.product.isCart = !this.product.isCart;
      if (this.product.isCart) {
        this.$emit('add-cart', this.product);
      } else {
        this.$emit('remove-cart', this.product);
      }
    }
  }
};