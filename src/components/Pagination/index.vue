<template>
  <div class="pagination">
    <button :disabled="currentPageNum === 1">上一页</button>
    <button v-if="startEnd.start > 1" :class="{active:currentPageNum === 1}">1</button>
    <button v-if="startEnd.start > 2">···</button>

    <!-- vfor和vif可以同时出现，但是vfor优先级比vif高 -->
    <button
      v-for="page in startEnd.end"
      :key="page"
      v-if="page >= startEnd.start"
      :class="{active:currentPageNum === page}"
    >{{page}}</button>

    <button v-if="startEnd.end < totalPageNum - 1">···</button>

    <button
      v-if="startEnd.end < totalPageNum"
      :class="{active:currentPageNum === totalPageNum}"
    >{{totalPageNum}}</button>
    
    <button :disabled="currentPageNum === totalPageNum">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPageNum: {
      type: Number,
      default: 1,
    },
    total: Number,
    pageSize: {
      type: Number,
      default: 5,
    },
    continueSize: Number,
  },
  computed: {
    //1、计算总页码
    totalPageNum() {
      return Math.ceil(this.total / this.pageSize);
    },
    //2、连续页的起始和结束页码
    startEnd() {
      let start, end, disNum;
      let { currentPageNum, continueSize, totalPageNum } = this;

      if (continueSize >= totalPageNum) {
        start = 1;
        end = totalPageNum;
      } else {
        start = currentPageNum - Math.floor(continueSize / 2);
        end = currentPageNum + Math.floor(continueSize / 2);

        if (start <= 1) {
          //修正左边出现的小于1的页码
          disNum = 1 - start;
          start += disNum;
          end += disNum;
        }

        if (end >= totalPageNum) {
          //修正右边出现的大于总页码的页码
          disNum = end - totalPageNum;
          start -= disNum;
          end -= disNum;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
