export default [
    {
        path: "/three",
        name: "three",
        // component: () => import('@/page/antdTable/index.vue')
        children: [
            {
                path: '/three/first-know.html',
                name: 'first-know.html',
                component: () => import('@/page/three/primaryUse/index.vue')
            }
        ]
    }
]