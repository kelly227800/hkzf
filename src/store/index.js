import Vue from 'vue'
import Vuex from 'vuex'
const location = require('location_storage')
// console.log(location)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: location.getToken() || {}
  },
  getters: {},
  mutations: {
    setUser(state1, payload) {
      state1.user = payload
      location.setToken(payload)
    }
  },
  actions: {},
  modules: {}
})
