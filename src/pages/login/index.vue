<template>
  <div class="login-wrapper">
    <image class="login-bg" src="/static/images/login_bg.png"></image>
    <view class="login-form">
      <form class="form">
        <view class="form-group">
          <image src="/static/images/school.png"></image>
          <input class="form-control" v-model="loginForm.schoolName" @tap="bindViewTap" placeholder="请输入地区"/>
        </view>
        <view class="form-group">
          <image src="/static/images/user.png"></image>
          <input class="form-control" v-model="loginForm.username" placeholder="请输入用户名"/>
        </view>
        <view class="form-group">
          <image src="/static/images/lock.png"></image>
          <input class="form-control" v-model="loginForm.password" placeholder="请输入密码"/>
        </view>
        <view class="form-group">
          <button class="btn btn-primary" @tap="login">登录</button>
        </view>
      </form>
    </view>
    <view class="login-bottom">
      <div class="weui-footer">
        <div class="weui-footer__links">
          <navigator url="" class="weui-footer__link">底部链接</navigator>
        </div>
        <div class="weui-footer__text">Copyright © 2008-2018 weui.io</div>
      </div>
    </view>
  </div>
</template>

<script>
  export default {
    name: "login",
    data: () => ({
      loginForm: {
        username: 'admin',
        password: '123456'
      }
    }),
    methods: {
      async login() {
        this.$store.dispatch('LoginState', this.loginForm);
      },
      bindViewTap () {
        const url = '../location/main'
        wx.navigateTo({ url })
      },
    }
  }
</script>

<style lang="less" scoped>
  .login-wrapper {
    height: 100%;
    .login-bg {
      position: fixed;
      z-index: -1;
      width: 100%;
      height: 100%;
    }
    .login-form {
      display: flex;
      justify-content:center;
      align-items:center;
      width: 100%;
      height: 100%;
      color: #fff;
      .form {
        width: 100%;
        padding: 0 100rpx;
      }
      .form-group {
        flex-direction: column;
        align-items: center;
        width: 100%;
        &:not(:last-child) {
          border-bottom: 1rpx solid #a1a1a1;
        }
        &:last-child {
          margin-top: 50rpx;
        }
      }
      .form-control {
        padding: 12rpx;
      }
      .btn-primary {
        color: #fff;
        background-color: #2574a9;
      }
      image {
        width: 50rpx;
        height: 50rpx;
        padding: 12rpx;
      }
    }
    .login-bottom {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
    }
  }
</style>
