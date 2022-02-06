import { computed, inject, type InjectionKey, provide, ref } from 'vue'

const useLayout = () => {
  const isShowMenu = ref(true)
  const isShowCheatSheet = ref(false)

  const showMenu = () => {
    isShowMenu.value = true
  }

  const hideMenu = () => {
    isShowMenu.value = false
  }

  const showCheatSheet = () => {
    isShowCheatSheet.value = true
  }

  const hideCheatSheet = () => {
    isShowCheatSheet.value = false
  }

  return {
    isShowMenu: computed(() => isShowMenu.value),
    isShowCheatSheet: computed(() => isShowCheatSheet.value),
    showMenu,
    hideMenu,
    showCheatSheet,
    hideCheatSheet
  }
}

const USE_LAYOUT: InjectionKey<ReturnType<typeof useLayout>> = Symbol('USE_LAYOUT')

export const provideUseLayout = () => {
  const useObj = useLayout()

  provide(USE_LAYOUT, useObj)

  return useObj
}

export const injectUseLayout = () => {
  const useObj = inject(USE_LAYOUT)

  if (useObj) {
    return useObj
  } else {
    throw new Error('error injectUseLayout')
  }
}
