<template>
  <view class="slide-wrapper">
    {{list.length}}
    <view class="item" v-for="(item, index) in list" :key="item._id">
        <span class="item-content" :data-index="index" @touchstart="touchStart" @touchmove="touchMove" :class="{'delete-active': countIndex === index, 'handle-confim': confimIndex === index}">
        {{item.title}}
        </span>
      <span class="icon delete" :data-index="index" :class="{'delete-index': confimIndex === index}" @tap="deleteConfim">删除</span>
      <span class="icon handle-delete" :class="{'delete-index': confimIndex === index}" @tap="handleDelete">确认删除</span>
    </view>
  </view>
</template>

<script>
  import slideDelMixins from './../../mixins/slide-del-mixins'

  export default {
    name: 'deleteItem',
    mixins: [slideDelMixins],
    data: () => ({
      list: []
    }),
    onLoad () {
      this.getList();
    },
    methods: {
      async getList () {
        let list = await this.$http.get({
          url: `http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b`,
          hasToken: false
        })
        this.list = list.ranking.books;
      },
      handleDelete (e) {
        // wx.navigateTo({url: '../pullDownRefresh/main'})
        console.log(e, this.confimIndex);
        this.list.splice(this.confimIndex, 1); // 删除数据
        this.confimIndex = -1;
        this.countIndex = -1;
      }

    },
    async onPullDownRefresh () {
      this.$pullDownRefresh({callback: this.getList()})
    }
  }
</script>

<style lang="less" scoped>
  .slide-wrapper {
    overflow: hidden;
  }
  .item {
    position: relative;
    display: flex;
    width: 100%;
    height: 100rpx;
    align-items: center;
    border-bottom: 1rpx solid #ccc;
    .item-content {
      display: flex;
      align-items: center;
      padding-left: 20rpx;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      background-color: #fff;
      transition: .3s;
      transform: translateX(0);
      &.delete-active {
        transform: translateX(-100rpx);
      }
      &.handle-confim {
        transform: translateX(-200rpx);
      }
    }
    .icon {
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0;
      background-color: red;
      color: #fff;
      text-align: center;
    }
    .delete {
      width: 100rpx;
      height: 100rpx;
      &.delete-index {
        z-index: -2;
      }
    }
    .handle-delete {
      z-index: -1;
      width: 200rpx;
      height: 100rpx;
      &.delete-index {
        z-index: 0;
      }
    }
  }
</style>
