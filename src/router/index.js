import Vue from 'vue'
import VueRouter from 'vue-router'
import Lobby from '../views/Lobby.vue'
import PreLobby from '../views/PreLobby.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'PreLobby',
    component: PreLobby
  },
  {
    path: '/Lobby',
    name: 'Lobby',
    component: Lobby
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router