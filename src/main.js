import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

// import ErabbitUI from 'erabbit-ui'
// import 'erabbit-ui/packages/theme/index.less'

//測試接口函數
import { getCategory } from '@/apis/testAPI'
getCategory().then(res => {
    console.log(res)
})


createApp(App).use(router).mount('#app')