// 全局 CSS 文件

import './mocks/index'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
createApp(App).use(createPinia()).use(router).mount('#app')
