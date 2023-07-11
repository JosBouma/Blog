<script lang="ts" setup>
const props = defineProps({
  'maxWidth': {
    type: Number,
    default: 80
  }
})

const cssVars = computed(() => {
  return {
    '--max-width': props.maxWidth
  }
})
</script>

<style>
.global-container-wrapper {
  display: flex;
}

.global-container {
  margin: 0 auto;
  max-width: calc(var(--max-width) * 1rem);
}
</style>

<template>
  <div class="global-container-wrapper" :style="cssVars">
    <div class="global-container">
      <slot></slot>
    </div>
  </div>
</template>