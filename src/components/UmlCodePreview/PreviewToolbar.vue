<script setup lang="ts">
import Zoom from '@/components/UmlCodePreview/Toolbar/Zoom/Zoom.vue'
import ImgExt from '@/components/UmlCodePreview/Toolbar/ImgExt/ImgExt.vue'
</script>

<template>
  <div class="PreviewToolbar">
    <zoom />
    <img-ext />
  </div>
</template>

<style scoped>
.PreviewToolbar {
  padding-inline: 0.4rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  height: 2.4rem;
  background-color: var(--bs-gray-200);
}
</style>
