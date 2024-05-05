import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChatView from '@/views/ChatView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AuthView.vue')
  },

  {
    path : '/chat',
    name : 'chat',
    component : ChatView
  },
  {
    path: '/all-businesses',
    name: 'all-businesses',
    component: () => import('@/views/AllBusinessesView.vue')
  },
  {
    path: '/business/:id',
    name: 'business',
    component: () => import('@/views/BusinessView.vue')
  },
  {
    path: '/business/edit',
    name: 'business-edit',
    component: () => import('@/views/BusinessSetupView.vue')
  },
  {
    path: '/business/booking/:id',
    name: 'booking',
    component: () => import('@/views/BookingView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
