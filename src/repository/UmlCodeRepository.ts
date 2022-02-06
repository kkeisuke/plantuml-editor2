import Dexie from 'dexie'
import type { UmlCode } from '@/entities/UmlCode'

const umlCode: Record<keyof UmlCode, string> = {
  id: '&', // primary key
  code: '',
  imgs: '*', // array
  createdAt: '',
  updatedAt: ''
}
const ver = 1
const DBName = 'UmlCode'
const tableName = 'umlCode'
const db = new Dexie(DBName)

export const umlCodeRepository = {
  init() {
    const schema = {
      [tableName]: (Object.keys(umlCode) as Array<keyof UmlCode>).map((key) => umlCode[key] + key).join(',')
    }
    db.version(ver).stores(schema)
  },
  table() {
    return db.table<UmlCode, string>(tableName)
  }
}
