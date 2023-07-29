<template>
    <div class="position">
    <span class="iconfont position__icon">&#xe624;</span>
    河南省郑州市物流园10号楼10层
    <span class="iconfont position__notice">&#xe716;</span>
  </div>
  <router-link to="/search">
    <div class="search">
      <span class="iconfont">&#xe615;</span>
      <span class="serch__text">河南省郑州市物流园10号楼10层</span>
    </div>
  </router-link>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in iconItem" :key="item.text">
      <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" />
      <p class="icons__item__desc">{{item.text}}</p>
    </div>
  </div>
  <div class="gap"></div>

</template>
<script>
export default {
  name: 'Static',
  setup () {
    const iconItem = [
      { imgName: '超市', text: '超市便利' },
      { imgName: '菜市场', text: '菜市场' },
      { imgName: '水果店', text: '水果店' },
      { imgName: '鲜花', text: '鲜花绿植' },
      { imgName: '医药健康', text: '医药健康' },
      { imgName: '家居', text: '家居时尚' },
      { imgName: '蛋糕', text: '烘焙蛋糕' },
      { imgName: '签到', text: '签到' },
      { imgName: '大牌免运', text: '大牌免运' },
      { imgName: '红包', text: '红包套餐' }
    ]
    return { iconItem }
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixin.scss';
.position {
  padding:.16rem .24rem .16rem 0;
  line-height:.22rem;
  position:relative;
  font-size:.16rem;
  color:$content-fontcolor;
  @include ellipses;
  .position__icon {
    font-size:.18rem;
    position:relative;
    top:.01rem;
  }
  .position__notice {
    position:absolute;
    top:.17rem;
    right:0;
    font-size:.22rem;
  }
}
.search {
  height: .32rem;
  background: $search-bgcolor;
  line-height:.32rem;
  color:#b7b7b7;
  border-radius:.16rem;
  font-size:.14rem;
  margin-bottom:.12rem;
  .iconfont {
    font-size:.14rem;
    display: inline-block;
    padding:0 .08rem 0 .16rem;
  }
  &__text {
    display: inline-block;
  }
}
a {
  text-decoration: none;
}
.banner {
  height:0;
  overflow: hidden;
  padding-bottom:25.4%;
  &__img {
    width:100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top:.16rem;
  &__item {
    width:20%;
    &__img {
      width:.4rem;
      height: .4rem;
      display: block;
      margin:0 auto;
    }
    &__desc {
      margin:.06rem 0 .16rem 0;
      text-align: center;
      color:$content-fontcolor;
    }
  }
}
.gap { background:$content-bgcolor; height: .1rem; margin:0 -.18rem;}
</style>
