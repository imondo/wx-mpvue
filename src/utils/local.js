class handleStorage {
  static async set ({key, data}) {
    wx.setStorage({
      key,
      data
    })
  }
  static async get ({key}) {
    return new Promise(resolve => {
      wx.getStorage({
        key,
        success: res => {
          resolve(res.data)
        },
        complete: res => {
          resolve(res)
        }
      })
    })
  }
  static async clear (key) {
    wx.removeStorage({
      key,
      success: res => {
        console.log(res.data)
      }
    })
  }
}

export default handleStorage
