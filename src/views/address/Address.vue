<template>
    <div class="wapper">
      <div class="title">
        <span class="back iconfont" @click="handleBackClick">&#xe6db;</span>
        管理收货地址
        <span class="add"><router-link to="/AddressEdit">新建</router-link></span>
      </div>
      <div class="address">
        <div class="address__title">我的收货地址</div>
        <div class="address__content" v-for="item in addressList" :key="item._id" @click="() => handleAddressClick(item._id)">
          <div class="address__item">
            <div class="address__item__name">
              <span>{{ item.name }}</span>
              <span>{{item.phone}}</span>
            </div>
            <div class="address__item__detail">{{ item.department }}{{ item.houseNumber }}</div>
          </div>
          <div class="address__icon iconfont">&#xe6db;</div>
        </div>
      </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'
import { get } from '../../utils/request'
import { ref } from 'vue'
const useAddressListEffect = () => {
  const addressList = ref([])
  const getAddressList = async () => {
    const result = await get('/api/user/address')
    // console.log(result)
    if (result?.errno === 0 && result?.data?.length) {
      addressList.value = result.data
    }
  }
  return { addressList, getAddressList }
}
export default {
  name: 'Address',
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    const handleAddressClick = (id) => {
      router.push(`/addressEdit?id=${id}`)
    }
    const { addressList, getAddressList } = useAddressListEffect()
    getAddressList()
    return { handleBackClick, addressList, handleAddressClick }
  }
}
</script>
<style lang="scss" scoped>
.wapper {
  position: absolute;
  right:0; top:0; bottom:0; left:0;
  overflow-y: scroll;
  background: #f5f5f5;
}
.title {
  height:.44rem;
  background: #fff;
  font-size:.16rem;
  color: #333;
  line-height: .44rem;
  text-align:center;
  padding:0 .2rem;
  position: relative;
  .back {
    font-size:.22rem;
    color:#b6b6b6;
    position: absolute;
    left:.16rem;
  }
  a {color:#333;}
  .add {
    font-size:.14rem;
    position: absolute;
    right:.2rem;
  }
}
.address__title {
  margin: .15rem 0 0 .18rem;
  color: #333;
  font-size:.14rem;
}
.address__content {
  background: #FFFFFF;
  border-radius: .04rem;
  margin:.15rem .18rem 0 .18rem;
  padding:.18rem;
  position: relative;
  .address__item {
    padding-right:.3rem;
     &__name {
      font-size:.14rem;
      color: #999;
      span {
        margin-right:.5rem;
        display: inline-block;
      }
     }
     &__detail {
      line-height: .2rem;
      color: #333;
      font-size:.14rem;
      margin-top:.12rem;
     }
  }
  .address__icon {
    transform: rotate(180deg);
    position: absolute;
    right:.2rem;
    top:.4rem;
    font-size:.22rem;
    color:#999;
  }
}
</style>
