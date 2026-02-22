const NavBar = {
  props: {
    isDark: {
      type: Boolean,
      required: true
    },
    likesCount: {
      type: Number,
      default: 0
    },
    cartCount: {
      type: Number,
      default: 0
    }
  },

  emits: ['toggle-theme', 'open-likes-popup', 'open-cart-popup'],

  data() {
    return {
      inCartFill: false,
      heartFill: false,
      search: '',
      localDark: false 
    };
  },

methods: {
  handleThemeClick() {
    this.localDark = !this.localDark;
    this.$emit('toggle-theme');
  },

  handleSearch() {
    // Emitimos al padre el texto para que filtre los productos
    this.$emit('search', this.search);
  },

  handleHeartClick() {
    this.$emit('open-likes-popup');
  },

  handleCartClick() {
    this.inCartFill = !this.inCartFill;
    this.$emit('open-cart-popup');
  }
},
  template: `
    <nav class="navbar">
      <div class="nav-container">

        <h1 class="logo">TEMSETSTORE</h1>

<div class="search-container">
  <input-cus
    v-model="search"
    placeholder="Search products..."
  />
  <button-cus icon-only @click="handleSearch">
    <template #icon>
      <icon-lets />
    </template>
  </button-cus>
</div>

        <div class="nav-icons">

          <button-cus 
            variant="tertiary" 
            icon-only
            @click="handleThemeClick"
          >
            <template #icon>
              <icon-theme 
                class="iconPrimary"
                :filled="localDark"
              />
            </template>
          </button-cus>

          <div class="nav-icon-wrapper">
            <button-cus 
              variant="tertiary" 
              icon-only
              @click="handleCartClick"
            >
              <template #icon>
                <icon-cart 
                  class="iconPrimary"
                  :filled="inCartFill"
                />
              </template>
            </button-cus>
            <span v-if="cartCount > 0" class="nav-badge">{{ cartCount }}</span>
          </div>

          <div class="nav-icon-wrapper">
            <button-cus 
              variant="tertiary" 
              icon-only
              @click="handleHeartClick"
            >
              <template #icon>
                <icon-heart class="iconPrimary" :filled="heartFill"/>
              </template>
            </button-cus>
            <span v-if="likesCount > 0" class="nav-badge">{{ likesCount }}</span>
          </div>

          <button-cus 
            variant="tertiary" 
            icon-only
          >
            <template #icon>
              <icon-user class="iconPrimary" />
            </template>
          </button-cus>

        </div>

      </div>
    </nav>
  `
};