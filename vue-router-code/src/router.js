import Vue from 'vue'
import VueRouter from 'vue-router'
import foo from '@/views/foo'
import home from '@/views/home'
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/foo',
            component: foo
        }
    ]
})
export default router
