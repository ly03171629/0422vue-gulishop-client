<template>
  <div>
    孩子{{aaa}}
    </div>

</template>

<script>
export default {
  name: 'Child',
  props:['aaa','xxx'],
  mounted(){
    console.log(this.$attrs,this.$listeners)
  }
}
</script>

<style lang="less" scoped>

</style>
