<script setup lang="ts">
import { useAddUmlCode } from '@/usecase/UseAddUmlCode'

const { addNewUmlCode } = useAddUmlCode()
</script>

<template>
  <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <span class="btn btn-secondary btn-sm dropdown-toggle" role="button" data-bs-toggle="dropdown">New UML</span>
      <ul class="dropdown-menu dropdown-menu-dark position-absolute">
        <li><span class="dropdown-header">behavioral diagrams</span></li>
        <li><span class="dropdown-item" role="button" @click="addNewUmlCode('usecaseTemplate')">Use Case</span></li>
        <li><span class="dropdown-item" role="button" @click="addNewUmlCode('activitybTemplate')">Activity &#946;</span></li>
        <li><span class="dropdown-item" role="button" @click="addNewUmlCode('activityTemplate')">Activity</span></li>
        <li><span class="dropdown-item" role="button" @click="addNewUmlCode('sequenceTemplate')">Sequence</span></li>
        <li><hr class="dropdown-divider" /></li>
        <li><span class="dropdown-header">structural diagrams</span></li>
        <li><span class="dropdown-item" role="button" @click="addNewUmlCode('objectTemplate')">Object</span></li>
        <li><span class="dropdown-item" role="button" @click="addNewUmlCode('classTemplate')">Class</span></li>
        <li><span class="dropdown-item" role="button" @click="addNewUmlCode('erTemplate')">ER diagram</span></li>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>
