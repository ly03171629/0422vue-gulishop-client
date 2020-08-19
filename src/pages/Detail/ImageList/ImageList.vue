<template>
  <div class="swiper-container" ref="imgList">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in imgList" :key="img.id">
        <img
          :src="img.imgUrl"
          :class="{active:index === defaultIndex}"
          @click="changeDefaultIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  props: ["imgList"],
  data() {
    return {
      defaultIndex: 0, //默认的下标（带橙色的框框）
    };
  },
  methods: {
    changeDefaultIndex(index) {
      this.defaultIndex = index;
      this.$bus.$emit("changeDefaultIndex", index);
    },
  },
  watch: {
    // bannerList(newVal,oldVal){
    // }
    imgList: {
      immediate: true, //immediate立即的意思
      //监视数据如果有了数据就去实例化swiper  但是
      //监视有数据实例化的时候太快了,上面的结构也不一定形成（for）
      // watch + nextTick
      // nextTick 等待页面最近一次的更新完成，会调用它内部的回调函数
      // Vue.nextTick    vm（Vue的实例或者组件对象，就是this）.$nextTick  两个方法你开心就好，效果一样的
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          new Swiper(this.$refs.imgList, {
            slidesPerView : 5,
            slidesPerGroup : 5,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>