import { useStore } from 'vuex'
import { computed } from 'vue'
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartInfo = (shopId, productId, productInfo, num) => {
    // console.log(shopId, productId, productInfo)
    store.commit('changeCartInfo', { shopId, productId, productInfo, num })
  }
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const notEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })
  const orderProductList = computed(() => {
    const orderProductList = cartList[shopId]?.productList || {}
    const notEmptyProductList = {}
    for (const i in orderProductList) {
      const product = orderProductList[i]
      if (product.check && product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })
  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })
  const calacutions = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true }
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.check) {
          result.price += (product.count * product.price)
          result.total += product.count
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
    }
    if (result.price > 0) {
      result.price = result.price.toFixed(2)
    }
    return result
  })
  return { cartList, changeCartInfo, productList, shopName, calacutions, orderProductList }
}
