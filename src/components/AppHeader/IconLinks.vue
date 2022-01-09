<script setup lang="ts">
import GitHub from '@/assets/icons/bi-github.svg?url'
import HouseFill from '@/assets/icons/bi-house-fill.svg?url'
import Twitter from '@/assets/icons/bi-twitter.svg?url'
</script>

<template>
  <ul class="navbar-nav flex-row align-items-center gap-3">
    <li class="nav-item">
      <a href="https://github.com/kkeisuke/plantuml-editor2" target="_blank" rel="noopener noreferrer">
        <svg class="iconSize text-white-50">
          <use :href="`${GitHub}#icon`" />
        </svg>
      </a>
    </li>
    <li class="nav-item">
      <a href="https://twitter.com/kkeisuke" target="_blank" rel="noopener noreferrer">
        <svg class="iconSize text-white-50">
          <use :href="`${Twitter}#icon`" />
        </svg>
      </a>
    </li>
    <li class="nav-item">
      <a href="https://kkeisuke.com/" target="_blank" rel="noopener noreferrer">
        <svg class="iconSize text-white-50">
          <use :href="`${HouseFill}#icon`" />
        </svg>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.iconSize {
  width: 1.6rem;
  height: 1.6rem;
}
</style>
