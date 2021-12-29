import { createApp } from 'vue'
import App from './App.vue'
import '@/plugin/Bootstrap/Bootstrap'
import { umlCodeRepository } from './repository/UmlCodeRepository'

// 初期化
umlCodeRepository.init()

createApp(App).mount('#app')
