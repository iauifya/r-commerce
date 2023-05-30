//createRouter: 創建router實例對象
//createWebHistory: 創建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
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
                    path: 'category',
                    component: Category
                }
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router