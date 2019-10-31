import Vue from 'vue'
import Router from 'vue-router'

const routes = [{
  path: '',
  name: '',
  component: () => import(''),
  // redirect: '',
  // meta: {},
  // children: [{
    // path: '',
    // name: '',
    // component: () => import('')
  // }]
}]

Vue.use(Router)

export default new Router({
  routes
})