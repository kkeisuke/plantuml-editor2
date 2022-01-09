<script setup lang="ts">
import { watch } from 'vue'
import DeleteBtn from '@/components/UmlCodeList/DeleteBtn.vue'
import OpenBtn from '@/components/UmlCodeList/OpenBtn.vue'
import { injectUseUmlCodeCollection } from '@/store/UseUmlCodeCollection'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'
import { useSelectUmlCode } from '@/usecase/UseSelectUmlCode'
import { formatDate } from '@/lib/DateTimeFormat'

const { selectUmlCode, deleteUmlCode } = useSelectUmlCode()
const { umlCodes, fetch } = injectUseUmlCodeCollection()
const { current } = injectUseUmlCodeSingle()

// 初回表示
fetch()

// 更新を一覧に反映させる
watch(current.value, async () => {
  await fetch()
})
</script>

<template>
  <div class="UmlCodeList">
    <ul class="list-group list-group-flush">
      <li v-for="umlCode in umlCodes" :key="umlCode.id" :class="{ current: umlCode.id === current.id }" class="umlCodeItem list-group-item p-2">
        <p class="text-center">
          <small>{{ formatDate(umlCode.updatedAt) }}</small>
        </p>
        <div v-for="img in umlCode.imgs" :key="img" class="position-relative">
          <img :src="img" role="button" class="umlCodeImg" loading="lazy" @click="selectUmlCode(umlCode.id)" />
          <open-btn :src="img" class="position-absolute bottom-0 end-0" />
        </div>
        <delete-btn class="position-absolute bottom-0 start-0 mb-2 ms-2" @delete="deleteUmlCode(umlCode)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.UmlCodeList {
  overflow-y: auto;
  background-color: #222;
}
.umlCodeItem:hover,
.umlCodeItem.current {
  background-color: var(--bs-gray-300);
}
.umlCodeImg {
  width: 100%;
  height: 14rem;
  object-fit: scale-down;
}
</style>
