const user = {
  state: {
    token: null,
    userInfo: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, info) => {
      state.userInfo = info
    }
  },
  actions: {
    async Login ({commit}, loginForm) {
      commit('SET_USER_INFO', loginForm)
      return loginForm
    }
  }
}

export default user
