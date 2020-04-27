import Vue from 'vue'
import VueRouter from 'vue-router'
import Dataportal_v1_0 from '../views/Dataportal_v1_0.vue'
import Access from '../views/Access.vue'
import Api from '../views/api.vue'
import Cloud from '../views/cloud.vue'
import Docker from '../views/docker.vue'
import Cicd from '../views/cicd.vue'
import Flask_api from '../views/flask_api.vue'
import Dataportal_interface from '../views/dataportal_interface.vue'

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
  {
    path: '/api',
    name: 'api',
    component: Api
  },
  {
    path: '/cloud',
    name: 'cloud',
    component: Cloud
  },
  {
    path: '/docker',
    name: 'docker',
    component: Docker
  },
  {
    path: '/cicd',
    name: 'cicd',
    component: Cicd
  },
  {
    path: '/flask_api',
    name: 'flask_api',
    component: Flask_api
  },
  {
    path: '/dataportal_interface',
    name: 'dataportal_interface',
    component: Dataportal_interface
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
