<template>
    <div class="wapper">
      <div class="top">
        <div class="admin">
          <img class="admin__photo" src="http://www.dell-lee.com/imgs/vue3/orange.png" />
          <h2 class="admin__name">好市民张三</h2>
          <p class="admin__id">ID: 1069643013</p>
          <ul class="admin__list">
            <li class="admin__list__item"><span>红包</span><br />218个</li>
            <li class="admin__list__item"><span>优惠券</span><br />12张</li>
            <li class="admin__list__item"><span>鲜豆</span><br />88个</li>
            <li class="admin__list__item"><span>白条</span><br />1000元</li>
          </ul>
        </div>
      </div>
      <div class="list">
        <div class="admin__wallet"><span class="admin__wallet__icon iconfont">&#xe627;</span><span class="admin__list__text">我的钱包</span><span class="iconfont admin__list__icon">&#xe6db;</span></div>
        <router-link to="/Address"><div class="admin__adress"><span class="admin__adress__icon iconfont">&#xe672;</span><span class="admin__list__text">我的地址</span><span class="iconfont admin__list__icon">&#xe6db;</span></div></router-link>
        <div class="admin__help"><span class="admin__help__icon iconfont">&#xe613;</span><span class="admin__list__text">帮助中心</span><span class="iconfont admin__list__icon">&#xe6db;</span></div>
      </div>
    </div>
    <Docker :currentIndex="3" />
</template>
<script>
import Docker from '../../components/Docker.vue'
export default {
  name: 'MyAdmin',
  components: { Docker }
}
</script>
<style lang="scss" scoped>
.wapper {
    position: absolute;
    left:0;top:0;bottom:.5rem;right:0;
    overflow-y: scroll;
    background: #f5f5f5;
}
.top {
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
  position: relative;
  height: 1.52rem;
  border-radius: 0 0 .4rem .4rem;
  padding-top:.98rem;
}
.admin {
  background: #FFFFFF;
  box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
  border-radius: .08rem;
  margin: 0 .18rem;
  text-align: center;
  &__photo {
    width:.94rem;
    height:.94rem;
    border-radius:100%;
    position: relative;
    margin:-.47rem auto 0 auto;
    display: inline-block;
  }
  &__name {
    margin:.1rem 0 0 0;
    line-height: .36rem;
    color: #333;
    font-size: .24rem;
    font-weight: normal;
  }
  &__id {
    margin:0;
    line-height: .2rem;
    color: #C1C0C9;
    font-size:.14rem;
    border-bottom:.01rem solid #f1f1f1;
    padding:.1rem 0;
  }
  &__list {
    display: flex;
    padding: .1rem .18rem .18rem .18rem;
    margin:0;
    &__item {
      span {display: inline-block; font-size:.12rem; color: #c1c0c9; line-height: .28rem;}
      flex:1;
      list-style-type: none;
      font-size:.2rem;
      color:#262628;
    }
  }
}
.list {
  background: #FFFFFF;
  box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
  border-radius: .08rem;
  margin: .8rem .18rem 0 .18rem;
  padding: .16rem;
  .admin__wallet, .admin__adress, .admin__help {
    line-height: .22rem;
    display: flex;
    padding:.1rem 0;
    font-size:.14rem;
    color: #333;
    &__icon {
      font-size:.22rem;
      display: inline-block;
      margin-right:.1rem;
      color:#ED4A47;
    }
  }
  .admin__adress {
    &__icon {
      font-size:.22rem;
      display: inline-block;
      margin-right:.1rem;
      color:#32C5FF;
    }
  }
  .admin__help {
    &__icon {
      font-size:.22rem;
      display: inline-block;
      margin-right:.1rem;
      color:#9013FE;
    }
  }
}
.admin__list__text {
  flex:1;
}
.admin__list__icon {
  transform: rotate(180deg);
  transform-origin: center;
  font-size:.18rem;
}
</style>
