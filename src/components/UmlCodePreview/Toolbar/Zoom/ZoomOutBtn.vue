<script setup lang="ts">
import zoomOut from '@/assets/icons/bi-zoom-out.svg?url'
</script>

<template>
  <svg role="button" class="ZoomOutBtn">
    <use :href="`${zoomOut}#icon`" />
  </svg>
</template>

<style scoped>
.ZoomOutBtn {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
