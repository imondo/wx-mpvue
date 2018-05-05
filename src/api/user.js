import publicRequest from './../utils/publicRequest'

class handleUser {
  static async login(username, password) {
    const state = publicRequest.post({
      url: 'http://test.ems.com/iportalpassport/auth/password/token',
      isJson: false,
      hasToken: false,
      data: {
        username,
        password,
        clientId: 'iportal_client'
      }
    })
    return state;
  }
}

export default handleUser;
