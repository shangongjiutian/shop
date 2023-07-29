<template>
    <div class="product">
      <div class="product__title">{{shopName}}</div>
      <div class="product__item" v-for="item in orderProductList" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
                <span class="product__item__yen">&yen;{{item.price}}</span>
                <span class="product__item__count">×{{item.count}}</span>
                <span class="product__item__origin">&yen;{{(item.price * item.count).toFixed(2) }}</span>
            </p>
        </div>
      </div>
    </div>
</template>
<script>
import { useCommonCartEffect } from '../../effects/cartEffect'
import { useRoute } from 'vue-router'
export default {
  name: 'CartList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { orderProductList, shopName } = useCommonCartEffect(shopId)
    return { orderProductList, shopName }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/mixin.scss';
.product {
  background:#fff;
  margin:.1rem .18rem;
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
}
</style>
