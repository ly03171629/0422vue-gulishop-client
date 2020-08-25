<template>
  <div style="background: #ccc; height: 50px;">
    <h3>儿子小明: 有存款: {{money}}</h3>
    <button @click="giveMoney(50)">给BABA钱: 50</button>
  </div>
</template>

<script>
import {myMixIn} from './moneyMixin'
export default {
  name: 'Son',
  mixins:[myMixIn],
  data () {
    return {
      money: 30000
    }
  },

  // methods: {
    // giveMoney(money){
    //   this.$parent.money += money
    //   this.money -= money
    // }
  // }
}
</script>
