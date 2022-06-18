<script setup lang="ts">
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
import { imgExts } from '@/lib/UmlCodeConverter'

const { currentImgExt, changeImgExt } = injectUseUmlCodeSingle()

const isChecked = (ext: string) => {
  return currentImgExt.value === ext
}
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <template v-for="imgExt in imgExts" :key="imgExt">
      <div class="form-check mb-0">
        <input :id="`img-ext-${imgExt}`" class="form-check-input" type="radio" name="img-ext" :value="imgExt" :checked="isChecked(imgExt)" @change="changeImgExt(imgExt)" />
        <label :for="`img-ext-${imgExt}`" class="form-check-label">{{ imgExt.toUpperCase() }}</label>
      </div>
    </template>
  </div>
</template>
