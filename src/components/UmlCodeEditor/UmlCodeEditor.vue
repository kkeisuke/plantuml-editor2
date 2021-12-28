<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { createEditor, KeyCode, KeyMod } from '@/plugin/MonacoEditor'
import { injectUseUmlCodeSingle } from '@/store/UseUmlCodeSingle'

const { umlCode, getCode, readCache, update, setCurrentHtml, renderHtml } = injectUseUmlCodeSingle()
const CLASS_NAME = 'UmlCodeEditor'

onMounted(async () => {
  // 初回読み込み
  await readCache()

  const editorElm = document.querySelector<HTMLElement>(`.${CLASS_NAME}`)

  if (!editorElm) {
    return
  }

  const editor = createEditor(editorElm, {
    value: getCode()
  })
  editor.onDidChangeModelContent(async (event) => {
    !event.isFlush && (await update(editor.getValue()))
  })
  editor.addCommand(KeyMod.CtrlCmd | KeyCode.Enter, async () => {
    await renderHtml(editor.getValue())
  })
  editor.addCommand(KeyMod.WinCtrl | KeyCode.Enter, async () => {
    await renderHtml(editor.getValue())
  })

  watch(
    () => umlCode.value.id,
    (id) => {
      if (id) {
        editor.setValue(getCode())
      } else {
        editor.setValue('')
      }
    }
  )

  // 初回描画
  await setCurrentHtml()
})
</script>

<template>
  <div :class="[CLASS_NAME]" class="overflow-hidden" />
</template>
