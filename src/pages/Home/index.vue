<template>
  <div>
    <TypeNav />
    <ListContainer></ListContainer>
    <Recommend></Recommend>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
export default {
  name: 'Home',
  components:{
    ListContainer,
    Recommend
  }
}
</script>

<style lang="less" scoped>

</style>
