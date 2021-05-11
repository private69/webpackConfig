import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '@/page/main/index.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: "hash",
    routes: [
        // 路由重定向
        {
            path: '/',
            redirect: '/main.html'
        },
        // 懒加载
        {
            path: '/main.html',
            // component: () =>import('@/page/main/index')
            component: main
        }
    ]
})
export default router