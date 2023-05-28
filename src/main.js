import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

//測試接口函數
import { getCategory } from '@/apis/testAPI'
getCategory().then(res =>{
  console.log(res)
})

createApp(App).use(router).mount('#app')
