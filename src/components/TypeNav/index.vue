<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @click="toSearch">
      <div @mouseleave="moveOutDiv" @mouseenter="moveInDiv">
        <h2 class="all">全部商品分类</h2>
        <transition name="show">
          <div class="sort" v-show="isShow">
            <div class="all-sort-list2">
              <div
                class="item"
                @mouseenter="moveIn(index)"
                :class="{item_on:currentIndex === index}"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
              >
                <h3>
                  <!-- <router-link
                    :to="`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`"
                  >{{c1.categoryName}}</router-link>

                  <router-link
                    :to="'/search?categoryName='+c1.categoryName+'&category1Id='+c1.categoryId"
                  >{{c1.categoryName}}</router-link>-->

                  <!-- 使用声明式导航，会卡  原因每个<router-link>组件标签，都会创建一个组件对象，创建的太多了，改为编程式导航 -->
                  <!-- <router-link
                    :to="{name:'search',query:{categoryName:c1.categoryName,category1Id:c1.categoryId}}"
                  >{{c1.categoryName}}</router-link>-->

                  <!-- 修改为编程式导航，卡的不厉害了，因为我们使用事件处理，不会创建很多的组件对象，
                  但是会出现很多的事件回调，内存占用还是比较大，效率还不高，最终我们决定使用事件委派来解决-->
                  <!-- <a
                    href="javascript:;"
                    @click="$router.push({name:'search',query:{categoryName:c1.categoryName,category1Id:c1.categoryId}})"
                  >{{c1.categoryName}}</a>-->

                  <a
                    href="javascript:;"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                  >{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- <a href>{{c2.categoryName}}</a> -->
                        <!-- <router-link
                          :to="{name:'search',query:{categoryName:c2.categoryName,category2Id:c2.categoryId}}"
                        >{{c2.categoryName}}</router-link>-->

                        <!-- <a
                          href="javascript:;"
                          @click="$router.push({name:'search',query:{categoryName:c2.categoryName,category2Id:c2.categoryId}})"
                        >{{c2.categoryName}}</a>-->
                        <a
                          href="javascript:;"
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                        >{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                          <!-- <a href>{{c3.categoryName}}</a> -->
                          <!-- <router-link
                            :to="{name:'search',query:{categoryName:c3.categoryName,category3Id:c3.categoryId}}"
                          >{{c3.categoryName}}</router-link>-->

                          <!-- <a
                            href="javascript:;"
                            @click="$router.push({name:'search',query:{categoryName:c3.categoryName,category3Id:c3.categoryId}})"
                          >{{c3.categoryName}}</a>-->

                          <a
                            href="javascript:;"
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                          >{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import _ from 'lodash' //打包后的项目体积过大  应该局部引入
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1, //当前移入项的下标  初始值 -1  移入某一项，就把这个值改为移入的这项的下标
      isShow:true
    };
  },
  mounted() {
     //请求三级分类列表数据不应该在这里，会造成两次触发请求数据，而两次数据是一样的
    // this.$store.dispatch('getCategoryList')
    // this.getCategoryList();
    if(this.$route.path !== '/home'){
      this.isShow = false
    }
  },




  methods: {
    // getCategoryList() {
    //   this.$store.dispatch("getCategoryList");
    // },

    // _.throttle(renewToken, 300000, { 'trailing': false });

    //移入某一项

    // moveIn(index) {
    //   //移入某一项 就把currentIndex的值改为移入这个项的下标
    //   //而我们在项上添加的item_on这个类就会生效
    //   console.log(index)
    //   this.currentIndex = index;
    // },

    // moveIn: function(index){
    //   console.log(index)
    //   this.currentIndex = index;
    // },

    moveIn: throttle(
      function (index) {
        //throttle是一个函数，内部需要传递一个回调函数，最后会返回一个新的函数
        console.log(index);
        this.currentIndex = index;
      },
      30,
      { trailing: false }
    ), //在刚触发就执行

    //点击类别事件回调
    toSearch(event) {
      //event 就是我们的事件对象
      let target = event.target //就是我们的目标元素（真正发生事件的儿子元素）
      let data = target.dataset //拿到目标元素身上所有的自定义属性组成的对象
      console.log(data)
      // 什么时候点的就是a标签  data当中存在categoryname那么就是点击的a标签
      let {categoryname,category1id,category2id,category3id} = data

      if(categoryname){
        //点击的就是a标签
        let location = {
          name:'search'
        }
        let query = {
          categoryName:categoryname
        }
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
          query.category2Id = category2id
        }else{
          query.category3Id = category3id
        }
        //到了这query参数就收集ok
        location.query = query


        //点击类别的时候带的是query参数，我们得去看看原来有没有params参数，有的话也得带上
        if(this.$route.params){
          location.params = this.$route.params
        }

        this.$router.push(location)
      }//else{
      //   //点击不是a标签，不关心
      // }
    },

    //移入外部的div显示三级分类列表
    moveInDiv(){
      this.isShow = true
    },
    //移出外部的div首页的三级分类不会隐藏，但是search的三级分类不会隐藏
    moveOutDiv(){
      this.currentIndex = -1
      if(this.$route.path !== '/home'){
        this.isShow = false
      }
    }
  },

  computed: {
    // ...mapState(['categoryList']) //错的  之前是对的
    // state.categoryList
    // state.home.categoryList
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
    // ...mapGetters(['categoryList1'])
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      // background: #fafafa;
      background: hotpink;
      z-index: 999;

      &.show-enter{
        opacity: 0;
        height: 0;
      }
      &.show-enter-to{
        opacity: 1;
        height: 461px;
      }
      &.show-enter-active{
        transition: all .5s;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 555px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: skyblue;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
