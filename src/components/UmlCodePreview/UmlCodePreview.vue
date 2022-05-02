<script setup lang="ts">
import PreviewToolbar from '@/components/UmlCodePreview/PreviewToolbar.vue'
import { provideUseUmlCodePreview } from '@/store/UseUmlCodePreview'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
const { imgSize } = provideUseUmlCodePreview()
const { htmlString } = injectUseUmlCodeSingle()
</script>

<template>
  <div class="d-flex flex-column overflow-hidden">
    <preview-toolbar />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="PreviewMd flex-grow-1 pt-3 px-3 pb-0 overflow-auto" v-html="htmlString" />
  </div>
</template>

<style>
.PreviewMd img {
  width: 100%;
  max-height: 50rem;
  object-fit: contain;
  transform: scale(v-bind('imgSize'));
  transform-origin: top left;
}
</style>
