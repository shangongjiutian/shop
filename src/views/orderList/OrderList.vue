<template>
    <div class="wapper">
      <div class="title">我的订单</div>
      <div class="products" v-for="(item, index) in list" :key="index">
        <div class="products__name">
          <div class="products__name__shop">{{item.shopName}}</div>
          <div class="products__name__state">{{item.isCanceled ? '已取消' : '已下单' }}</div>
        </div>
        <div class="products__content">
          <div class="products__content__img">
            <img v-for="(innerItem, innerIndex) in item.products" :key="innerIndex" :src="innerItem.product.img">
          </div>
          <div class="products__content__text">
            <div class="products__content__price">&yen;{{item.totalPrice}}</div>
            <div class="products__content__total">共{{item.totalNumber}}件</div>
          </div>
        </div>
      </div>
    </div>
    <docker :currentIndex="2" />
</template>
<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import Docker from '../../components/Docker.vue'
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getOrderList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      console.log(orderList)
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem) => {
          totalNumber += (productItem?.orderSales || 0)
          totalPrice += ((productItem?.product.price * productItem?.orderSales) || 0)
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })

      data.list = result.data
    }
  }
  getOrderList()
  const { list } = toRefs(data)
  return { list }
}
export default {
  name: 'orderList',
  components: { Docker },
  setup () {
    const { list } = useOrderListEffect()
    return { list }
  }
}
</script>
<style lang="scss" scoped>

@import '../../style/mixin.scss';
.wapper {
  background: #f5f5f5;
  position: absolute;
  left:0;
  top:0;
  bottom:.49rem;
  right:0;
  overflow-y:auto;
}
.title {
  line-height: .44rem;
   text-align: center;
   background: #fff;
   font-size:.16rem;
}
.products {
  padding:.16rem;
  background: #fff;
  border-radius:.04rem;
  margin:.16rem .16rem 0 .16rem;
  &__name {
    line-height:.4rem;
    display: flex;
    &__shop {
      font-size:.16rem;
      color: #333;
      flex:1;
    }
    &__state {
      font-size:.14rem;
      color: #999;
    }
  }
  &__content {
    display: flex;
    &__img {
      flex:1;
      display: flex;
      // @include ellipses;
      overflow-x: scroll;
      img {
        width:.4rem;
        height:.4rem;
        margin-right:.1rem;
      }
    }
    &__text {
      text-align: right;
      padding-left:.2rem;
    }
    &__price {
      color:#E93B3B;
      font-size:.14rem;
      padding:.03rem 0;
    }
    &__total {
      font-size:.12rem;
      color: #333;
    }
  }
}
</style>
