<template>
    <view>
      <view v-for="(item, index) in orgList " :key="index">
        {{item.name}}
      </view>
    </view>
</template>

<script>
  export default {
    name: 'Location',
    data: () => ({
      orgList: [{name: 'aaa'}]
    }),
    async onLoad() {
      let orgList = await this.$store.dispatch('GetApi');
      console.log(orgList);
    }
  }
</script>

<style scoped>

</style>
