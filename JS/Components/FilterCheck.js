const FilterCheck = {
  props: {
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false // controlado desde el padre
    },
    count: {
      type: Number,
      default: 0 // cantidad de productos en esa categoría
    }
  },

  data() {
    return {
      internalChecked: this.checked
    };
  },

  watch: {
    checked(newVal) {
      this.internalChecked = newVal;
    }
  },

  methods: {
    toggleCheck() {
      this.internalChecked = !this.internalChecked;
      // Emitimos al padre para que actualice el array de selectedCategories
      this.$emit('update', { label: this.label, checked: this.internalChecked });
    }
  },

  template: `
    <div class="filter-option" @click="toggleCheck">
      <button-cus 
        variant="tertiary"
        icon-only
        @click.stop="toggleCheck"
      >
        <template #icon>
          <icon-check 
            :filled="internalChecked" 
            class="iconPrimary"
          />
        </template>
      </button-cus>
      <p class="filter-text b2">
        {{ label }} <span v-if="count > 0">({{ count }})</span>
      </p>
    </div>
  `
};