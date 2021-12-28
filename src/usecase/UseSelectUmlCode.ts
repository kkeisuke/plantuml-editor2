import { UmlCode } from '@/entities/UmlCode'
import { injectUseUmlCodeCollection } from '@/store/UseUmlCodeCollection'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'

export const useSelectUmlCode = () => {
  const { fetch } = injectUseUmlCodeCollection()
  const { read, destroy, getCode, renderHtml } = injectUseUmlCodeSingle()

  const selectUmlCode = async (id: UmlCode['id']) => {
    await read(id)
    await renderHtml(getCode())
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
