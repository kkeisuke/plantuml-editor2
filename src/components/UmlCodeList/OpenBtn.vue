<script setup lang="ts">
import arrowUpRightSquare from '@/assets/icons/bi-arrow-up-right-square.svg?url'

const props = withDefaults(
  defineProps<{
    src: string
  }>(),
  {
    src: ''
  }
)

const onClick = () => {
  open(props.src)
}
</script>

<template>
  <svg role="button" class="OpenBtn" @click.stop="onClick">
    <use :href="`${arrowUpRightSquare}#icon`" />
  </svg>
</template>

<style scoped>
.OpenBtn {
  width: 1.4rem;
  height: 1.4rem;
  background-color: #fff;
}
</style>
