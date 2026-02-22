const AlertCus = {
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'primary' // 'primary' o 'secondary'
        }
    },

    data() {
        return {
            heartFill: false // para el icono si quieres animación
        };
    },

    methods: {
        removeCategory() {
            // Cambiamos el estado local del icono
            this.heartFill = !this.heartFill;

            // Emitimos al padre la categoría que se quiere eliminar
            this.$emit('remove', this.message);
        }
    },

    template: `
        <div 
            class="alert-box"
            :class="{'alert-secondary': type === 'secondary'}"
        >
            <p class="b3">{{ message }}</p>

            <!-- Solo para secondary -->
            <button-cus 
                v-if="type === 'secondary'"
                variant="tertiary"
                icon-only
                @click.stop="removeCategory"
            >
                <template #icon>
                    <icon-cross 
                        class="iconPrimary"
                        :filled="heartFill"
                    />
                </template>
            </button-cus>
        </div>
    `
};