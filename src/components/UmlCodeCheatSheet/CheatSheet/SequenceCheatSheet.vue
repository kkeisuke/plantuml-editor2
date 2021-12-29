<script setup lang="ts">
import { sequence } from '@/assets/json/cheatsheets.json'
import CopyablePre from '@/components/UmlCodeCheatSheet/CopyablePre.vue'
import CopyableCode from '@/components/UmlCodeCheatSheet/CopyableCode.vue'
const url = `${import.meta.env.VITE_PLANTUML_SERVER}/svg/`
</script>

<template>
  <div id="SequenceCheatSheet">
    <div class="h4">Sequence</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ sequence.autonumber.title }}</td>
          <td>
            <copyable-code>{{ sequence.autonumber.text }}</copyable-code>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="`${url}${sequence.participant.img}`" :alt="sequence.participant.title" />
          </td>
          <td>
            <copyable-pre>{{ sequence.participant.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ sequence.activate.title }}</td>
          <td>
            <copyable-code>{{ sequence.activate.text }}</copyable-code> abc
          </td>
        </tr>
        <tr>
          <td>{{ sequence.deactivate.title }}</td>
          <td>
            <copyable-code>{{ sequence.deactivate.text }}</copyable-code> abc
          </td>
        </tr>
        <tr>
          <td>{{ sequence.altelse.title }}</td>
          <td>
            <copyable-pre>{{ sequence.altelse.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ sequence.loop.title }}</td>
          <td>
            <copyable-pre>{{ sequence.loop.text }}</copyable-pre>
          </td>
        </tr>
        <tr>
          <td>{{ sequence.separate.title }}</td>
          <td>
            <copyable-code>{{ sequence.separate.text }}</copyable-code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
