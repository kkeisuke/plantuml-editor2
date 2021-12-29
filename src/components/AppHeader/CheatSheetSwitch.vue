<script setup lang="ts">
import { injectUseLayout } from '@/store/UseLayout'
import { ref } from 'vue'

const { showCheatSheet, hideCheatSheet, hideMenu } = injectUseLayout()
const cheatSheetSwitch = ref(false)

const onChange = () => {
  cheatSheetSwitch.value ? showCheatSheet() : hideCheatSheet()
  // サイドメニューを非表示にする
  cheatSheetSwitch.value && hideMenu()
}
</script>

<template>
  <div class="form-check form-switch m-0">
    <input id="CheatSheetSwitch" v-model="cheatSheetSwitch" class="form-check-input" type="checkbox" role="button" @change="onChange" />
    <label class="form-check-label text-secondary" for="CheatSheetSwitch" role="button">Show Cheat Sheets</label>
  </div>
</template>

<style scoped></style>
