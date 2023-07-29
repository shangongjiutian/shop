<template>
    <div class="toast">{{message}}</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Toast',
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({ show: false, toastMessage: '', showClass: '' })
  const showToast = (message) => {
    toastData.show = TextTrackCueList
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { show, toastMessage } = toRefs(toastData)
  return { toastMessage, showToast, show }
}
</script>
<style lang="scss" scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.6);
    border-radius:.05rem;
    padding:.1rem;
    color:#fff;
}

</style>
