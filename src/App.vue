<script>
export default {
  // 只有 app 才会有 onLaunch 的生命周期
  onLaunch () {
    // ...
  },

  // 捕获 app error
  onError (err) {
    console.log(err)
  },
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
  @import "styles/weui.less";
  @import "styles/app.less";
  @import "styles/form.less";
</style>
