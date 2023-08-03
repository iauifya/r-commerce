//createRouter: 創建router實例對象
//createWebHistory: 創建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/Category/SubPage.vue'
import Goods from '@/views/Goods/index.vue'
import Details from '@/views/Details/index.vue'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            component: Layout,
            children: [{
                    path: '',
                    component: Home
                },
                {
                    path: 'category/:id',
                    component: Category
                },
                {
                    path: "/category/sub/:id",
                    component: SubCategory
                },
                {
                    path: 'goods/:id',
                    component: Goods
                },
                {
                    path: 'details/:id',
                    component: Details
                },
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ],
    //路由滾動行為定置
    scrollBehavior(){
        return { top: 0}
    }
})

export default router