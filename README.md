# vue3-study

vue3 Composition API 学习记录 [中文文档](https://composition-api.vuejs.org/zh/api.html)

使用：`npm run serve --src={每一节的编号}`

例如：`npm run serve --src=1`

不可以使用 yarn

---

## 知识点

### 1 vueRouter 使用

### 2-1 setup 函数 响应数据的绑定

### 2-2 setup 函数 响应对象数据的绑定

reactive 和 ref 的区别就是，reactive 是处理对象或者数组的。

### 2-3 setup 函数 生命周期函数

vue 2.0 生命周期对比 3.0 生命周期

| 2.0 周期名称  | 3.0 周期名称    | 说明                          |
| ------------- | --------------- | ----------------------------- |
| beforeCreate  | setup           | 组件创建之前                  |
| created       | setup           | 组件创建完成                  |
| beforeMount   | onBeforeMount   | 组件挂载之前                  |
| mounted       | onMounted       | 组件挂载完成                  |
| beforeUpdate  | onBeforeUpdate  | 数据更新，虚拟 DOM 打补丁之前 |
| updated       | onUpdated       | 数据更新，虚拟 DOM 渲染完成   |
| beforeDestroy | onBeforeUnmount | 组件销毁之前                  |
| destroyed     | onUnmounted     | 组件销毁后                    |

### 2-4 setup 函数 计算属性 computed

### 2-5 setup 函数 watchEffect

### 2-6 setup 函数 watch

### 2-7 模板 Refs

### 3-1 普通组件的开发与使用

### 3-2 vue 组件的具名插槽 slot 的变化

我们的父组件获取子组件传值，可以通过 v-slot 的自定义命名值来获取对象数据。

而子组件给父组件传值，如果是传单个值，可以用 :color="color" 这样的语法来进行传值。如果要传多个数据，则可以使用 v-bind 来传一个对象出去。

### 3-2 函数组件的开发与使用

---
