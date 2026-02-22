const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      titulo: 'Bienvenido a EccomersVue',
      mensaje: 'Tu plataforma de e-commerce con Vue CDN',
      inCartFill: false,
      heartFill: false,
      CheckFill: false,
      isDark: false,
      selectedCategory: '3D',
      products: data.products,
      selectedCategories: [],
      selectedCategory: 'All',
      searchQuery: '',
      showLikesPopup: false,
      showCartPopup: false,
      likedProducts: [],
      cartProducts: []
    }
  },

  components: {
    buttonCategory: ButtonCategory
  },

  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },

    // Maneja los checks de categorías
    handleCheckUpdate({ label, checked }) {
      // Limpiar búsqueda si hay texto
      if (this.searchQuery) {
        this.searchQuery = '';
      }

      if (checked) {
        if (!this.selectedCategories.includes(label)) {
          this.selectedCategories.push(label);
        }
      } else {
        this.selectedCategories = this.selectedCategories.filter(c => c !== label);
      }

      if (this.selectedCategories.length === 0) {
        this.selectedCategory = 'GENERAL';
      } else if (this.selectedCategories.length === 1) {
        this.selectedCategory = this.selectedCategories[0];
      } else {
        this.selectedCategory = 'GENERAL';
      }
    },

    // Maneja la selección de botones de categoría
    handleCategorySelect(label) {
      if (label === 'GENERAL') {
        this.selectedCategories = [];
      } else {
        this.selectedCategories = [label];
      }
      this.selectedCategory = label;

      // Limpiar búsqueda
      if (this.searchQuery) {
        this.searchQuery = '';
      }
    },

    handleAlertRemove(label) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== label);
      if (this.selectedCategories.length === 0) {
        this.selectedCategory = 'GENERAL';
      } else if (this.selectedCategories.length === 1) {
        this.selectedCategory = this.selectedCategories[0];
      } else {
        this.selectedCategory = 'GENERAL';
      }
    },

    // Maneja la búsqueda desde el NavBar
    handleSearch(query) {
      this.searchQuery = query;
      this.selectedCategories = []; 
      this.selectedCategory = 'GENERAL';
    },

    // Maneja la apertura del PopUp de Likes
    handleOpenLikesPopup() {
      this.showLikesPopup = true;
    },

    // Maneja la apertura del PopUp de Carrito
    handleOpenCartPopup() {
      this.showCartPopup = true;
    },

    // Agrega un producto a los likes
    handleAddLike(product) {
      if (!this.likedProducts.find(p => p.id === product.id)) {
        this.likedProducts.push(product);
      }
      product.isLiked = true;
    },

    // Remueve un producto de los likes
    handleRemoveLike(product) {
      this.likedProducts = this.likedProducts.filter(p => p.id !== product.id);
      product.isLiked = false;
    },

    // Agrega un producto al carrito
    handleAddCart(product) {
      if (!this.cartProducts.find(p => p.id === product.id)) {
        this.cartProducts.push(product);
      }
      product.isCart = true;
    },

    // Remueve un producto del carrito
    handleRemoveCart(product) {
      this.cartProducts = this.cartProducts.filter(p => p.id !== product.id);
      product.isCart = false;
    },
  },

  computed: {
    // Total de productos mostrados
    totalProductsDisplayed() {
      if (this.searchQuery) {
        const words = this.searchQuery.toLowerCase().split(' ').filter(Boolean);
        return this.products.filter(p => {
          const name = p.name.toLowerCase();
          return words.some(word => name.includes(word));
        }).length;
      }

      if (this.selectedCategories.length === 0) {
        return this.products.length;
      } else {
        return this.products.filter(p =>
          p.categorias.some(cat => this.selectedCategories.includes(cat))
        ).length;
      }
    },

    // Productos filtrados
    filteredProducts() {
      if (this.searchQuery) {
        const words = this.searchQuery.toLowerCase().split(' ').filter(Boolean);
        return this.products.filter(p => {
          const name = p.name.toLowerCase();
          return words.some(word => name.includes(word));
        });
      }

      if (this.selectedCategories.length === 0) {
        return this.products;
      } else {
        return this.products.filter(p =>
          p.categorias.some(cat => this.selectedCategories.includes(cat))
        );
      }
    }
  },

  watch: {
    isDark(newVal) {
      document.body.classList.toggle('dark', newVal)
    }
  }
});


// Components
app.component('nav-bar', NavBar)
app.component('button-cus', ButtonCus)
app.component('button-category', ButtonCategory)
app.component('input-cus', InputCus)
app.component('advise-section', Advise)
app.component("product-card", ProductCard);
app.component("alert-cus", AlertCus);
app.component('filter-check', FilterCheck)
app.component('product-card-horizontal', ProductCardHorizontal)
app.component('popup', Popup)
app.component('app-footer', Footer)

app.component('icon-cart', IconCart)
app.component('icon-user', IconUser)
app.component('icon-heart', IconHeart)
app.component('icon-lets', IconLets)
app.component('icon-check', IconCheck)
app.component('icon-theme', IconTheme)
app.component('icon-cross', IconCross)

app.mount('#app');