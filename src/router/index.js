import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import member from '@/components/member'
import personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'member',
      component: member
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    }
  ]
})
