<template>
  <router-link to="/about">点这里去关于我们页面</router-link>
  <hr />
  <div class="home"></div>
</template>

<script>
// 需要使用计算属性，也需要从 vue 中导出引入
import { ref, watchEffect } from 'vue'
// 导出依然是个对象，不过对象中只有一个 setup 函数
export default {
  setup() {
    // 定义一个 count 的响应式数据，并赋值为 0
    const count = ref(0)

    const stop = watchEffect((onInvalidate) => {
      console.log(count.value)

      onInvalidate(() => {
        // id 改变时 或 停止侦听时
        // 取消之前的异步操作
        console.log('onInvalidate')
      })
    })
    // -> 打印出 0

    setTimeout(() => {
      count.value++
      // -> 打印出 1
    }, 100)
    setTimeout(() => {
      stop()
    }, 200)
    setTimeout(() => {
      count.value++
    }, 300)
    return {}
  },
}
</script>
