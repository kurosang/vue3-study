<template>
  <router-link to="/about">点这里去关于我们页面</router-link>
  <hr />
  <div class="home"></div>
</template>

<script>
// 需要使用计算属性，也需要从 vue 中导出引入
import { ref, reactive, watch } from 'vue'
// 导出依然是个对象，不过对象中只有一个 setup 函数
export default {
  setup() {
    // 侦听一个 getter
    const state = reactive({ count: 0 })
    watch(
      () => state.count,
      (count, prevCount) => {
        /* ... */
        console.log(count, prevCount)
      }
    )

    // 直接侦听一个 ref
    const count = ref(0)
    const count2 = ref(1)
    // watch(count, (count, prevCount) => {
    //   /* ... */
    //   console.log(count, prevCount)
    // })

    watch([count, count2], ([foo, bar], [prevFoo, prevBar]) => {
      /* ... */
      console.log(foo, bar, prevFoo, prevBar)
    })

    setTimeout(() => {
      count.value++
      state.count++
      // -> 打印出 1
    }, 100)
  },
}
</script>
