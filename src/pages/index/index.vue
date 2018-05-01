<template>
  <div class="container">
    首页
    {{userInfo}}
  </div>
</template>

<script>

export default {
  data () {
    return {
      userInfo: {}
    }
  },

 methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {

              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    handleToast () {
      this.$totast.confirm({content: 'hehe', callback: (res) => {
          console.log(res);
          this.publicRequest.get({url: '/api/classes/article'}).then(res => {
            console.log(res);
          })
        }})
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()

  }
}
</script>

<style scoped>

</style>
