const pullDownRefresh = function () {
	return new Promise((resolve, reject) => {
    wx.startPullDownRefresh({
      success: res => {
        resolve(res)
      },
      fail: res => {
        reject(res)
      },
      complete: () => {
        wx.stopPullDownRefresh()
      }
    })
  })
}

export default pullDownRefresh
