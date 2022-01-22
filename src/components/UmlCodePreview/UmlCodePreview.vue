<script setup lang="ts">
import PreviewToolbar from '@/components/UmlCodePreview/PreviewToolbar.vue'
import { provideUseUmlCodePreview } from '@/store/UseUmlCodePreview'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
const { imgSize } = provideUseUmlCodePreview()
const { htmlString } = injectUseUmlCodeSingle()
</script>

<template>
  <div class="overflow-hidden">
    <preview-toolbar />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="PreviewMd" v-html="htmlString" />
  </div>
</template>

<style scoped>
.PreviewMd {
  padding: 1rem 1rem 0;
  height: 100%;
  overflow: auto;
}
</style>

<style>
.PreviewMd img {
  width: 100%;
  max-height: 50rem;
  object-fit: contain;
  transform: scale(v-bind('imgSize'));
}
</style>
