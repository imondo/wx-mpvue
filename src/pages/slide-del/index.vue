<template>
  <view>
    <view class="item" v-for="(item, index) in arrDatas" :key="item">
        <span class="item-content" :data-index="index" @touchstart="touchStart" @touchmove="touchMove" :class="{'delete-active': countIndex === index, 'handle-confim': confimIndex === index}">
        {{item}}
        </span>
      <span class="icon delete" :data-index="index" :class="{'delete-index': confimIndex === index}" @tap="deleteConfim">删除</span>
      <span class="icon handle-delete" :class="{'delete-index': confimIndex === index}" @tap="handleDelete">确认删除</span>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'deleteItem',
    data: () => ({
      arrDatas: [1, 2, 3],
      countIndex: -1,
      confimIndex: -1,
      isDelate: false,
      isConfim: false,
      clientX: 0
    }),
    created () {
      console.log(typeof this.index, this.index)
    },
    methods: {
      touchStart (e) {
        this.clientX = e.clientX
      },
      touchMove (e) {
        let moveX = e.clientX
        let x = moveX - this.clientX
        let _index = e.target.dataset.index
        // left
        if (x <= -40) {
          this.countIndex = _index
          this.confimIndex = -1
        }
        // right
        if (x > 40) {
          this.confimIndex = -1
          this.countIndex = -1
        }
      },
      deleteConfim (e) {
        let _index = e.target.dataset.index
        this.confimIndex = _index
      },
      handleDelete () {
        console.log(222)
        this.$emit('handleDel')
      }
    }
  }
</script>

<style lang="less" scoped>
  .item {
    position: relative;
    display: flex;
    width: 100%;
    height: 100rpx;
    align-items: center;
    border-bottom: 1rpx solid #ccc;
    .item-content {
      display: inline-block;
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
