export const myMixIn = {
  //这个对象可以包含组件对象当中包含的一切
  methods: {
    giveMoney(money){
      this.$parent.money += money
      this.money -= money
    }
  }
}