import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import config from './modules/config'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    config
  }
})

export default store
