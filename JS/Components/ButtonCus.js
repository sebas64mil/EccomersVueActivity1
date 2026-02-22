const ButtonCus = {
    template: `
        <button
            class="btn"
            :class="buttonClasses"
            @click="$emit('click', $event)"
        >
            <span v-if="!isTextOnly" class="btn-icon">
                <slot name="icon"></slot>
            </span>

            <span v-if="!isIconOnly" class="btn-text">
                <slot></slot>
            </span>
        </button>
    `,

    props: {

        /* 🎨 Color variant */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) =>
                ['primary', 'secondary', 'tertiary'].includes(value)
        },

        /* 🔘 Solo icono */
        iconOnly: {
            type: Boolean,
            default: false
        },

        /* 🧾 Solo texto */
        textOnly: {
            type: Boolean,
            default: false
        }
    },

    computed: {

        isIconOnly() {
            return this.iconOnly && !this.textOnly;
        },

        isTextOnly() {
            return this.textOnly && !this.iconOnly;
        },

        buttonClasses() {
            return [
                `btn-${this.variant}`,
                {
                    'btn-icon-only': this.isIconOnly,
                    'btn-text-only': this.isTextOnly
                }
            ];
        }
    },

    emits: ['click']
};