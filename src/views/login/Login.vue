<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
        <div class="wrapper__content">
            <input class="wrapper__content-input" v-model="username" placeholder="请输入用户名"/>
        </div>
        <div class="wrapper__content">
            <input class="wrapper__content-input" v-model="password" type="password" autocomplete="new-password" placeholder="请输入密码" />
        </div>
        <div class="wrapper__button">
            <button class="wrapper__button-button" @click="handleLogin">登录</button>
        </div>
        <div class="wrapper__link" @click="handleRegisterClick">立即注册</div>
        <Toast v-if="show" :message="toastMessage" />
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
      const { username, password } = data
      if (username.trim() === '' || password.trim() === '') {
        showToast('用户名或密码不能为空')
        return
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { handleLogin, username, password }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleLogin, username, password } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()

    return { handleLogin, handleRegisterClick, username, password, toastMessage, show }
  }
}

</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
    position: absolute;
    text-align:center;
    top:50%;
    left:0;
    right:0;
    transform: translateY(-60%);
    &__img {
        width:.66rem;
        height:.66rem;
        display: block;
        margin:0 auto .4rem auto;
    }
    &__content {
        height:.48rem;
        margin:0 .4rem .16rem .4rem;
        padding:0 .16rem;
        background: #F9F9F9;
        border: .01rem solid rgba(0,0,0,0.10);
        border-radius: .06rem;
        border-radius: .06rem;
        &-input {
            margin-top:.12rem;
            line-height: .22rem;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: .16rem;
            color:$content-fontcolor;
            &::placeholder {
                color: $content-notice-fontcolor;
            }
        }
    }
    &__button {
        margin: .32rem .4rem .16rem .4rem;
        &-button {
            height:.48rem;
            background: #0091FF;
            box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
            border-radius: .04rem;
            border-radius: .04rem;
            color: #fff;
            font-size: .16rem;
            text-align: center;
            width:100%;
            border:none;
        }
    }
    &__link {
        text-align: center;
        font-size: .14rem;
        color: $content-notice-fontcolor;
    }
}
</style>
