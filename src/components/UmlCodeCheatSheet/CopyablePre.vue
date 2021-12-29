<script setup lang="ts">
import { useCopyable } from './UseCopyable'
const { copy } = useCopyable()
</script>

<template>
  <pre class="bg-secondary text-white rounded m-0 p-1" role="button" tabindex="0" data-bs-toggle="tooltip" title="copy" @focus="copy"><slot /></pre>
</template>

<style scoped></style>
