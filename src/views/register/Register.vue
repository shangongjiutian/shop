<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
        <div class="wrapper__content">
            <input class="wrapper__content-input" v-model="username" placeholder="请输入用户名"/>
        </div>
        <div class="wrapper__content">
            <input class="wrapper__content-input" v-model="password" type="password" autocomplete="new-password" placeholder="请输入密码" />
        </div>
        <div class="wrapper__content">
            <input class="wrapper__content-input" v-model="ensurement" type="password" placeholder="请确认密码" />
        </div>
        <div class="wrapper__button">
            <button class="wrapper__button-button" @click="handleRegister">立即注册</button>
        </div>
        <div class="wrapper__link" @click="handleLogin">已有账号去登录</div>
        <Toast v-if="show" :message="toastMessage" />
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '', ensurement: '' })
  const handleRegister = async () => {
    try {
      const { username, password, ensurement } = data
      if (username.trim() === '' || password.trim() === '') {
        showToast('用户名或密码不能为空')
        return
      }
      if (password !== ensurement) {
        showToast('密码输入不一致')
        return
      }
      if (username.length < 6) {
        showToast('用户名太短')
        return
      }
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password,
        ensurement: data.ensurement
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { handleRegister, username, password, ensurement }
}
export default {
  components: { Toast },
  name: 'Register',
  setup () {
    const router = useRouter()
    const { show, toastMessage, showToast } = useToastEffect()
    const { handleRegister, username, password, ensurement } = useRegisterEffect(showToast)
    const handleLogin = () => {
      router.push({ name: 'Login' })
    }
    return { handleLogin, handleRegister, username, password, ensurement, toastMessage, show }
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
