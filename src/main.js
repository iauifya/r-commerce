import './assets/main.css'
import router from './router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

// import "@/styles/common.less";

const pinia = createPinia()

//測試接口函數
// import { getCategoryAPI } from '@/apis/testAPI'
// getCategoryAPI().then(res => {
//     console.log(res)
// })


createApp(App).use(router).use(pinia).mount('#app')