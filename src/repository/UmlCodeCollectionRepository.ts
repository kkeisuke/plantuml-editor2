import { v4 } from 'uuid'
import { umlCodeRepository } from '@/repository/UmlCodeRepository'
import { UmlCode } from '@/entities/UmlCode'
import { getNow } from '@/lib/DateTimeFormat'

export const umlCodeCollectionRepository = {
  add(umlCode: UmlCode) {
    umlCode.id = v4()
    umlCode.createdAt = getNow()
    umlCode.updatedAt = getNow()
    return umlCodeRepository.table().add(umlCode)
  },
  fetch() {
    const order: keyof UmlCode = 'updatedAt'
    return umlCodeRepository.table().reverse().sortBy(order)
  }
}
