import publicRequest from './../../utils/publicRequest'
import sha256 from 'js-sha256'

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
    LoginState({commit}, loginForm) {
      const username = loginForm.username.trim();
      const password = sha256(loginForm.password.trim());
      return new Promise((resolve, reject) => {
        publicRequest.post({
          url: 'https://hebei.zbglxt.com/passport/login',
          isJson: false,
          hasToken: false,
          data: {
            username,
            password
          }
        }).then(res => {
          console.log(res);
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
