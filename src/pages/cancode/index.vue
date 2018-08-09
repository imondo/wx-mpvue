<template>
  <view class="scan-wrapper">
    <view @tap="scanCodeInfo">
      <span class="icon icon-saoyisao"></span>
    </view>
    <view>
      <span class="icon icon-hebingxingzhuang" @tap="navTo"></span>
      <p v-for="(vlaue, key) in codeInfo" :key="key">{{key}}: {{vlaue}}</p>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'scanCode',
    data: () => ({
      codeInfo: {
        
      }
    }),
    methods: {
      async scanCodeInfo () {
        let goods = await this.$handleScan()
        console.log(goods)
        this.codeInfo = goods.result
      },
      navTo () {
        wx.navigateTo({url: '../slideDel/main'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .scan-wrapper {
    text-align: center;
    height: 100%;
    .icon {
      font-size: 60rpx;
    }
  }
</style>
