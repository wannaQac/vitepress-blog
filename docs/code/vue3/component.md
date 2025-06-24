# 什么是组件
一个 `.vue` 文件就是一个组件

# 如何引入组件
直接 `import` 进来就当一个元素用就行了

`App.vue`
```vue
<template>
  <A></A>
  <A></A>
  <A></A>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import A from './components/A.vue'
</script>
<style scoped></style>
```
`A.vue`
```vue
<template>
    <div>我是组件</div>
</template>

<script lang="ts" setup>
</script>
```

# 组件的生命周期
如果我们使用 `options API` 往往会知道有 `beforeCreated, created` 等生命周期钩子，但是 `setup` 语法糖没有这两个生命周期，其他照旧


从创建到改变到销毁，创建也分为即将创建和创建成功后，更新分为即将更新和更新后，我们可以观察到dom元素的是否改变来区分。
`App.vue`
```vue
<template>
  <A v-if="flag"></A>
  <button @click="destoryA">创建和销毁</button>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import A from './components/A.vue'

const flag = ref<Boolean>(true);
const destoryA = () => {
  flag.value = !flag.value;
}
</script>
<style scoped></style>
```
`A.vue`
```vue
<template>
    <div>我是组件</div>
    <div ref="div">{{ str }}</div>
    <button @click="change">修改</button>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
const str = ref<string>('aaa');
const div = ref<HTMLDivElement>();
const change = () => {
    str.value = 'bbb';
    console.log('修改了str', str.value);
}
// 创建之前
onBeforeMount(() => {
    console.log('onBeforeMount: 组件即将挂载', div.value)
})
// 创建完成
onMounted(() => {
    console.log('onMounted: 组件已挂载', div.value)
})
// 更新之前
onBeforeUpdate(() => {
    console.log('onBeforeUpdate: 组件即将更新', div.value?.innerText)
})
// 更新完成
onUpdated(() => {
    console.log('onUpdated: 组件已更新', div.value?.innerText)
})
// 销毁之前
onBeforeUnmount(() => {
    console.log('onBeforeUnmount: 组件即将销毁')
})
// 销毁完成
onUnmounted(() => {
    console.log('onUnmounted: 组件已销毁')
})
</script>
```