<template>
  <view class="demo-wrapper">
    <load-more @loadMore="loadMore">
      <view slot="content">
        <!--<view class="scroll-view-item bc_green" v-for="(item, index) in list" :key="index"></view>-->
        <view v-for="(item, index) in list" :key="item._id">
          <delete-item :index="index" :item="item">
            <!--<view slot="items">-->
              <!--<span>aaa</span> {{item.title}}-->
            <!--</view>-->
          </delete-item>
        </view>
      </view>
    </load-more>
  </view>
</template>

<script>
  import LoadMore from './../../components/LoadMore/index'
  import DeleteItem from './../../components/DeleteItem/index'

  export default {
    components: {
      LoadMore,
      DeleteItem
    },
    data: () => ({
      list: []
    }),
    onLoad () {
      this.getList()
    },
    methods: {
      async getList () {
        let list = await this.$http.get({
          url: `http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b`,
          hasToken: false,
          isLoading: false
        })
        this.list.push(...list.ranking.books);
        this.isHidden = false
      },
      loadMore () {
        this.getList()
      }
    }
  }
</script>

<style scoped>

</style>
