<template>
  <div class="login">
    <form>
      <view class="form-group">
        <label>用户名:</label>
        <input class="form-control" v-model="loginForm.username" placeholder="请输入用户名" auto-focus/>
      </view>
      <view class="form-group">
        <label>密码:</label>
        <input class="form-control" v-model="loginForm.password" placeholder="请输入密码"/>
      </view>
      <view class="section">
        <button class="btn" @tap="login">登录</button>
      </view>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data: () => ({
      loginForm: {
        username: 'admin',
        password: 'admin123'
      }
    }),
    created () {
      console.log(88)
    },
    methods: {
      async login () {
        let user = await this.$store.dispatch('Login', this.loginForm)
        console.log(user)
        wx.navigateTo({url: '../cancode/main'})
      }
    }
  }
</script>

<style scoped>
  .login {

  }
</style>
