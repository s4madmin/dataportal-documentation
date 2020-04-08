import Vue from 'vue'
import VueRouter from 'vue-router'
import Dataportal_v1_0 from '../views/Dataportal_v1_0.vue'
import Access from '../views/Access.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dataportal_v1.0',
    component: Dataportal_v1_0
  },
  {
    path: '/access',
    name: 'access',
    component: Access
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
