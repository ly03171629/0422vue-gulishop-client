<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 一 -->
    <!-- 原生的dom事件添加给html标签就是原生的 -->
    <button @click="test1">test1</button>
    <!-- 原生的dom事件添加给组件标签不再是原生的事件，而是自定义事件，如果让它成为原生dom事件
    需要添加操作符，这个事件添加给了组件标签内部的根元素 -->
    <Event1 @click.native="test2"></Event1>

      <br>
      <br>
      <br>

    <!-- 二 -->
    <!-- 对原生的html标签添加自定义事件没有任何意义，没办法触发 -->
    <!-- <button @heihei="test3">test3</button> -->

    <!-- <Event2 @heihei="test3"></Event2> -->
    <!-- 对组件标签添加一个和原生dom事件同名的事件，但是它不是原生dom，而是自定义事件 -->
    <Event2 @click="test4"></Event2>

  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";

export default {
  name: "EventTest",

  components: {
    Event1,
    Event2,
  },

  methods: {
    test1(event) {
      console.log(event.target.innerHTML)
    },
    test2(event){
      console.log(event.target.innerHTML)
    },
    test3(event){
      console.log(event)
    },
    test4(event){
      console.log(event)
    }
  },
};
</script>
