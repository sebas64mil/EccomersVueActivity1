const Advise = {
  props: {
    subtitle: String,
    title: String,
    description: String,
    image: {
      type: String,
      required: true
    }
  },

  template: `
    <div class="advise">

      <!-- LEFT SIDE -->
      <div class="advise-content">
        
        <p class="b3 advise-subtitle">{{ subtitle }}</p>
        
        <h1 class="advise-title">{{ title }}</h1>
        
        <p class="b4 advise-description ">
          {{ description }}
        </p>

        <button-cus text-only>
          <p class="b3">Shop 50% off</p>
        </button-cus>

      </div>

      <!-- RIGHT SIDE -->
      <div class="advise-image">
        <img :src="image" alt="advise image" />
      </div>

    </div>
  `
};