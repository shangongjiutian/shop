<template>
    <div class="wapper">
        <div class="search">
            <span class="search__icon iconfont">&#xe615;</span>
            <input class="search__area" placeholder="新鲜水果" @change="handleSearchChange"/>
            <div class="search__cancel" @click="handleCancelClick">取消</div>
        </div>
        <div class="record" v-if="history.length">
            <div class="record__top">
                <div class="record__title">搜索历史</div>
                <div class="record__clear" @click="handleClearClick">清除搜索历史</div>
            </div>
            <div class="record__content">
                <ul>
                    <li v-for="item in history" :key="item"  @click="() => goToSearchList(item)">{{item}}</li>
                </ul>
            </div>
        </div>
        <div class="record">
            <div class="record__top">
                <div class="record__title">热门搜索</div>
            </div>
            <div class="record__content">
                <ul>
                    <li v-for="item in hotWords" :key="item" @click="() => goToSearchList(item)">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { get } from '../../utils/request'
// 热门搜索相关逻辑
const useHotWordListEffect = () => {
  const hotWords = ref([])
  const getHotWords = async () => {
    const result = await get('/api/shop/search/hot-words')
    if (result?.errno === 0 && result?.data) {
      hotWords.value = result.data
    }
  }
  return { hotWords, getHotWords }
}
export default {
  name: 'Search',
  setup () {
    const router = useRouter()
    const history = ref(JSON.parse(localStorage.history || '[]'))
    // 当用户输入搜索内容后，执行操作
    const handleSearchChange = (e) => {
      const searchValue = e.target.value
      if (!searchValue) return
      const hasValue = history.value.find(item => item === searchValue)
      if (!hasValue) {
        history.value.push(searchValue)
        localStorage.history = JSON.stringify(history.value)
      }
      router.push(`/searchList?keyword=${searchValue}`)
    }
    const handleClearClick = () => {
      history.value = []
      localStorage.history = JSON.stringify([])
    }
    const handleCancelClick = () => {
      router.back()
    }
    const goToSearchList = (keyword) => {
      router.push(`/searchList?keyword=${keyword}`)
    }
    const { hotWords, getHotWords } = useHotWordListEffect()
    getHotWords()
    return { handleSearchChange, history, handleClearClick, handleCancelClick, hotWords, getHotWords, goToSearchList }
  }
}
</script>
<style lang="scss" scoped>
.wapper {
    margin:0 .18rem;
}
.search {
    display: flex;
    position: relative;
    line-height:.32rem;
    height:.32rem;
    margin-top:.16rem;
    color:#333;
    &__icon {
        position: absolute;
        left:.16rem;
        color:#b7b7b7;
        top:.02rem;
    }
    &__area {
        flex:1;
        height:.32rem;
        border-radius:.16rem;
        border:none;
        background: #f5f5f5;
        outline: none;
        padding-left:.46rem;
        font-size:.14rem;
        color:#333;
    }
    &__cancel {
        font-size:.16rem;
        margin-left:.12rem;
    }
}
.record {
    margin-top:.24rem;
    &__top {
        display: flex;
        color: #333;
        line-height: .22rem;
    }
    &__title {
        font-size:.16rem;
        flex: 1;
    }
    &__clear {
        font-size:.14rem;
    }
    &__content {
        margin-top:.1rem;
        ul {
            margin:0;
            padding:0;
            list-style-type: none;
            li {
                display: inline-block;
                height:.32rem;
                background: #f5f5f5;
                border-radius:.02rem;
                line-height: .32rem;
                color: #666;
                font-size:.14rem;
                padding:0 .1rem;
                margin-right:.1rem;
                margin-top:.1rem;
            }
        }
    }
}
</style>
