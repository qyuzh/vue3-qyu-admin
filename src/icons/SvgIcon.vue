<template>
  <svg :class="svgClass">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
})

const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>

<style scope lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em !important;
  fill: currentColor;
  overflow: hidden;
}
</style>
