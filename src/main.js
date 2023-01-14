import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import EmptyLayout from './components/templates/EmptyLayout.vue'
import MainLayout from './components/templates/MainLayout.vue'
createApp(App).use(store).use(router)
  .component('empty-layout', EmptyLayout)
  .component('main-layout', MainLayout)
  .mount('#app')

console.log('Hello World')
