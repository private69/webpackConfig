import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/page/login/index.vue'
import person from '@/page/person/index.vue'

import project from '@/page/newGuide/list.vue'
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
            path: '/manage',
            name: 'manage',
            children: [
                {
                    path: 'project.html',
                    name: 'project',
                    component: project,
                }
            ]
        }
    ]
})
export default router