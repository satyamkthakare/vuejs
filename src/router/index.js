import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import jobDetails from '@/components/job-details'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/job-details',
      name: 'jobDetails',
      component: jobDetails
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: details
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
