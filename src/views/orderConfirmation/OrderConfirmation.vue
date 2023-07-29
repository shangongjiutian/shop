<template>
  <div class="wapper">
    <TopArea />
    <ProductList />
    <Order />
  </div>
</template>
<script>
import TopArea from './TopArea.vue'
import ProductList from './ProductList.vue'
import Order from './Order.vue'
export default {
  name: 'OrderConfirmation',
  components: { TopArea, ProductList, Order }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.wapper {
  position: absolute;
  left:0;right:0;top:0;bottom:0;
  padding-bottom:.49rem;
  background: #eee;
  overflow-y: scroll;
}

</style>
