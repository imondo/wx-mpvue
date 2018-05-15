<template>
	<div>
    <div v-for="item in list" :key="item.id">{{item.title}}</div>
  </div>
</template>

<script>
	export default {
	  data: () => ({
      list: []
    }),
		created () {
			console.log(33)
		},
		onLoad () {
			console.log(111)
      this.getList({});
		},
    methods: {
		  async getList ({pageSize = 9}) {
        let list = await this.$http.get({
          url: `http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b`,
          hasToken: false
        })
        console.log(list)
        this.list = list.ranking.books;
      }
    },
		async onPullDownRefresh () {
      this.$pullDownRefresh({callback: this.getList({pageSize: 15})})
		}
	}
</script>

<style lang="less" scoped>
</style>
