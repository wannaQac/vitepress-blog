# watchEffect

### 常规用法+防抖
```vue
<template>
  <div>
    <input v-model="message" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
let message = ref<string>('1');
let message2 = ref<string>('2');

watchEffect((oninvalidate) => {
  console.log('message:', message.value);
  console.log('message2:', message2.value);
  oninvalidate(() => {
    console.log('onInvalidate called');
    // 做一些防抖等等，先执行
  });
});
</script>
<style scoped></style>
```
`watchEffect` 默认就在页面加载完时先执行一次，相当于 `immediate+watch`

除此之外还可以通过配置回调函数，让之后值再变化的时候，先执行这个回调函数，往往可以在回调函数里写一些防抖等内容
### 停止监听
```vue
<template>
  <div>
    <input v-model="message" />
  </div>
  <div>
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
let message = ref<string>('1');
let message2 = ref<string>('2');

const stop = watchEffect((oninvalidate) => {
  console.log('message:', message.value);
  console.log('message2:', message2.value);
  oninvalidate(() => {
    console.log('onInvalidate called');
    // 做一些防抖等等，先执行
  });
});

const stopWatch = () => {
  stop();
  console.log('watchEffect stopped');
};
</script>
<style scoped></style>
```
除此之外，`watchEffect` 本身返回一个停止函数，只要调用则会停止监听。深层次的说是 `watchEffect` 本身也是从 `vue` 里 `import` 出来的函数，它的函数返回值是一个函数，执行返回值函数会清除侦听器


### flush
类似 `watch` ， `watchEffect` 也可以配置参数，尤其要讲的是 `flush`
* pre 默认的，组件更新前执行
* sync 强制效果始终同步触发
* post 组件更新后执行