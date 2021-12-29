<script setup lang="ts">
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
const { htmlString } = injectUseUmlCodeSingle()
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="UmlCodePreview" v-html="htmlString" />
</template>

<style scoped>
.UmlCodePreview {
  padding: 1rem;
  overflow: auto;
}
</style>

<style>
.UmlCodePreview img {
  width: 100%;
  max-height: 50rem;
  object-fit: contain;
}
</style>
