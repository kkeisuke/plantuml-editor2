import { umlCodeRepository } from '@/repository/UmlCodeRepository'
import { UmlCode } from '@/entities/UmlCode'

export const umlCodeSingleRepository = {
  async read(id: UmlCode['id']) {
    if (!id) {
      throw new Error('empty id')
    }
    const umlCode = await umlCodeRepository.table().get(id)
    if (!umlCode) {
      throw new Error('not found umlCode')
    }
    return umlCode
  },
  async update(umlCode: UmlCode) {
    if (!umlCode.id) {
      throw new Error('empty id')
    }
    umlCode.updatedAt = Date.now()
    const result = await umlCodeRepository.table().update(umlCode.id, umlCode)
    if (!result) {
      throw new Error('error update')
    }
    return umlCode
  },
  async delete(id: UmlCode['id']) {
    if (!id) {
      throw new Error('empty id')
    }
    try {
      await umlCodeRepository.table().delete(id)
      return id
    } catch (error) {
      throw new Error('error delete')
    }
  }
}
