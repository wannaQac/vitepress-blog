# 动态对象

```vue
<template>
  <div>{{ object }}</div>
  <button @click="change">change</button>
</template>

<script lang="ts" setup>
const object = { name: 'John', age: 30, city: 'New York' }
const change = () => {
  object.name = 'dd'
  console.log(object)
}
</script>
<style scoped></style>

```
定义如上代码，点击change事件后虽然对象的属性改变了但是页面的内容并没有改变

# ref
```vue
<template>
  <div>{{ object }}</div>
  <button @click="change">change</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const Obj = {
  name:String,
  city:String
}
const object = ref<Obj>({ name: 'John', age: 30, city: 'New York' })
const change = () => {
  object.value.name = 'dd'
  console.log(object)
}
</script>
<style scoped></style>

```
ref需要使用 `.value` 访问或修改值

# reactive
```vue
<template>
  <div>
    <form>
      <input v-model="object.name" type="text" />
      <input v-model="object.city" type="text" />
      <button @click.prevent="change">Change</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const Obj = {
  name:String,
  city:String
}
const object = reactive<Obj>({
  name: 'aa',
  city: 'beijing'
});
const change = () => {
  object.name = 'dd'
  console.log(object)
}
</script>
<style scoped></style>

```