<template>
  <a href="javascript:;" :title="title">
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>

<script>
export default {
  name: '',
  props:['title']
}
</script>

<style lang="less" scoped>

</style>
