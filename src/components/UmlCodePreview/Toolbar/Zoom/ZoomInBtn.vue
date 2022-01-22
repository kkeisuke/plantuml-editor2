<script setup lang="ts">
import zoomIn from '@/assets/icons/bi-zoom-in.svg?url'
</script>

<template>
  <svg role="button" class="ZoomInBtn">
    <use :href="`${zoomIn}#icon`" />
  </svg>
</template>

<style scoped>
.ZoomInBtn {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
