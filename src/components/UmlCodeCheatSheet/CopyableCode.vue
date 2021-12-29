<script setup lang="ts">
import { useCopyable } from './UseCopyable'
const { copy } = useCopyable()
</script>

<template>
  <code role="button" tabindex="0" data-bs-toggle="tooltip" title="copy" @focus="copy"><slot /></code>
</template>

<style scoped></style>
