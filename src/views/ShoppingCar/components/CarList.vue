<template>
  <div class="car-box">
    <table>
      <tr v-for="(item, index) in $store.state.carData" :key="index">
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.des }}
        </td>
        <td>
          <button @click="add(index)">+</button>
          {{ item.total }}
          <button @click="reduce(index)">-</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// 得到后台数据后，给赋值到 vuex 里。是为了可以在订单或者别的地方能统一管理。
// 相见 store.js 文件
import carData from '@/data'

export default {
  name: 'carList',
  data () {
    return {
    }
  },
  mounted () {
    this.getCarData()
  },
  methods: {
    // 获取购物车列表数据
    getCarData () {
      // 实际开发中，此处是调用接口请求，拿到数据后赋值
      this.$store.dispatch('getCarData', carData)
    },
    // 添加购物车数量
    add (index) {
      this.$store.dispatch('addData', index)
    },
    // 减少购物车数量
    reduce (index) {
      this.$store.dispatch('reduceData', index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .car-box
    table
      width 100%
      height 100%
      border 1px solid grey
      border-collapse collapse
      tr, td
        border 1px solid grey
      td
        text-align center
        button
          width 50px
</style>
