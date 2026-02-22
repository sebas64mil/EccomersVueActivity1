const InputCus = {
    template: `
        <div 
            class="input-search"
            :class="[variant]"
        >
            <input
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>
    `,

    props: {
        modelValue: String,
        placeholder: {
            type: String,
            default: 'Search...'
        },
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => ['primary', 'secondary'].includes(value)
        }
    },

    emits: ['update:modelValue']
};