import { getCurrentInstance, onMounted } from 'vue'
import { setupTooltip } from '@/plugin/Bootstrap/Tooltip'
import { copyInnerText } from '@/lib/clipboard'

export const useCopyable = () => {
  onMounted(() => {
    const instance = getCurrentInstance()
    setupTooltip(instance?.proxy?.$el, { trigger: 'focus' })
  })

  return {
    copy: copyInnerText
  }
}
