<template>
    <div class="bottom">
        <div class="bottom__amount">实付金额<span>&yen;{{calacutions.price}}</span></div>
        <div v-if="showSubmitBtn" class="bottom__submit" @click="() => handleSubmitClick(true)">提交订单</div>
    </div>
    <div class="mask" v-if="showMask"  @click="() => handleSubmitClick(false)">
        <div class="mask__content" @click.stop>
            <div class="mask__content__title">确认离开收银台？</div>
            <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
            <div class="mask__content__btns">
                <div class="mask__content__cancel" @click="() => handleConfirmOrder(true)">取消订单</div>
                <div class="mask__content__confirm" @click="() => handleConfirmOrder(false)">确认支付</div>
            </div>
        </div>
    </div>
</template>
<script>
import { useCommonCartEffect } from '../../effects/cartEffect'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'
import { post } from '../../utils/request'
const useMakeOrderEffect = (shopId, shopName, productList, addressId) => {
  const router = useRouter()
  const store = useStore()
  const handleConfirmOrder = async (isCanceled) => {
    const products = []
    for (const i in productList.value) {
      const product = productList.value[i]
      products.push({ id: parseInt(product._id, 10), num: product.count })
    }
    try {
      const result = await post('/api/order', {
        addressId,
        shopId,
        shopName: shopName.value,
        isCanceled,
        products
      })
      if (result?.errno === 0) {
        const cartList = JSON.parse(localStorage.cartList || '{}')
        delete cartList[shopId]
        localStorage.cartList = JSON.stringify(cartList)
        store.commit('clearCartData', shopId)
        router.push({ name: 'OrderList' })
      }
    } catch (e) {
      console.log('下单失败')
    }
  }
  return { handleConfirmOrder }
}
const useMaskEffect = () => {
  const showMask = ref(false)
  const handleSubmitClick = (status) => {
    showMask.value = status
  }
  return { handleSubmitClick, showMask }
}
export default {
  name: 'Order',
  setup () {
    const route = useRoute()
    const shopId = parseInt(route.params.id, 10)
    const addressId = route.query.addressId
    const { calacutions, shopName, productList } = useCommonCartEffect(shopId)
    const { handleConfirmOrder } = useMakeOrderEffect(shopId, shopName, productList, addressId)
    const { handleSubmitClick, showMask } = useMaskEffect()
    return { calacutions, handleSubmitClick, showMask, handleConfirmOrder, showSubmitBtn: !!addressId }
  }
}
</script>
<style lang="scss" scoped>
.bottom {
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  height:.49rem;
  background: #fff;
  display: flex;
  &__amount {
    flex:1;
    line-height: .49rem;
    font-size:.14rem;
    color: #333;
    padding-left:.24rem;
    span {color: #151515;font-size:.16rem;padding-left:.05rem;}
  }
  &__submit {
    width:.98rem;
    background: #4FB0F9;
    line-height: .49rem;
    color: #fff;
    font-size:.14rem;
    text-align: center;
  }
}
.mask {
    position:fixed;
    left:0; right:0; bottom: 0;top: 0;
    background: rgba(0,0,0,.3);
    &__content {
        width:3rem;
        height:1.6rem;
        background: #fff;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        border-radius:.04rem;
        &__title {
            font-size:.18rem;
            color: #333;
            text-align: center;
            line-height: .26rem;
            margin:.24rem 0 0 0;
        }
        &__desc {
            font-size:.14rem;
            margin:.1rem 0 0 0 ;
            color: #666;
            text-align: center;
        }
        &__btns {
            margin:.24rem .58rem 0 .58rem;
            display: flex;
        }
        &__cancel {
            width:.8rem;
            height:.32rem;
            line-height:.32rem;
            color: #4FB0F9;
            border:.01rem solid #4FB0F9;
            text-align: center;
            border-radius:.16rem;
            font-size:.14rem;
            box-sizing: border-box;
            margin-right:.24rem;
        }
        &__confirm {
            width:.8rem;
            height:.32rem;
            background: #4FB0F9;
            text-align: center;
            color:#fff;
            font-size:.14rem;
            line-height: .32rem;
            border-radius:.16rem;
        }
    }
}
</style>
