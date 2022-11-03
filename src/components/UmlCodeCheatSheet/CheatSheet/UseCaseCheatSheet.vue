<script setup lang="ts">
import { usecase } from '@/assets/json/cheatsheets.json'
import CopyablePre from '@/components/UmlCodeCheatSheet/CopyablePre.vue'
import CopyableCode from '@/components/UmlCodeCheatSheet/CopyableCode.vue'
</script>

<template>
  <div id="UseCaseCheatSheet">
    <div class="h4">Use Case</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ usecase.package.title }}</td>
          <td>
            <copyable-pre>{{ usecase.package.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ usecase.rectangle.title }}</td>
          <td>
            <copyable-pre>{{ usecase.rectangle.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ usecase.up.title }}</td>
          <td>
            <copyable-code>{{ usecase.up.text }}</copyable-code> (text)
          </td>
        </tr>
        <tr>
          <td>{{ usecase.right.title }}</td>
          <td>
            <copyable-code>{{ usecase.right.text }}</copyable-code> (text)
          </td>
        </tr>
        <tr>
          <td>{{ usecase.down.title }}</td>
          <td>
            <copyable-code>{{ usecase.down.text }}</copyable-code> (text)
          </td>
        </tr>
        <tr>
          <td>{{ usecase.left.title }}</td>
          <td>
            <copyable-code>{{ usecase.left.text }}</copyable-code> (text)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
