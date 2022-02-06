import { computed, inject, type InjectionKey, provide, reactive } from 'vue'
import { umlCodeCollectionRepository } from '@/repository/UmlCodeCollectionRepository'
import { getDefaultUmlCode, type UmlCode } from '@/entities/UmlCode'

type State = {
  umlCodes: UmlCode[]
}

const useUmlCodeCollection = () => {
  const state = reactive<State>({
    umlCodes: []
  })

  const fetch = async () => {
    state.umlCodes = await umlCodeCollectionRepository.fetch()
  }

  const add = async (code: UmlCode['code']) => {
    const id = await umlCodeCollectionRepository.add({ ...getDefaultUmlCode(), code })
    fetch()
    return id
  }

  return {
    umlCodes: computed(() => state.umlCodes),
    fetch,
    add
  }
}

const USE_UML_CODE_COLLECTION: InjectionKey<ReturnType<typeof useUmlCodeCollection>> = Symbol('USE_UML_CODE_COLLECTION')

export const provideUseUmlCodeCollection = () => {
  const useObj = useUmlCodeCollection()

  provide(USE_UML_CODE_COLLECTION, useObj)

  return useObj
}

export const injectUseUmlCodeCollection = () => {
  const useObj = inject(USE_UML_CODE_COLLECTION)

  if (useObj) {
    return useObj
  } else {
    throw new Error('error injectUseUmlCodeCollection')
  }
}
