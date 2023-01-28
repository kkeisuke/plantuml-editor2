<script setup lang="ts">
import { watch } from 'vue'
import DeleteBtn from '@/components/UmlCodeList/DeleteBtn.vue'
import OpenBtn from '@/components/UmlCodeList/OpenBtn.vue'
import { injectUseUmlCodeCollection } from '@/store/UseUmlCodeCollection'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
import { useSelectUmlCode } from '@/usecase/UseSelectUmlCode'
// import { formatDate } from '@/lib/DateTimeFormat'

const { selectUmlCode, deleteUmlCode } = useSelectUmlCode()
const { umlCodes, fetch } = injectUseUmlCodeCollection()
const { current } = injectUseUmlCodeSingle()

// 更新を一覧に反映させる
watch(
  current.value,
  async () => {
    await fetch()
  },
  { immediate: true }
)
</script>

<template>
  <div class="overflow-auto bg-dark">
    <ul class="list-group list-group-flush">
      <li v-for="umlCode in umlCodes" :key="umlCode.id" :class="{ current: umlCode.id === current.id }" class="list-group-item p-2 d-flex flex-wrap gap-1">
        <!-- <p class="text-center">
          <small>{{ formatDate(umlCode.updatedAt) }}</small>
        </p> -->
        <div v-for="(img, index) in umlCode.imgs" :key="img" :class="{ 'w-100': !index, 'secondary flex-grow-1': index }" class="position-relative">
          <img :src="img" role="button" loading="lazy" @click="selectUmlCode(umlCode.id)" />
          <open-btn :src="img" class="position-absolute bottom-0 end-0" />
        </div>
        <delete-btn class="position-absolute bottom-0 start-0 mb-2 ms-2" @delete="deleteUmlCode(umlCode)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
li:is(:hover, .current) {
  background-color: var(--bs-gray-300);
}
img {
  width: 100%;
  height: 14rem;
  object-fit: scale-down;
  background-color: #fff;
}
.secondary {
  max-width: calc(50% - 0.125rem);
}
.secondary img {
  height: 3.5rem;
}
</style>
