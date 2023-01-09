<script setup lang="ts">
import { nextTick, watch } from 'vue'
import PreviewToolbar from '@/components/UmlCodePreview/PreviewToolbar.vue'
import { provideUseUmlCodePreview } from '@/store/UseUmlCodePreview'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
const { imgSize } = provideUseUmlCodePreview()
const { htmlString } = injectUseUmlCodeSingle()

watch(
  () => htmlString.value,
  () => {
    nextTick(() => {
      const objs = document.querySelectorAll<HTMLObjectElement>('.PreviewMd .uml object')
      objs.forEach((obj) => {
        obj.onload = () => {
          obj.classList.add('loaded')
        }
      })
    })
  }
)
</script>

<template>
  <div class="d-flex flex-column overflow-hidden">
    <preview-toolbar class="flex-shrink-0" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="PreviewMd flex-grow-1 pt-3 px-3 pb-0 overflow-auto" v-html="htmlString" />
  </div>
</template>

<style>
.PreviewMd .uml {
  display: flex;
  justify-content: center;
  align-items: center; /* for safari */
}
.PreviewMd .uml object.loaded {
  width: calc(50rem * v-bind('imgSize'));
}
</style>
