<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>

    <Child aaa="bbb" :xxx="'zzz'" mmm="nnn"  @heihei="haha" @hehe="haha"></Child>

    <el-button type="primary" size="mini" icon="el-icon-plus" @click="handle"></el-button>
    <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
    <el-button type="warning" size="mini" icon="el-icon-edit" @dblclick.native="handle"></el-button>


    <HintButton type="primary" size="mini" icon="el-icon-plus" title="增加" @hehe="haha"></HintButton>
    <HintButton type="danger" size="mini" icon="el-icon-delete" title="删除"></HintButton>
    <HintButton type="warning" size="mini" icon="el-icon-edit" title="修改"></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from '@/pages/Communication/AttrsListenersTest/Child'
import HintButton from '@/pages/Communication/AttrsListenersTest/HintButton'
  export default {
    name: 'AttrsListenersTest',
    components:{
      Child,
      HintButton
    },

    methods: {
      haha(){

      },
      handle(){
        alert(111)
      }
    },
  }
</script>
