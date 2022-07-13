import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/pages/home/Home.vue"
import Video from "@/pages/video/video.vue"
import Groups from "@/pages/groups/Groups.vue"
import Shop from "@/pages/shop/Shop.vue"
import Personal from "@/pages/personal/Personal.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/video',
    name: 'Video',
    component: Video
  }, {
    path: '/groups',
    name: 'Groups',
    component: Groups
  }, {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }, {
    path: '/personal',
    name: 'Personal',
    component: Personal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
