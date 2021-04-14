import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home,
    // meta: { layout: 'main' },
    redirect: '/quiz',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: { layout: 'empty' }
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import(/* webpackChunkName: "quiz" */ '../views/Quiz.vue'),
    meta: { layout: 'main' }
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import(/* webpackChunkName: "messages" */ '../views/Messages.vue'),
    meta: { layout: 'main' }
  },
  {
    path: '/unread',
    // name: 'Unread',
    // component: () => import(/* webpackChunkName: "unread" */ '../views/Unread.vue'),
    // meta: { layout: 'main' },
    redirect: '/quiz',
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
    meta: { layout: 'main' }
  },
  {
    path: '*',
    redirect: '/404',
    meta: { layout: 'main' }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  if (currentUser === null && to.path !== '/login') {
    next('/login')
    console.log("Для начала нужно войти в систему")
  } else {
    next()
  }
})

export default router
