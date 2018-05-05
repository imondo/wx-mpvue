import sha256 from 'crypto-js/sha256'
import handleUser from './../../api/user'
import handleToken from './../../utils/token'

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
    async LoginState({commit}, loginForm) {
      const username = loginForm.username.trim();
      const password = sha256(loginForm.password.trim());
      const token = await handleUser.login(username, password);
      commit('SET_TOKEN', token);
      handleToken.set({data: token});
      return token;
    }
  }
}

export default user
