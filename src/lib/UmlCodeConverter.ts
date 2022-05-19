import { encode } from 'plantuml-encoder'

const startuml = ['@startuml', '@startmindmap', '@startditaa', '@startgantt', '@startwbs', '@startjson', '@startyaml']
const enduml = ['@enduml', '@endmindmap', '@endditaa', '@endgantt', '@endwbs', '@endjson', '@endyaml']

export const parser = (code: string) => {
  const lines = code.split('\n')
  const separated = ['']

  lines.forEach((line, i) => {
    if (startuml.includes(line)) {
      separated.push(line + '\n')
    } else {
      separated[separated.length - 1] += line
      // 最終行には \n を追加しない
      if (i !== lines.length - 1) {
        if (enduml.includes(line)) {
          separated.push('\n')
        } else {
          separated[separated.length - 1] += '\n'
        }
      }
    }
  })

  return separated
}

export type ConvertOptions = {
  server: string
  ext?: string
}

export const createUmlTag = (uml: string) => {
  return `<div class="uml"><object type="image/svg+xml" data="${uml}"></object></div>`
}

export const convertToMd = (code: string, { server, ext = 'svg' }: ConvertOptions) => {
  const parserd = parser(code)
  const imgs: string[] = []
  const markdowns = parserd.map((md) => {
    const hasStart = startuml.find((start) => md.indexOf(start) === 0) !== undefined
    const hasEnd = enduml.find((end) => new RegExp(`${end}$`).test(md)) !== undefined
    if (hasStart && hasEnd) {
      const encoded = encode(md)
      const uml = `${server}/${ext}/${encoded}`
      imgs.push(uml)
      return createUmlTag(uml)
    }
    return md
  })

  return {
    md: markdowns.join(''),
    imgs
  }
}
