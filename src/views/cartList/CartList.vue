<template>
    <div class="wapper">
      <div class="title">我的全部购物车</div>
      <div class="product" v-for="(cart, key) in list" :key="key" @click="() => handleCartClick(key)">
        <div class="product__title">{{cart.shopName}}</div>
        <div class="product__item" v-for="product in cart.productList" :key="product._id">
          <img class="product__item__img" :src="product.imgUrl"/>
          <div class="product__item__detail">
              <h4 class="product__item__title">{{product.name}}</h4>
              <p class="product__item__price">
                  <span class="product__item__yen">&yen;{{product.price}}</span>
                  <span class="product__item__count">×{{product.count}}</span>
                  <span class="product__item__origin">&yen;{{(product.price * product.count).toFixed(2) }}</span>
              </p>
          </div>
        </div>
        <div class="product__total">共计{{cart.total}}件<span class="iconfont">&#xe6db;</span></div>
    </div>
    <div v-if="Object.keys(list).length === 0" class="empty">购物车中没有商品</div>
    </div>
    <Docker :currentIndex="1" />
</template>
<script>
import Docker from '../../components/Docker.vue'
import { useRouter } from 'vue-router'
export default {
  name: 'CartList',
  components: { Docker },
  setup () {
    const list = JSON.parse(localStorage.cartList || '[]')
    console.log(list)
    for (const i in list) {
      const cart = list[i]
      const productList = cart.productList
      let total = 0
      for (const j in productList) {
        const product = productList[j]
        total += product.count
      }
      cart.total = total
    }
    const router = useRouter()
    const handleCartClick = (key) => {
      router.push(`orderconfirmation/${key}`)
    }
    return { list, handleCartClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin.scss';
.wapper {
  position: absolute;
  left:0;right:0;top:0;bottom:.5rem;
  overflow-y: scroll;
  background: #f5f5f5;
  .title {
    height:.44rem;
    background: #fff;
    text-align:center;
    font-size:.16rem;
    color: #333;
    line-height: .44rem;
  }
}
.product {
  background:#fff;
  margin:.16rem .16rem 0 .16rem;
  padding:.16rem;
  &__title {
    font-size:.16rem;
    color: #333;
  }
  &__item {
    display: flex;
    padding-top:.16rem;
    &__img {
      width:.46rem;
      height:.46rem;
    }
    &__detail {
      flex:1;
      overflow: hidden;
      padding-left:.16rem;
    }
    &__title {
      font-weight: normal;
      font-size:.14rem;
      color: #333;
      line-height: .22rem;
      padding:0;
      margin:0;
      @include ellipses
    }
    &__price {
      display: flex;
      margin:.05rem 0 0 0;
    }
    &__yen {
      color:#E93B3B;
      font-size:.14rem;
      line-height: .16rem;
    }
    &__count {
      flex:1;
      color:#E93B3B;
      font-size:.12rem;
      padding-left:.08rem;
      line-height: .16rem;
    }
    &__origin {
      color:#333;
      font-size:.14rem;
    }
  }
  &__total {
    height:.28rem;
    line-height: .28rem;
    text-align: center;
    background: #f5f5f5;
    color:#999;
    font-size:.14rem;
    margin-top:.16rem;
    span {
      transform: rotate(-90deg);
      display: inline-block;
    }
  }
}
.empty {
  text-align: center;
  font-size:.14rem;
  padding-top:20%;
}
</style>
