# watch

### 最简单的监听
最简单的监听可以监听一个或者多个响应式对象
```vue
<template>
  <div>
    <input v-model="message" />
    <input v-model="message2" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

let message = ref('1')
let message2 = ref('2')
/*
watch(message, (newValue, oldValue) => {
  console.log(`Message changed from "${oldValue}" to "${newValue}"`)
})
*/
watch([message, message2], (newValue, oldValue) => {
  console.log(oldValue, newValue)
})
</script>
<style scoped></style>
```
### deep
```vue
<template>
  <div>
    <input v-model="obj.v1.v2.name" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

let obj = ref({
  v1: {
    v2: {
      name: 'v3'
    }
  }
})
console.log(obj.value)

watch(obj, (newValue, oldValue) => {
  console.log('Object changed:', newValue, oldValue)
}, { deep: true })

</script>
<style scoped></style>
```
监听对象时，ref默认不开启deep，reactive默认开启deep，deep可以监听对象深度内容的变化，比如例子中obj.v1.v2.name发生了改变

### immediate
```vue
<template>
  <div>
    <input v-model="obj.v1.v2.name" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

let obj = ref({
  v1: {
    v2: {
      name: 'v3'
    }
  }
})
console.log(obj.value)

watch(obj, (newValue, oldValue) => {
  console.log('Object changed:', newValue, oldValue)
}, { deep: true, immediate: true })

</script>
<style scoped></style>
```
页面初始化后立马执行一次当前watch函数内的callback