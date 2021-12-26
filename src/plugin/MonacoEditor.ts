// https://github.com/microsoft/monaco-editor/blob/main/docs/integrate-esm.md#using-vite
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

export const createEditor = (editor: HTMLElement, options: monaco.editor.IStandaloneEditorConstructionOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.MonacoEnvironment = {
    getWorker() {
      return new editorWorker()
    }
  }

  // const editor = document.querySelector<HTMLElement>('.editor')
  monaco.editor.create(editor, {
    language: 'apex',
    theme: 'vs-dark',
    ...options
  })
}
