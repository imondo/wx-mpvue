const handleScan = function () {
  return new Promise((resolve, reject) => {
    wx.scanCode({
      success: (res) => {
        console.log(res)
        resolve(res)
      },
      fail: error => {
        reject(error)
      }
    })
  })
}

export default handleScan
