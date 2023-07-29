<template>
    <div class="shop">
        <img class="shop__img" :src="item.imgUrl" />
        <div :class="{'shop__content': true, 'shop__content--bordered': hideBorder ? false: true}">
        <div class="shop__content__title">{{item.name}}</div>
        <div class="shop__content__tags">
            <span class="shop__content__tag">月售{{ item.sales }}</span>
            <span class="shop__content__tag">起送￥{{ item.expressLimit }}</span>
            <span class="shop__content__tag">基础运费￥{{ item.expressPrice }}</span>
        </div>
        <p class="shop__content__highlight">{{item.slogan}}</p>
        <div class="shop__products" v-if="item.products">
          <div class="product" v-for="product in item.products" :key="product.name">
            <img class="product__img" :src="product.imgUrl" />
            <p class="product__title">{{ product.name }}</p>
            <p class="product__price">
              <span class="product__price__yen">&yen;</span>
              {{ product.price }}
              <span class="product__price__old">{{ product.oldPrice }}</span>
            </p>
          </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>
<style lang="scss" scoped>
@import '../style/viriables.scss';
@import '../style/mixin.scss';
.shop {
    display: flex;
    padding:.12rem 0 0 0;
    &__img {
      margin-right:.16rem;
      width:.56rem;
      height: .56rem;
    }
    &__content {
    flex:1;
    &--bordered {
      border-bottom:.01rem solid $content-bgcolor;
    }
    &__title {
      line-height: .22rem;
      font-size:.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top:.08rem;
      line-height:.18rem;
      font-size:.13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right:.16rem;
    }
    &__highlight {
      margin-top:.08rem;
      color:#E93B3B
    }
  }
  &__products {
    display: flex;
    .product {
      margin-right:.1rem;
      overflow: hidden;
      width:.76rem;
      &__img {
        width:.76rem;
        height:.76rem;
      }
      &__title {
        margin:0;
        font-size:.12rem;
        color: #333;
        line-height: .24rem;
        @include ellipses
      }
      &__price {
        margin:0;
        color:#E93B3B;
        font-size:.14rem;
        display: flex;
        line-height: .36rem;
        overflow: hidden;
        &__yen {
          display: inline-block;
          font-size:.2rem;
          transform:scale(.5);
          transform-origin: right center;
        }
        &__old {
          display: inline-block;
          margin-left:.05rem;
          color: #999;
          transform:scale(.5);
          transform-origin: left center;
          font-size:.2rem;
          text-decoration: line-through;
        }
      }
    }
  }

 }
</style>
