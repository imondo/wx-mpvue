<template>
  <view>
    <view @tap="scanCodeInfo">扫码</view>
    <view>{{codeInfo}}</view>
  </view>
</template>

<script>
  export default {
    name: 'scanCode',
    data: () => ({
      codeInfo: {}
    }),
    methods: {
      async scanCodeInfo () {
        let goods = await this.$handleScan()
        console.log(goods)
        this.codeInfo = goods.result
      }
    }
  }
</script>

<style scoped>

</style>
