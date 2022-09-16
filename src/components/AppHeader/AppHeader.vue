<script setup lang="ts">
import TemplateMenu from '@/components/AppHeader/TemplateMenu.vue'
import SideMenuBtn from '@/components/AppHeader/SideMenuBtn.vue'
import CheatSheetSwitch from '@/components/AppHeader/CheatSheetSwitch.vue'
import IconLinks from '@/components/AppHeader/IconLinks.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid justify-content-start">
        <side-menu-btn />
        <span class="navbar-brand ms-3 mb-0 me-0 h1 text-white-50">PlantUML Editor</span>
        <template-menu class="ms-5" />
        <div class="navbar-text ms-3">Preview is Ctrl-Enter or Cmd-Enter</div>
        <cheat-sheet-switch class="ms-5" />
        <icon-links class="ms-auto" />
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
