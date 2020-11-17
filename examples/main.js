import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import wxComponents from './../packages/index'
createApp(App).use(router).use(wxComponents).mount('#app')
