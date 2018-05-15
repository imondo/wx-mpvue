const pullDownRefresh = async function ({navLoading = true, callback}) {
  navLoading && wx.showNavigationBarLoading() // 在标题栏中显示加载
  // 业务代码
  await callback;
  navLoading && wx.hideNavigationBarLoading() // 完成停止加载
  wx.stopPullDownRefresh() // 停止下拉刷新
}

export default pullDownRefresh
