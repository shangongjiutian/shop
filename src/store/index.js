import { createStore } from 'vuex'
const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
const getLocalCartList = () => {
  try {
    return JSON.parse(localStorage.cartList)
  } catch (e) {
    return {}
  }
}
export default createStore({
  state: {
    cartList: getLocalCartList()
    // cartList: {
    //   // shopId: { shopName: '', productList: { productId: {} } }
    // }
  },
  getters: {
  },
  mutations: {
    // 添加购物车逻辑
    changeCartInfo (state, payload) {
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = { shopName: '', productList: {} } }
      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    // 购物车弹出选择逻辑
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeItemChecked (state, payload) {
      // console.log(state, payload)
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    changeCartClear (state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLocalCartList(state)
    },
    setCartItemChecked (state, payload) {
      const { shopId } = payload
      const result = !payload.allChecked
      const products = state.cartList[shopId].productList
      // console.log(result)
      if (products) {
        for (const i in products) {
          const product = products[i]
          product.check = result
        }
      }
      setLocalCartList(state)
    },
    clearCartData (state, shopId) {
      delete state.cartList[shopId]
    }
  },
  actions: {
  },
  modules: {
  }
})
