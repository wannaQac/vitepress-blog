# computed
什么是计算属性？当依赖的属性的值发生变化的时候，会触发更改，如果依赖的值不发生变化使用缓存中的属性值

computed 支持两种用法，选项式用法和函数式用法，最简单的也是最常用的就是函数式用法，因为我们往往只需要get，而不需要去手动set

### computed 函数式
```vue
<template>
  <div>
    姓：<input v-model="firstname" />
  </div>
  <div>
    名：<input v-model="lastname" />
  </div>
  <div>
    全名：{{ fullname }}
  </div>
</template>

<script lang="ts" setup>
import { ref,computed } from 'vue';

const firstname = ref('');
const lastname = ref('');
const fullname = computed(() => {
  return `${firstname.value} ${lastname.value}`;
})
</script>
<style scoped></style>
```
函数式写法只能是读取，不允许修改值

### computed 选项式
```vue
<template>
  <div>姓：<input v-model="firstname" /></div>
  <div>名：<input v-model="lastname" /></div>
  <div>全名：{{ fullname }}</div>
  <div>
    <button @click="changeName">Change</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const firstname = ref('')
const lastname = ref('')
const fullname = computed<string>({
  get() {
    return `${firstname.value}-${lastname.value}`
  },
  set(newVal) {
    [firstname.value, lastname.value] = newVal.split('-')
  },
})
const changeName = () => {
  fullname.value = '李-四'
}
</script>
<style scoped></style>
```
选项式写法还允许修改值