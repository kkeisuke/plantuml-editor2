<script setup lang="ts">
import ZoomInBtn from '@/components/UmlCodePreview/Toolbar/Zoom/ZoomInBtn.vue'
import ZoomOutBtn from '@/components/UmlCodePreview/Toolbar/Zoom/ZoomOutBtn.vue'
import { injectUseUmlCodePreview } from '@/store/UseUmlCodePreview'
const { imgSize, addImgSize } = injectUseUmlCodePreview()
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <zoom-in-btn @click="addImgSize(10)" />
    <span class="size">{{ imgSize.toFixed(1) }}</span>
    <zoom-out-btn @click="addImgSize(-10)" />
  </div>
</template>

<style scoped>
.size {
  user-select: none;
  font-variant-numeric: tabular-nums;
}
</style>
