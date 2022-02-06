import type { UmlCode } from '@/entities/UmlCode'
import { injectUseUmlCodeCollection } from '@/store/UseUmlCodeCollection'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'

export const useSelectUmlCode = () => {
  const { fetch } = injectUseUmlCodeCollection()
  const { read, destroy, setCurrentHtml } = injectUseUmlCodeSingle()

  const selectUmlCode = async (id: UmlCode['id']) => {
    await read(id)
    await setCurrentHtml()
  }

  const deleteUmlCode = async (umlCode: UmlCode) => {
    await destroy(umlCode)
    await fetch()
  }

  return {
    selectUmlCode,
    deleteUmlCode
  }
}
