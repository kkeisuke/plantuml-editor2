import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

const defaultOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
  automaticLayout: true,
  minimap: {
    enabled: false
  },
  language: 'apex',
  theme: 'vs-dark'
}

export const createEditor = (editor: HTMLElement, options: typeof defaultOptions) => {
  // https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-vite
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.MonacoEnvironment = {
    getWorker() {
      return new editorWorker()
    }
  }
  return monaco.editor.create(editor, { ...defaultOptions, ...options })
}

export const KeyCode = monaco.KeyCode
export const KeyMod = monaco.KeyMod
