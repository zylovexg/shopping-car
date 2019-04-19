<template>
  <div>
    <!-- 购物陈列表 -->
    <car-list></car-list>
  </div>
</template>

<script>
import CarList from './components/CarList'
export default {
  name: 'ShoppingCar',
  components: {
    CarList
  },
  data () {
    return {

    }
  }
}
</script>
