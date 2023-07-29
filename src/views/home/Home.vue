<template>
  <div class="wrapper">
    <Static />
    <Nearbuy />
  </div>
  <Docker :currentIndex="0" />
</template>
<script>
import Static from './Static'
import Nearbuy from './Nearbuy'
import Docker from '../../components/Docker.vue'
export default {
  name: 'home',
  components: { Static, Nearbuy, Docker }
}
</script>
<style lang="scss" scoped>
.wrapper {
  padding:0 .18rem .49rem .18rem;
}
</style>
