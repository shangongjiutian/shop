<template>
    <div class="mask" v-if="showCart" @click="handleClickCartShow"></div>
    <div class="cart">
      <div class="product" v-if="showCart">
        <div class="product__header">
          <div class="product__header__check" @click="() => setCartItemChecked(shopId, calacutions.allChecked)"><span class="iconfont" v-html="calacutions.allChecked ?  '&#xe844;' : '&#xe7ae;'"></span>全选</div>
          <div class="product__header__del" @click="() => {changeCartClear(shopId)}">清空购物车</div>
        </div>
        <div class="product__item" v-for="item in productList" :key="item._id">
            <div class="product__item__check iconfont" v-html="item.check ?  '&#xe844;' : '&#xe7ae;'" @click="() => {changeItemCheck(shopId, item._id)}"></div>
            <img class="product__item__img" :src="item.imgUrl" />
            <div class="product__item__detail">
                <h4 class="product__item__title">{{item.name}}</h4>
                <p class="product__item__price">
                    <span class="product__item__yen">&yen;</span>{{item.price}}
                    <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
                </p>
            </div>
            <div class="product__number">
                <span class="product__number__minus iconfont" @click="() => {changeCartInfo(shopId, item._id, item, -1)}">&#xe619;</span>
                {{item.count || 0}}
                <span class="product__number__plus iconfont" @click="() => {changeCartInfo(shopId, item._id, item, 1)}">&#xe728;</span>
            </div>
        </div>
      </div>
      <div class="check">
          <div class="check__icon" @click="handleClickCartShow">
              <img class="check__icon__img" src ="http://www.dell-lee.com/imgs/vue3/basket.png" />
              <div class="check__icon__tag">{{calacutions.total}}</div>
          </div>
          <div class="check__info">总计：<span class="check__info__price">&yen;{{calacutions.price}}</span></div>
          <div class="check__btn" v-show="calacutions.total > 0"><router-link :to="{ path:`/OrderConfirmation/${shopId}`}">去结算</router-link></div>
      </div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useCommonCartEffect } from '../../effects/cartEffect'
const useCartEffect = (shopId) => {
  const { changeCartInfo, cartList, productList, calacutions } = useCommonCartEffect(shopId)
  const store = useStore()
  // const cartList = store.state.cartList
  const changeItemCheck = (shopId, productId) => {
    store.commit('changeItemChecked', { shopId, productId })
  }
  const changeCartClear = (shopId) => {
    showCart.value = false
    store.commit('changeCartClear', { shopId })
  }
  const setCartItemChecked = (shopId, allChecked) => {
    store.commit('setCartItemChecked', { shopId, allChecked })
  }
  const handleClickCartShow = () => {
    showCart.value = !showCart.value
  }
  const showCart = ref(false)
  return { calacutions, productList, changeCartInfo, changeItemCheck, changeCartClear, setCartItemChecked, showCart, handleClickCartShow, cartList }
}
export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { calacutions, productList, cartList, changeCartInfo, changeItemCheck, changeCartClear, setCartItemChecked, showCart, handleClickCartShow } = useCartEffect(shopId)
    return { calacutions, productList, shopId, cartList, changeCartInfo, changeItemCheck, changeCartClear, setCartItemChecked, showCart, handleClickCartShow }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.mask {
  position: fixed;
  left:0;
  right:0;
  bottom:.5rem;
  top:0;
  z-index: 1;
  background: rgba(0,0,0,.3);
}
.cart {
    position: absolute;
    left: 0;
    right:0;
    bottom:0;
    height: .5rem;
}
.check{
    display: flex;
    border-top:.01rem solid #f1f1f1;
    height:.5rem;
    box-sizing: border-box;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    &__icon {
        width:.84rem;
        position: relative;
        height:.49rem;
        &__img {
            width:.28rem;
            height: .26rem;
            display: block;
            margin: .12rem auto 0 auto;
        }
        &__tag {
            position: absolute;
            min-width:.2rem;
            height:.2rem;
            background: #E93B3B;
            font-size:.12rem;
            text-align: center;
            line-height: .2rem;
            padding: 0 .02rem;
            top:.03rem;
            left:.45rem;
            color: #fff;
            border-radius:.1rem;
            transform: scale(0.5);
            transform-origin:left center ;
        }
    }
    &__info {
        flex:1;
        line-height: .49rem;
        height:.49rem;
        color:#333;
        font-size:.12rem;
        &__price {
            font-size:.18rem;
            color: #E93B3B;
        }
    }
    &__btn {
        width:.98rem;
        line-height: .49rem;
        color: #fff;
        background: #4FB0F9;
        text-align: center;
        font-size:.14rem;
        a {
          color: #fff;
          text-decoration: none;
        }
    }
}
.product {
    background: #fff;
    overflow-y: scroll;
    flex:1;
    position: fixed;
    bottom:.5rem;
    width: 100%;
    max-height:50%;
    overflow-y: scroll;
    z-index: 2;
    &__header {
      border-bottom:.01rem solid #f1f1f1;
      height: .52rem;
      padding:0 .16rem;
      display: flex;
      line-height: .52rem;
      font-size:.14rem;
      &__check {
        line-height: .52rem;
        display: flex;
        flex:1;
      }
    }
    &__header span {
      font-size:.2rem;
      display: inline-block;
      line-height: .52rem;
      padding-right:.05rem;
      color:#0091FF ;
    }
    &__item {
        display: flex;
        padding:.12rem 0;
        margin:0 .16rem;
        border-bottom: .01rem solid #f1f1f1;
        position: relative;
        &__check {
          font-size:.2rem;
          color: #0091FF;
          padding: .13rem .1rem 0 0;
        }
        &__detail {
            overflow: hidden;
        }
        &__img {
            width:.46rem;
            height:.46rem;
            margin-right:.12rem;
        }
        &__title {
            margin:0;
            line-height: .2rem;
            font-size:.14rem;
            color: #333;
            font-weight: normal;
            @include ellipses
        }
        &__price {
            margin:.06rem 0 0 0 ;
            color: #E93B3B ;
            line-height: .2rem;
            font-size:.14rem;
        }
        &__yen {
                font-size:.12rem;
            }
        &__origin {
            color: #999;
            line-height: .2rem;
            font-size:.12rem;
            text-decoration: line-through;
        }
    .product__number {
        position: absolute;
        right: 0;
        bottom:.2rem;
        display: flex;
        line-height: .2rem;
        &__minus, &__plus {
            display: inline-block;
            width:.2rem;
            height: .2rem;
            font-size:.2rem;
            text-align: center;
            line-height: .2rem;
        }
        &__minus {
            color: #666;
            margin-right:.05rem;
        }
        &__plus {
            color: $btn-bgcolor;
            margin-left:.05rem;
        }
    }
    }
}
</style>
