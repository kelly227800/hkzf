import Vue from 'vue'
import Vuex from 'vuex'
const location = require('location_storage')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: location.getToken() || {}
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload
      location.setToken(payload)
    }
  },
  actions: {},
  modules: {}
})
