export type UmlCode = {
  id: string
  code: string
  imgs: string[]
  createdAt: number
  updatedAt: number
}

export const getDefaultUmlCode = (): UmlCode => ({
  id: '',
  code: '',
  imgs: [],
  createdAt: 0,
  updatedAt: 0
})
