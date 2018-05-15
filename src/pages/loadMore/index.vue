<template>
  <view class="load-more">
    <view class="section__title">vertical scroll</view>
    <scroll-view class="section-scroll" scroll-y :style="{height: scrollHeight}" lower-threshold="150" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-top="scrollTop">
      <view class="scroll-view-item bc_green" v-for="(item, index) in list" :key="index">{{item.title}}</view>
      <view class="loading" :class="{hidden: isHidden}">加载中...</view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data: () => ({
      list: [],
      scrollHeight: 0,
      scrollTop: 0,
      isHidden: false
    }),
    onLoad () {
      wx.getSystemInfo({
        success: (res) => {
          this.scrollHeight = (res.windowHeight - 19) + 'px';
        }
      });
      this.getList();
    },
    methods: {
      upper () {
        console.log(555)
      },
      lower () {
        console.log(888)
        this.isHidden = true
        this.getList()
      },
      scroll (e) {
        // this.scrollTop = e.mp.detail.scrollTop
      },
      async getList () {
        let list = await this.$http.get({
          url: `http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b`,
          hasToken: false,
          isLoading: false
        })
        this.list.push(...list.ranking.books);
        this.isHidden = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .load-more {
    height: 100%;
  }
</style>
