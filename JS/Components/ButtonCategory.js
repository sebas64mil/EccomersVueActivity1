const ButtonCategory = {
  props: {
    label: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },

  emits: ['select'],

  template: `
    <button 
      class="btn-category"
      :class="{ 'is-selected': selected }"
      @click="$emit('select')"
    >
      {{ label }}
    </button>
  `
};