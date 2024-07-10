# Vue3 支持的模板语法

## Vue2 Option API
```html
<template>
  <div>{{ age }}</div>
</template>

<script>
export default {
  data() {
    return {
      age: 18
    }
  }
}
</script>
```
## Vue3 Setup 函数
```html
<template>
  <div>{{ age }}</div>
</template>

<script>
export default {
  setup () {
    const age = 18;
    return {
      age
    }
  }
}
</script>
```

## Vue3 Setup 语法糖
```html
<template>
  <div>{{ age }}</div>
</template>

<script setup lang="ts">
const age:number = 18;
</script>
```