# toRef
```vue
<template>
  <div>
    {{ obj }}
  </div>
  <div>
    {{ city }}
  </div>
  <div>
    <button @click="change">Change!</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive,toRef } from 'vue';
const obj = reactive({name: 'John', age: 30, city: 'New York'});
const city = toRef(obj, 'city');
const change = () => {
  city.value = 'Los Angeles';
  console.log(obj);
};
</script>
<style scoped></style>
```
`toRef` 重要的目的是可以将某个响应式对象的某个属性包装成为一个响应式对象供外部使用，而不用暴露整个响应式对象，比如一个对象多层嵌套，`obj.xx.xx.xx.key`，我们可以直接 `const key = toRef(obj, 'xx.xx.xx.key')` ，后续只要操作 `key` 就行。除此之外暂时还没找到 `toRef` 的其他有用的使用场景

# toRefs
```vue
<template>
  <div>
    {{ obj }}
  </div>
  <div>
    {{ city }}
  </div>
  <div>
    <button @click="change">Change!</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive,toRefs } from 'vue';
const obj = reactive({name: 'John', age: 30, city: 'New York'});
const {name,age,city} = toRefs(obj);
const change = () => {
  city.value = 'Los Angeles';
  console.log(obj);
};
</script>
<style scoped></style>
```
`toRefs` 可以直接解构整个对象，返回一堆响应式对象


# toRaw
```vue
<template>
  <div>
    {{ obj }}
  </div>
  <div>
    {{ city }}
  </div>
  <div>
    <button @click="change">Change!</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive,toRaw } from 'vue';
const obj = reactive({name: 'John', age: 30, city: 'New York'});
const change = () => {
  console.log(obj, toRaw(obj),obj['__v_raw']);
};
</script>
<style scoped></style>
```
`toRaw` 本质上只是将其还原为一个基本的对象，适用于我们不需要一个响应式对象，我们只是希望知道对象的数据， `toRaw` 其实就是访问了对象的一个隐藏属性 `__v_raw`