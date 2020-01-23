import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const colors = ["#b0e6ff", "#ffc2c2", "#ffdac2", "#ffefc2", "#edf0ad", "#e0f2aa", "#d2f7ad", "#d1ffc4", "#c3fad3", "#c3e7fa", "#c8d7fa", "#d3d1ff", "#e2d1ff", "#f0d1ff", "#fbdcfc", "#fcdcf2"]

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    room: { name: "WorldChat", id: "1", capacity: 40 } 
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    setRoom (state, room) {
      state.room = room
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      if (user != null) {
        user.color = colors[Math.floor(Math.random() * colors.length)]
      }
    commit('setUser', user)
    },
    setRoom({commit}, room) {
      commit('setRoom', room)
    }
  }
})
