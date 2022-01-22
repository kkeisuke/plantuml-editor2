<script setup lang="ts">
import { ref } from 'vue'
import xSquareFill from '@/assets/icons/bi-x-square-fill.svg?url'

const emit = defineEmits<{
  (e: 'delete', value: boolean): void
}>()

const confirm = ref(false)
const LIMIT = 5000

const onClick = () => {
  if (!confirm.value) {
    confirm.value = true
    setTimeout(() => (confirm.value = false), LIMIT)
    return
  }
  emit('delete', confirm.value)
}
</script>

<template>
  <svg role="button" class="DeleteBtn" :class="{ 'text-danger': confirm }" @click.stop="onClick">
    <use :href="`${xSquareFill}#icon`" />
  </svg>
</template>

<style scoped>
.DeleteBtn {
  width: 1rem;
  height: 1rem;
  background-color: #fff;
}
</style>
