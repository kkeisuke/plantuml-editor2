import { umlCodePreviewRepository } from '@/repository/UmlCodePreviewRepository'
import { computed, inject, InjectionKey, provide, ref } from 'vue'

const DEFAULT_IMG_SIZE = 100

export const useUmlCodePreview = () => {
  const imgSize = ref(umlCodePreviewRepository.fetchImgSize() || DEFAULT_IMG_SIZE)

  const addImgSize = (val: number) => {
    const result = imgSize.value + val
    if (result <= 0) {
      return
    }
    imgSize.value = result
    umlCodePreviewRepository.saveImgSize(imgSize.value)
  }

  return {
    imgSize: computed(() => imgSize.value / DEFAULT_IMG_SIZE),
    addImgSize
  }
}

const USE_UML_CODE_PREVIEW: InjectionKey<ReturnType<typeof useUmlCodePreview>> = Symbol('USE_UML_CODE_PREVIEW')

export const provideUseUmlCodePreview = () => {
  const useObj = useUmlCodePreview()

  provide(USE_UML_CODE_PREVIEW, useObj)

  return useObj
}

export const injectUseUmlCodePreview = () => {
  const useObj = inject(USE_UML_CODE_PREVIEW)

  if (useObj) {
    return useObj
  } else {
    throw new Error('error injectUseUmlCodePreview')
  }
}
