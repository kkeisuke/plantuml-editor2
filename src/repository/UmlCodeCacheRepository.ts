import { UmlCode } from '@/entities/UmlCode'

const CASH_UML_CODE_ID = 'CASH_UML_CODE_ID'

export const umlCodeCacheRepository = {
  fetch() {
    return window.localStorage.getItem(CASH_UML_CODE_ID) || ''
  },
  save(id: UmlCode['id']) {
    window.localStorage.setItem(CASH_UML_CODE_ID, id)
  },
  reset() {
    window.localStorage.setItem(CASH_UML_CODE_ID, '')
  }
}
