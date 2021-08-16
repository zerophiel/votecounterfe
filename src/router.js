
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import ('@/views/Home'),
        },
        {
            path: '/scoreboard',
            name: 'Scoreboard',
            component: () => import('@/views/Scoreboard')
        },
        {
            path: '/form',
            name: 'Form',
            component: () => import('@/views/Form')
        },
        {
            path: '*',
            name: 'PageNotFound',
            component: () => import('@/views/PageNotFound')
        }
    ]
})