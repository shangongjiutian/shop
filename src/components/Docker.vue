<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList" :class="{'docker__item': true, 'docker__item--active': index === currentIndex }"
     :key="item.icon">
     <router-link :to="item.to">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
    </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Docker',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe867;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe73e;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe608;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe78b;', text: '我的', to: { name: 'MyAdmin' } }
    ]
    return { dockerList }
  }
}
</script>
<style lang="scss" scoped>
@import '../style/viriables.scss';
.docker {
  display:flex;
  position:  fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  background: #fff;
  border-top:.01rem solid #f1f1f1;
  padding:0 .18rem;
  box-sizing: border-box;
  color:$content-fontcolor;
  &__item {
    flex:1;
    text-align: center;
    .iconfont{
      font-size:.18rem;
      margin: .07rem 0 .02rem 0;
    }
    a {
      text-decoration: none;
      color:$content-fontcolor;
    }
    &--active a {
      color:#1FA4FC;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
