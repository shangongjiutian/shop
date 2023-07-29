<template>
    <div class="top">
      <div class="top__bgcor"></div>
      <div class="top__header">
        <div class="iconfont top__header__back" @click="handleBackClick">&#xe6db;</div>
        确认订单
      </div>
      <div class="top__receiver" @click="handleSelectClick">
        <div class="top__receiver__title">收货地址</div>
        <div class="top__receiver__adress">
          {{ hasAdress ? `${data.city}${data.department}${data.houseNumber}` : '请选择收货地址' }}
        </div>
        <div class="top__receiver__info" v-if="hasAdress">
          <span class="top__receiver__info__name">{{data.name}}</span>
          <span class="top__receiver__info__name">{{data.phone}}</span>
        </div>
        <div class="top__receiver__icon iconfont">&#xe6db;</div>
      </div>
    </div>
</template>
<script>
import { onBeforeMount, reactive } from 'vue'
import { get } from '../../utils/request'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'TopArea',
  setup () {
    const router = useRouter()
    const route = useRoute()
    const addressId = route.query.addressId
    const data = reactive({})
    const handleBackClick = () => {
      router.back()
    }
    const handleSelectClick = () => {
      const addressPath = route.path
      console.log(addressPath)
      router.push(`/addressSelect?path=${addressPath}`)
    }
    onBeforeMount(async () => {
      if (addressId) {
        const result = await get(`/api/user/address/${addressId}`)
        if (result?.errno === 0) {
          const resultData = result.data
          data.city = resultData.city
          data.department = resultData.department
          data.houseNumber = resultData.houseNumber
          data.name = resultData.name
          data.phone = resultData.phone
        }
      }
    })
    return { handleBackClick, hasAdress: !!addressId, handleSelectClick, data }
  }
}
</script>
<style lang="scss" scoped>
.top {
  height: 1.96rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-size: 100% 1.79rem;
  background-repeat: no-repeat;
  position: relative;
  &__header {
    position: relative;
    padding-top:.26rem;
    line-height:.24rem;
    color: #fff;
    text-align: center;
    font-size:.16rem;
    &__back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  &__receiver {
    position: absolute;
    left: .18rem;
    right:.18rem;
    background: #fff;
    border-radius:.04rem;
    height:1.1rem;
    bottom:0;
    &__title {
      line-height:.22rem;
      padding:.16rem 0 .14rem .16rem;
      font-size:.16rem;
      color:#333;
    }
    &__adress {
      padding: 0 .4rem 0 .16rem;
      color: #333;
      font-size:.14rem;
      line-height: .2rem;
    }
    &__info {
      padding: .06rem 0 0 .16rem;
      &__name {
        color: #666;
        line-height: .18rem;
        font-size:.12rem;
        margin-right:.06rem;
      }
    }
    &__icon {
      position: absolute;
      right:.16rem;
      top:.5rem;
      font-size:.24rem;
      color: #666;
      transform: rotate(180deg);
    }
  }
}
</style>
