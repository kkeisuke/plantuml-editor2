import { describe, it, expect } from 'vitest'
import { convertToMd, parser } from '../../lib/UmlCodeConverter'

describe('UmlCodeParser', () => {
  describe('parser', () => {
    it('UMLが一つの場合', () => {
      const parsed = parser('# スタート\n\n@startuml\n\nテスト\n\n@enduml\n\n# エンド')
      expect(parsed.length).toBe(3)
      expect(parsed[0]).toBe('# スタート\n\n')
      expect(parsed[1]).toBe('@startuml\n\nテスト\n\n@enduml')
      expect(parsed[2]).toBe('\n\n# エンド')
    })
    it('UMLが複数の場合', () => {
      const parsed = parser('# スタート\n\n@startuml\n\nテスト\n\n@enduml\n\n# エンド\n\n@startuml\n\nテスト\n\n@enduml')
      expect(parsed.length).toBe(4)
      expect(parsed[0]).toBe('# スタート\n\n')
      expect(parsed[1]).toBe('@startuml\n\nテスト\n\n@enduml')
      expect(parsed[2]).toBe('\n\n# エンド\n\n')
      expect(parsed[3]).toBe('@startuml\n\nテスト\n\n@enduml')
    })
    it('UMLが連続する場合', () => {
      const parsed = parser('# スタート\n\n@startuml\n\nテスト\n\n@enduml\n\n\n\n@startuml\n\nテスト\n\n@enduml')
      expect(parsed.length).toBe(4)
      expect(parsed[0]).toBe('# スタート\n\n')
      expect(parsed[1]).toBe('@startuml\n\nテスト\n\n@enduml')
      expect(parsed[2]).toBe('\n\n\n\n')
      expect(parsed[3]).toBe('@startuml\n\nテスト\n\n@enduml')
    })
    it('@startuml がない場合', () => {
      const parsed = parser('# スタート\n\nテスト\n\n@enduml\n\n# エンド')
      expect(parsed.length).toBe(2)
      expect(parsed[0]).toBe('# スタート\n\nテスト\n\n@enduml')
      expect(parsed[1]).toBe('\n\n# エンド')
    })
    it('@enduml がない場合', () => {
      const parsed = parser('# スタート\n\n@startuml\n\nテスト\n\n# エンド')
      expect(parsed.length).toBe(2)
      expect(parsed[0]).toBe('# スタート\n\n')
      expect(parsed[1]).toBe('@startuml\n\nテスト\n\n# エンド')
    })
  })
  describe('convertToMd', () => {
    const uml = '@startuml\n\nobject テスト\n\n@enduml'
    const img = 'http://localhost/svg/SoWkIImgAStDuUBAJyfAJIvHUDpSzhXfv-Fc3YukXzIy5A0K0000'
    const encoded = `![](${img})`

    it('UMLが一つの場合', () => {
      const code = `# スタート\n\n${uml}\n\n# エンド`
      const { md, imgs } = convertToMd(code, { server: 'http://localhost' })
      expect(md).toBe(`# スタート\n\n${encoded}\n\n# エンド`)
      expect(imgs.length).toBe(1)
      expect(imgs[0]).toBe(img)
    })
    it('UMLが2つの場合', () => {
      const code = `# スタート\n\n${uml}\n\n# エンド\n\n${uml}`
      const { md, imgs } = convertToMd(code, { server: 'http://localhost' })
      expect(md).toBe(`# スタート\n\n${encoded}\n\n# エンド\n\n${encoded}`)
      expect(imgs.length).toBe(2)
      expect(imgs[0]).toBe(img)
      expect(imgs[1]).toBe(img)
    })
    it('@startuml がない場合', () => {
      const code = '# スタート\n\nテスト\n\n@enduml\n\n# エンド'
      const { md, imgs } = convertToMd(code, { server: 'http://localhost' })
      expect(md).toBe(code)
      expect(imgs.length).toBe(0)
      expect(imgs[0]).toBe(undefined)
    })
    it('@enduml がない場合', () => {
      const code = '# スタート\n\n@startuml\n\nテスト\n\n# エンド'
      const { md, imgs } = convertToMd(code, { server: 'http://localhost' })
      expect(md).toBe(code)
      expect(imgs.length).toBe(0)
      expect(imgs[0]).toBe(undefined)
    })
  })
})
