const Popup = {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    products: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Your Items'
    }
  },

  emits: ['close', 'remove-like', 'remove-cart', 'add-like', 'add-cart'],

  methods: {
    handleClose() {
      this.$emit('close');
    },

    handleOverlayClick(event) {
      if (event.target.classList.contains('popup-overlay')) {
        this.$emit('close');
      }
    },

    handleRemoveLike(product) {
      this.$emit('remove-like', product);
    },

    handleRemoveCart(product) {
      this.$emit('remove-cart', product);
    },

    handleAddLike(product) {
      this.$emit('add-like', product);
    },

    handleAddCart(product) {
      this.$emit('add-cart', product);
    }
  },

  template: `
    <div class="popup-overlay" v-if="visible" @click="handleOverlayClick">
      <div class="popup-content">

        <!-- BOTÓN CERRAR -->
        <button-cus variant="tertiary" icon-only class="popup-close" @click="handleClose">
          <template #icon>
            <icon-cross class="iconPrimary" />
          </template>
        </button-cus>

        <!-- TÍTULO -->
        <h2>{{ title }}</h2>

        <!-- CONTENEDOR FLEX DE CARDS -->
        <div class="popup-cards-container">
          <product-card-horizontal
            v-for="(product, index) in products"
            :key="index"
            :product="product"
            @remove-like="handleRemoveLike"
            @remove-cart="handleRemoveCart"
            @add-like="handleAddLike"
            @add-cart="handleAddCart"
          />
        </div>

      </div>
    </div>
  `
};