//axios基礎的封裝
import axios from 'axios'

//可以有多組接口地址
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
// const httpInstance2 = axios.create({
//   baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima2.net',
//   timeout: 5000
// })

//攔截器

//axios請求攔截器
httpInstance.interceptors.request.use(config =>{
  return config
},e => Promise.reject(e))

//axios響應式攔截器
httpInstance.interceptors.response.use(res => res.data,e => {
  return Promise.reject(e)
})

export default httpInstance