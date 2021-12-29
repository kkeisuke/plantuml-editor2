<script setup lang="ts">
import { object } from '@/assets/json/cheatsheets.json'
import CopyablePre from '@/components/UmlCodeCheatSheet/CopyablePre.vue'
import CopyableCode from '@/components/UmlCodeCheatSheet/CopyableCode.vue'
</script>

<template>
  <div id="ObjectCheatSheet">
    <div class="h4">Object</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ object.object.title }}</td>
          <td>
            <copyable-pre>{{ object.object.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ object.extension.title }}</td>
          <td>
            <copyable-code>{{ object.extension.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ object.composition.title }}</td>
          <td>
            <copyable-code>{{ object.composition.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ object.aggregation.title }}</td>
          <td>
            <copyable-code>{{ object.aggregation.text }}</copyable-code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
