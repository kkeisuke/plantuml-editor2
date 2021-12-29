<script setup lang="ts">
import TemplateMenu from '@/components/AppHeader/TemplateMenu.vue'
import SideMenuBtn from '@/components/AppHeader/SideMenuBtn.vue'
import CheatSheetSwitch from '@/components/AppHeader/CheatSheetSwitch.vue'
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid justify-content-start">
      <side-menu-btn class="me-3" />
      <span class="navbar-brand me-5 mb-0 h1 text-white-50">PlantUML Editor</span>
      <ul class="navbar-nav flex-row align-items-center gap-3 me-4">
        <template-menu />
      </ul>
      <cheat-sheet-switch />
    </div>
  </nav>
</template>

<style scoped></style>
