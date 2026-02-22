const IconLets = {
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
<path d="M14.6666 24C19.8212 24 23.9999 19.8213 23.9999 14.6667C23.9999 9.51201 19.8212 5.33334 14.6666 5.33334C9.51193 5.33334 5.33325 9.51201 5.33325 14.6667C5.33325 19.8213 9.51193 24 14.6666 24Z" stroke="currentColor" stroke-width="2.66667"/>
<path d="M26.6665 26.6667L22.6665 22.6667" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round"/>
    </svg>
  `
}