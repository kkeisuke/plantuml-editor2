<script setup lang="ts">
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import UmlCodeList from '@/components/UmlCodeList/UmlCodeList.vue'
import UmlCodeEditor from '@/components/UmlCodeEditor/UmlCodeEditor.vue'
import UmlCodeCheatSheet from '@/components/UmlCodeCheatSheet/UmlCodeCheatSheet.vue'
import UmlCodePreview from '@/components/UmlCodePreview/UmlCodePreview.vue'
import { provideUseUmlCodeCollection } from '@/store/UseUmlCodeCollection'
import { provideUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
import { provideUseLayout } from '@/store/UseLayout'

provideUseUmlCodeCollection()
provideUseUmlCodeSingle()
const { isShowMenu, isShowCheatSheet } = provideUseLayout()
</script>

<template>
  <div class="PlantumlEditor">
    <app-header class="AppHeader" />
    <uml-code-list class="UmlCodeList" :class="{ hidden: !isShowMenu }" />
    <uml-code-editor class="UmlCodeEditor" />
    <uml-code-cheat-sheet class="UmlCodeCheatSheet" :class="{ hidden: !isShowCheatSheet }" />
    <uml-code-preview />
  </div>
</template>

<style scoped>
.PlantumlEditor {
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
}
.AppHeader {
  grid-column: 1 / 5;
}
.UmlCodeList {
  width: 14rem;
}
.UmlCodeEditor {
  width: 40rem;
}
.UmlCodeCheatSheet {
  width: 30rem;
}
.hidden {
  padding: 0;
  width: 0;
}
</style>
