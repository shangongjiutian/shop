<template>
    <div class="wrapper">
      <div class="search">
        <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
        <div class="search__content">
          <span class="search__content__icon iconfont">&#xe615;</span>
          <input class="search__content__input" placeholder="请输入商品名称" />
        </div>
      </div>
      <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"/>
      <Content :shopName="item.name" />
      <Cart />
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
import { get } from '../../utils/request'
import Content from './Content.vue'
import Cart from './Cart.vue'

const getItemDataEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}
const handleBackClickEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup () {
    const { item, getItemData } = getItemDataEffect()
    const { handleBackClick } = handleBackClickEffect()
    getItemData()
    return { item, handleBackClick }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
    padding:0 .18rem;
}
.search {
  margin:.14rem 0 .04rem 0;
  display: flex;
  height:.32rem;
  &__back {
    width:.3rem;
    line-height: .32rem;
    font-size:.24rem;
    color:#b6b6b6;
  }
  &__content {
    flex: 1;
    display: flex;
    line-height: .32rem;
    border-radius:.16rem;
    background: $search-bgcolor;
    &__icon {
      width:.44rem;
      height: .32rem;
      text-align: center;
      color:#b6b6b6;
      font-size:.14rem;
    }
    &__input {
      height: .32rem;
      border: none;
      outline: none;
      background: none;
      padding-right:.2rem;
      width:100%;
      color:$content-fontcolor;
      &::placeholder {
        color:#999;
      }
    }
  }
}
</style>
