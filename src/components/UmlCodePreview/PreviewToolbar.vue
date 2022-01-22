<script setup lang="ts">
import Zoom from '@/components/UmlCodePreview/Toolbar/Zoom/Zoom.vue'
</script>

<template>
  <div class="PreviewToolbar">
    <zoom />
  </div>
</template>

<style scoped>
.PreviewToolbar {
  padding-inline: 0.4rem;
  display: flex;
  align-items: center;
  height: 2.4rem;
  background-color: var(--bs-gray-200);
}
</style>
