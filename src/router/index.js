import Vue from 'vue'
import VueRouter from 'vue-router'
import Lobby from '../views/Lobby.vue'
import Room from '../views/Room.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/Room',
    name: 'Room',
    component: Room
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router