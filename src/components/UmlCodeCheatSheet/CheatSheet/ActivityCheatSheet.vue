<script setup lang="ts">
import { activity } from '@/assets/json/cheatsheets.json'
import CopyablePre from '@/components/UmlCodeCheatSheet/CopyablePre.vue'
</script>

<template>
  <div id="ActivityCheatSheet">
    <div class="h4">Activity</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ activity.if.title }}</td>
          <td>
            <copyable-pre>{{ activity.if.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.repeat.title }}</td>
          <td>
            <copyable-pre>{{ activity.repeat.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.while.title }}</td>
          <td>
            <copyable-pre>{{ activity.while.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.fork.title }}</td>
          <td>
            <copyable-pre>{{ activity.fork.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.partition.title }}</td>
          <td>
            <copyable-pre>{{ activity.partition.text }}</copyable-pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
