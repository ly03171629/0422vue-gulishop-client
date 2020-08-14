<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- <Footer v-if="$route.path === '/home' || $route.path === '/search'"></Footer> -->
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  mounted() {
    this.getCategoryList();
  },
  methods:{
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
  }
}
</script>

<style>
</style>
