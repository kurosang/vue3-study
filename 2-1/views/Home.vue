<template>
  <router-link to="/about">点这里去关于我们页面</router-link>
  <div class="home">
    这里是一个计数器 >>> <span class="red">{{ count }}</span> <br />
    <button @click="countAdd">{{ btnText }}</button>
  </div>
</template>

<script>
// ref 是 vue 3.0 的一个重大变化，其作用为创建响应式的值
import { ref } from 'vue'
// 导出依然是个对象，不过对象中只有一个 setup 函数
export default {
  setup() {
    // 定义一个不需要改变的数据
    const btnText = '点这个按钮上面的数字会变'
    // 定义一个 count 的响应式数据，并赋值为 0
    const count = ref(0)
    // 定义一个函数，修改 count 的值。
    const countAdd = () => {
      count.value++
    }
    // 导出一些内容给上面的模板区域使用
    return {
      btnText,
      count,
      countAdd,
    }
  },
}
</script>
<style scoped>
.home {
  line-height: 2;
}
.red {
  color: red;
}
</style>
