import activityTemplate from '@/assets/templates/activity.plantuml?raw'
import activitybTemplate from '@/assets/templates/activityb.plantuml?raw'
import classTemplate from '@/assets/templates/class.plantuml?raw'
import erTemplate from '@/assets/templates/er.plantuml?raw'
import objectTemplate from '@/assets/templates/object.plantuml?raw'
import sequenceTemplate from '@/assets/templates/sequence.plantuml?raw'
import usecaseTemplate from '@/assets/templates/sequence.plantuml?raw'

import { injectUseUmlCodeCollection } from '@/store/UseUmlCodeCollection'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'

const templates = {
  activityTemplate,
  activitybTemplate,
  classTemplate,
  erTemplate,
  objectTemplate,
  sequenceTemplate,
  usecaseTemplate
}

export const useAddUmlCode = () => {
  const { add, fetch } = injectUseUmlCodeCollection()
  const { read, getCode, renderHtml } = injectUseUmlCodeSingle()

  const addNewUmlCOde = async (temp: keyof typeof templates) => {
    const id = await add(templates[temp])
    await read(id)
    await renderHtml(getCode())
    await fetch()
  }

  return {
    addNewUmlCOde
  }
}
