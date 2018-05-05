class handleToken {
  static async set ({data}) {
    wx.setStorage({
      key: 'TokenInfo',
      data
    })
  }
  static async get () {
    let token = null;
    wx.getStorage({
      key: 'TokenInfo',
      success: res => {
        token = res.data;
      }
    });
    return token;
  }

  static async clear () {
    return wx.removeStorage('TokenInfo');
  }
}

export default handleToken;
