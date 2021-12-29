<script setup lang="ts">
import { er } from '@/assets/json/cheatsheets.json'
import CopyableCode from '@/components/UmlCodeCheatSheet/CopyableCode.vue'
</script>

<template>
  <div id="ERCheatSheet">
    <div class="h4">ER diagram</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ er.entity.title }}</td>
          <td>
            <copyable-code>{{ er.entity.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ er.one.title }}</td>
          <td>
            <copyable-code>{{ er.one.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ er.zeroOrOne.title }}</td>
          <td>
            <copyable-code>{{ er.zeroOrOne.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ er.oneAndOnlyOne.title }}</td>
          <td>
            <copyable-code>{{ er.oneAndOnlyOne.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ er.many.title }}</td>
          <td>
            <copyable-code>{{ er.many.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ er.zeroOrMany.title }}</td>
          <td>
            <copyable-code>{{ er.zeroOrMany.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ er.oneOrMany.title }}</td>
          <td>
            <copyable-code>{{ er.oneOrMany.text }}</copyable-code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
