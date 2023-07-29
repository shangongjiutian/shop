<template>
    <div class="wapper">
        <div class="search">
            <div class="search__back iconfont" @click="handleBackClick">&#xe6db;</div>
            <div class="search__content">
                <span class="search__content__icon iconfont">&#xe615;</span>
                <input class="search__content__input" placeholder="请输入商品名称" v-model="keyword" @change="handleSearchInputChange" />
            </div>
        </div>
        <router-link v-for="item in searchList" :key="item._id" :to="`/shop/${item._id}`"><ShopInfo :item="item"/></router-link>
    </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
const handleBackClickEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}
const useSearchListEffect = () => {
  const searchList = ref([])
  const getSearchList = async (keyword) => {
    const result = await get('/api/shop/search', { keyword })
    if (result?.errno === 0 && result?.data?.length) {
      searchList.value = result.data
    }
  }
  return { searchList, getSearchList }
}
export default {
  name: 'SearchList',
  components: { ShopInfo },
  setup () {
    const route = useRoute()
    const keyword = ref(route.query.keyword || '')
    const handleSearchInputChange = () => {
      getSearchList(keyword.value)
      // console.log(keyword.value)
    }

    const { searchList, getSearchList } = useSearchListEffect()
    const handleBackClick = handleBackClickEffect()
    getSearchList(keyword.value)
    return { handleBackClick, keyword, handleSearchInputChange, searchList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wapper {
    margin:0 .18rem;
}
a {
  text-decoration: none;
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
