<script setup lang="ts">
import { classes } from '@/assets/json/cheatsheets.json'
import CopyablePre from '@/components/UmlCodeCheatSheet/CopyablePre.vue'
import CopyableCode from '@/components/UmlCodeCheatSheet/CopyableCode.vue'
</script>

<template>
  <div id="ClassCheatSheet">
    <div class="h4">Class</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ classes.public.title }}</td>
          <td>
            <copyable-code>{{ classes.public.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ classes.private.title }}</td>
          <td>
            <copyable-code>{{ classes.private.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ classes.protected.title }}</td>
          <td>
            <copyable-code>{{ classes.protected.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ classes.packageprivate.title }}</td>
          <td>
            <copyable-code>{{ classes.packageprivate.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ classes.static.title }}</td>
          <td>
            <copyable-code>{{ classes.static.text }}</copyable-code> member
          </td>
        </tr>
        <tr>
          <td>{{ classes.abstract.title }}</td>
          <td>
            <copyable-code>{{ classes.abstract.text }}</copyable-code> member
          </td>
        </tr>
        <tr>
          <td>{{ classes.abstractkeyword.title }}</td>
          <td>
            <copyable-code>{{ classes.abstractkeyword.text }}</copyable-code>
            class
          </td>
        </tr>
        <tr>
          <td>{{ classes.interface.title }}</td>
          <td>
            <copyable-code>{{ classes.interface.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>{{ classes.package.title }}</td>
          <td>
            <copyable-pre>{{ classes.package.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ classes.namespace.title }}</td>
          <td>
            <copyable-pre>{{ classes.namespace.text }}</copyable-pre>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
