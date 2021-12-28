export type UmlCode = {
  id: string
  code: string
  imgs: string[]
  createdAt: string
  updatedAt: string
}

export const getDefaultUmlCode = (): UmlCode => ({
  id: '',
  code: '',
  imgs: [],
  createdAt: '',
  updatedAt: ''
})
