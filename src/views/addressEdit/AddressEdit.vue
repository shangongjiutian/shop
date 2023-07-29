<template>
    <div class="wapper">
        <div class="title">
            <span class="back iconfont" @click="handleBackClick">&#xe6db;</span>
            {{isEdit ? '编辑' : '新增'}}收货地址
            <span class="add" @click="handleSaveClick">保存</span>
      </div>
      <div class="content">
        <div class="content__item">
            <span class="content__item__label">所在城市：</span>
            <input class="content__item__input" placeholder="如北京市" v-model="city" />
        </div>
        <div class="content__item">
            <span class="content__item__label">小区/大厦/学校：</span>
            <input class="content__item__input" placeholder="如理工大学国防科技园" v-model="department" />
        </div>
        <div class="content__item">
            <span class="content__item__label">楼号-门牌号：</span>
            <input class="content__item__input" placeholder="A号楼B层" v-model="houseNumber" />
        </div>
        <div class="content__item">
            <span class="content__item__label">收货人：</span>
            <input class="content__item__input" placeholder="请填写收货人的姓名" v-model="name" />
        </div>
        <div class="content__item">
            <span class="content__item__label">联系电话：</span>
            <input class="content__item__input" placeholder="请填写收货手机号" v-model="phone" />
        </div>
      </div>
      <Toast v-if="show" :message="toastMessage" />
    </div>
</template>
<script>
import { useRouter, useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import Toast, { useToastEffect } from '../../components/Toast'
import { post } from '../../utils/request'
export default {
  name: 'AddressEdit',
  components: { Toast },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const handleBackClick = () => {
      router.back()
    }
    const city = ref('')
    const department = ref('')
    const houseNumber = ref('')
    const name = ref('')
    const phone = ref('')
    const id = route.query.id
    onBeforeMount(async () => {
      if (id) {
        const result = await post(`/api/user/address/${id}`)
        if (result?.errno === 0) {
          const data = result.data
          city.value = data.city
          department.value = data.department
          houseNumber.value = data.houseNumber
          name.value = data.name
          phone.value = data.phone
          // console.log(result)
        }
        // console.log(result)
      }
    })
    const handleSaveClick = async () => {
      if (!city.value || !department.value || !houseNumber.value || !name.value || !phone.value) {
        showToast('所有内容必填')
      } else {
        if (id) {
          const result = await post(`/api/user/address/${id}`, { city: city.value, department: department.value, houseNumber: houseNumber.value, name: name.value, phone: phone.value })
          if (result?.errno === 0) {
            router.back()
          }
        } else {
          const result = await post('/api/user/address', { city: city.value, department: department.value, houseNumber: houseNumber.value, name: name.value, phone: phone.value })
          if (result?.errno === 0) {
            router.back()
          }
        }
      }
    }
    const { show, toastMessage, showToast } = useToastEffect()
    return { city, department, houseNumber, name, phone, handleBackClick, handleSaveClick, show, toastMessage, showToast, isEdit: !!id }
  }
}
</script>
<style lang="scss" scoped>
.wapper {
  position: absolute;
  right:0; top:0; bottom:0; left:0;
  overflow-y: scroll;
  background: #f5f5f5;
}
.title {
  height:.44rem;
  background: #fff;
  font-size:.16rem;
  color: #333;
  line-height: .44rem;
  text-align:center;
  padding:0 .2rem;
  position: relative;
  .back {
    font-size:.22rem;
    color:#b6b6b6;
    position: absolute;
    left:.16rem;
  }
  a {color:#333;}
  .add {
    font-size:.14rem;
    right:.2rem;
    position: absolute;
  }
}
.content {
    background: #fff;
    margin-top:.12rem;
    padding:0 .18rem;
    &__item {
        line-height: .44rem;
        height: .44rem;
        overflow: hidden;
        border-bottom:.01rem solid #f1f1f1;
        display: flex;
        &__label {
            color:#666;
            font-size:.14rem;
        }
        &__input {
            border:none;
            outline: none;
            font-size:.14rem;
            width:100%;
            flex:1;
        }
        ::placeholder {
            color: #999;
        }
    }
}
</style>
