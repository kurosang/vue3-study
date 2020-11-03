<template>
  <div ref="root"></div>
  <div
    v-for="(item, i) in list"
    :key="i"
    :ref="
      (el) => {
        divs[i] = el
      }
    "
  >
    {{ item }}
  </div>
</template>

<script>
import { ref, reactive, onBeforeUpdate, onMounted } from 'vue'

export default {
  setup() {
    const root = ref(null)

    onMounted(() => {
      // 在渲染完成后, 这个 div DOM 会被赋值给 root ref 对象
      console.log(root.value) // <div/>
    })

    const list = reactive([1, 2, 3])
    const divs = ref([])

    // 确保在每次变更之前重置引用
    onBeforeUpdate(() => {
      console.log(divs)
      divs.value = []
    })

    setTimeout(() => {
      list.push(4)
    }, 200)

    return {
      root,
      list,
      divs,
    }
  },
}
</script>
