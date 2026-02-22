const IconCross = {
  props: {
    size: {
      type: Number,
      default: 27
    }
  },
  template: `
    <svg 
      :width="size"
      :height="size"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
<path d="M26.6668 26.6667L5.3335 5.33333M26.6668 5.33333L5.3335 26.6667" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round"/>

    </svg>
  `
}