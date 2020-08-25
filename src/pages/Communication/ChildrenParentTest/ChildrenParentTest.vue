<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowMoneyFromXM">找小明借钱100</button><br>
    <button @click="borrowMoneyFromXH">找小红借钱150</button><br>
    <button @click="borrowMoneyFromALL">找所有孩子借钱200</button><br>
    
    <br>
    <Son ref="son"/>

    <br>
    <Daughter ref="dau"/>
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrowMoneyFromXM(){
      this.money += 100
      this.$refs.son.money -= 100  //代表的是儿子组件对象
    },
    borrowMoneyFromXH(){
      this.money += 150
      this.$refs.dau.money -= 150  //代表的是儿子组件对象
    },
    borrowMoneyFromALL(){
      this.money += 200 * 2
      this.$children.forEach(item => item.money -= 200)

      
    }
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
