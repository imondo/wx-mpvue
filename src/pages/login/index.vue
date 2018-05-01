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
    name: "login",
    data: () => ({
      loginForm: {
        username: 'admin',
        password: 'lyadmin123'
      }
    }),
    methods: {
      login() {
        console.log(this.loginForm)
        this.store.dispatch('LoginState', this.loginForm).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .login {

  }
</style>
