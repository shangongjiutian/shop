<template>
    <div class="content">
        <div class="category">
            <div :class="{'category__item': true, 'category__item--active': currentTab === item.tab}" @click="() => handleTabClick(item.tab)" v-for="item in categories" :key="item.name">{{item.name}}</div>
        </div>
        <div class="product">
            <div class="product__item" v-for="item in list" :key="item._id">
                <img class="product__item__img" :src="item.imgUrl" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">{{item.name}}</h4>
                    <p class="product__item__sales">月售{{item.sales}}件</p>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen;</span>{{item.price}}
                        <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus iconfont" @click="() => {changeCartItem(shopId, item._id, item, -1, shopName)}">&#xe619;</span>
                    {{ getCratCount(shopId, item._id ) }}
                    <span class="product__number__plus iconfont" @click="() => {changeCartItem(shopId, item._id, item, 1, shopName)}">&#xe728;</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { get } from '../../utils/request'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effects/cartEffect'
const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]
// 左边tab点击切换逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}
// 列表内容相关逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })
  const getContentData = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data) {
      content.list = result.data
    }
    // console.log(result)
  }
  watchEffect(() => {
    getContentData()
  })
  const { list } = toRefs(content)
  return { list }
}
const useCartEffect = () => {
  const store = useStore()
  const { changeCartInfo, cartList } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }

  const changeCartItem = (shopId, productId, productInfo, num, shopName) => {
    changeCartInfo(shopId, productId, productInfo, num)
    changeShopName(shopId, shopName)
  }
  const getCratCount = (shopId, productId) => {
    const cartList = store.state.cartList
    return cartList?.[shopId]?.productList?.[productId]?.count || 0
    // console.log(cartList[shopId])
  }
  return { changeCartItem, cartList, getCratCount }
}
export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changeCartItem, getCratCount } = useCartEffect()
    return { list, currentTab, categories, handleTabClick, shopId, cartList, changeCartItem, getCratCount }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.content {
    display: flex;
    position: absolute;
    left: 0;
    right:0;
    top:1.5rem;
    bottom:.5rem;
    background: $bg-color;
}
.category {
    width:.76rem;
    background: $search-bgcolor;
    height: 100%;
    overflow-y: scroll;
    &__item {
        line-height:.4rem;
        text-align: center;
        color:#333;
        &--active {
            background: $bg-color;
        }
    }
}
.product {
    overflow-y: scroll;
    flex:1;
    &__item {
        display: flex;
        padding:.12rem 0;
        margin:0 .16rem;
        border-bottom: .01rem solid #f1f1f1;
        position: relative;
        &__detail {
            overflow: hidden;
        }
        &__img {
            width:.68rem;
            height:.68rem;
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
        &__sales {
            margin:.06rem 0;
            line-height: .2rem;
            font-size:.12rem;
            color: #333;
        }
        &__price {
            margin:0;
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
        bottom:.12rem;
        line-height: .2rem;
        display: flex;
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
