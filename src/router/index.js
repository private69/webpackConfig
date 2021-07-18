import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/page/login/index.vue'
import person from '@/page/person/index.vue'
import three from './three/index'

import project from '../page/newGuide/list.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: "hash",
    routes: [
        // 路由重定向
        {
            path: '/',
            redirect: '/login.html'
        },
        // 懒加载
        {
            path: '/login.html',
            // component: () =>import('@/page/login/index')
            component: login
        },
        {
            path: '/person.html',
            name: 'person',
            component: person,
        },
        {
            path: "/antd_table.html",
            name: "antd_table",
            component: () => import('@/page/antdTable/index.vue')
        },
        {
            path: "/three",
            name: "three",
            component: () => import('@/page/three/primaryUse/index.vue'),
            children: [
                {
                    path: '/three/first-know.html',
                    name: 'first-know.html',
                    component: () => import('@/page/three/primaryUse/index.vue')
                }
            ]
        }
    ]
})
export default router