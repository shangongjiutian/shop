<template>
    <div class="nearbuy">
        <h3 class="nearbuy__title">附近店铺</h3>
        <router-link v-for="item in nearBuyList" :key="item._id" :to="`/shop/${item._id}`"><ShopInfo :item="item"/></router-link>
      </div>
</template>
<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
const useNearbuyListEffect = () => {
  const nearBuyList = ref([])
  const getNearBuyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearBuyList.value = result.data
    }
    // console.log(result)
  }
  return { nearBuyList, getNearBuyList }
}
export default {
  name: 'Nearbuy',
  components: { ShopInfo },
  setup () {
    const { nearBuyList, getNearBuyList } = useNearbuyListEffect()
    getNearBuyList()
    return { nearBuyList }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearbuy {
  &__title {
    margin:.16rem 0 .04rem 0;
    font-weight: normal;
    font-size:.18rem;
    color:$content-fontcolor;
  }
  a {
    text-decoration: none;
  }
}

</style>
