<template>
  <view class="load-more-wrapper">
    <view class="section__title">vertical scroll</view>
    <scroll-view class="section-scroll" scroll-y enable-back-to-top="true" :style="{height: scrollHeight}" lower-threshold="150" @scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll" :scroll-top="scrollTop">
      <slot name="content"></slot>
      <view class="loading" :class="{hidden: isHidden}">加载中...</view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name: 'LoadMore',
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
      // this.getList();
    },
    methods: {
      upper () {
        console.log(555)
      },
      lower () {
        console.log(888)
        this.isHidden = true
        this.$emit('loadMore')
        // this.getList()
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

<style scoped>

</style>
