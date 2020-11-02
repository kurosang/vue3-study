# vue3-study

vue3 Composition API 学习记录

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

### 3-1 普通组件的开发与使用

---
