<script setup lang="ts">
import CommonCheatSheet from '@/components/UmlCodeCheatSheet/CheatSheet/CommonCheatSheet.vue'
import UseCaseCheatSheet from '@/components/UmlCodeCheatSheet/CheatSheet/UseCaseCheatSheet.vue'
import ActivityCheatSheet from '@/components/UmlCodeCheatSheet/CheatSheet/ActivityCheatSheet.vue'
import SequenceCheatSheet from '@/components/UmlCodeCheatSheet/CheatSheet/SequenceCheatSheet.vue'
import ObjectCheatSheet from '@/components/UmlCodeCheatSheet/CheatSheet/ObjectCheatSheet.vue'
import ClassCheatSheet from '@/components/UmlCodeCheatSheet/CheatSheet/ClassCheatSheet.vue'
import ERCheatSheet from '@/components/UmlCodeCheatSheet/CheatSheet/ERCheatSheet.vue'
</script>

<template>
  <div class="UmlCodeCheatSheet d-flex flex-column gap-4">
    <common-cheat-sheet />
    <use-case-cheat-sheet />
    <activity-cheat-sheet />
    <sequence-cheat-sheet />
    <object-cheat-sheet />
    <class-cheat-sheet />
    <e-r-cheat-sheet />
  </div>
</template>

<style scoped>
.UmlCodeCheatSheet {
  padding: 1rem;
  overflow-y: auto;
}
</style>
