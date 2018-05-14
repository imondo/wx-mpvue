<template>
	<div>下拉</div>
</template>

<script>
	export default {
		created () {
			console.log(33)
		},
		onLoad () {
			console.log(111)
		},
		onPullDownRefresh () {
      wx.stopPullDownRefresh()
		}
	}
</script>

<style lang="less" scoped>
</style>
