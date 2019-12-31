import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/LoginContainer.vue'
import ChatRoom from '../views/ChatRoom.vue'
import RoomChooser from '../views/RoomChooser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/chat-room',
    name: 'chatroom',
    component: ChatRoom
  },
  {
    path: '/choose-a-room',
    name: 'choosearoom',
    component: RoomChooser
  }
]

const router = new VueRouter({
  routes
})

export default router
