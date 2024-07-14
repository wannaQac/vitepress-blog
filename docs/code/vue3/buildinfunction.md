# Vue3 内置的指令

## v-text
更新元素的文本内容
* 期望的绑定值类型: `string`
* `v-text` 通过设置元素的 `textContent` 属性来工作，因此它将覆盖元素中所有现有的内容。

```vue
<span v-text="msg"></span>
<!-- 等同于 -->
<span>{{msg}}</span>
```

## v-html
更新元素的 `innerHTML`，可以解析 `html` 标签，但是 `v-text` 不行
* 期望的绑定值类型: `string`
* `v-html` 的内容直接作为普通 `HTML` 插入—— `Vue` 模板语法是不会被解析的。如果你发现自己正打算用 `v-html` 来编写模板，不如重新想想怎么使用组件来代替。

::: warning 安全说明
在你的站点上动态渲染任意的 `HTML` 是非常危险的，因为它很容易导致 `XSS` 攻击。请只对可信内容使用 `HTML` 插值，绝不要将用户提供的内容作为插值
:::

```vue
<div v-html="html"></div>
```

## v-show
基于表达式值的真假性，来改变元素的可见性
* 期望的绑定值类型: `any`
* `v-show` 通过设置内联样式的 `display CSS` 属性来工作，当元素可见时将使用初始 `display` 值。当条件改变时，也会触发过渡效果。

如果初始条件为假，内容也会渲染
```vue
<div v-if="isShow">true</div>
<!--生成内容-->
<div style="display: none;">true</div>
```

## v-if
基于表达式值的真假性，来条件性地渲染元素或者模板片段
* 期望的绑定值类型: `any`
* 当 `v-if` 元素被触发，元素及其所包含的指令/组件都会销毁和重构。如果初始条件是假，那么其内部的内容根本都不会被渲染。当条件改变时会触发过渡效果。

如果初始条件为假，内容不会渲染，会生成一个 `<!--v-if-->` 注释
```vue
<div v-if="isShow">true</div>
<!--生成内容-->
<!--v-if-->
```

## v-else-if 和 v-else
```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```
## v-on
给元素绑定事件监听器
* 缩写：`@`
* 期望的绑定值类型：`Function` | `Inline Statement` | `Object` (不带参数)
* 修饰符
* `.stop` - 调用 `event.stopPropagation()`
* `.prevent` - 调用 `event.preventDefault()`
* `.capture` - 在捕获模式添加事件监听器
* `.self` - 只有事件从元素本身发出才触发处理函数
* `.{keyAlias}` - 只在某些按键下触发处理函数
* `.once` - 最多触发一次处理函数
* `.left` - 只在鼠标左键事件触发处理函数
* `.right` - 只在鼠标右键事件触发处理函数
* `.right` - 只在鼠标右键事件触发处理函数
* `.passive` - 通过 { passive: true } 附加一个 DOM 事件

### 简单用法和动态绑定
```vue
<template>
  <div @click="con">click!</div>
  <!--支持动态绑定事件-->
  <div @[event]="con">click!</div>
</template>

<script setup lang="ts">
const event = 'click';
const con = () => {
  console.log('click')
}
</script>
```

### 修饰符应用
对于下面代码，点击 `click!`，`js` 会冒泡执行 `parent` 事件，如果使用了 `@click.stop="child"`，则 `parent` 事件不会执行
```vue
<template>
  <div @click="parent">
    <div @click="child">click!</div>
    <!--使用了.stop则阻止了冒泡-->
    <!--<div @click.stop="child">click!</div>-->
  </div>
</template>

<script setup lang="ts">
const parent = () => {
  console.log('i am parent')
}
const child = () => {
  console.log('i am child')
}
</script>
```

## v-bind
动态的绑定一个或多个 `attribute`，也可以是组件的 `prop`
* 缩写：`:`
* 期望的绑定值类型: `any (带参数)` | `Object (不带参数)`
* 当用于绑定 `class` 或 `style` attribute，`v-bind` 支持额外的值类型如数组或对象。详见下方的指南链接。

```vue
<!-- 绑定 attribute -->
<img v-bind:src="imageSrc" />
<!-- style 绑定 -->
<div :style="{color: 'red', border: '1px'}"></div>
```

## v-model
在表单输入元素或组件上创建双向绑定
* **期望的绑定值类型**：根据表单输入元素或组件输出的值而变化
* 限定元素：`<input>` `<select>` `<textarea>` `components`
```vue
<template>
  <input v-model="a"></input>
  <div>{{ a }}</div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
const a = ref('default');
</script>
```

## v-for
循环，基于原始数据多次渲染元素或模板块
* **期望的绑定值类型**：`Array` | `Object` | `number` | `string` | `Iterable`
```vue
<template>
  <div v-for="str in arr">{{ str }}</div>
  <div v-for="(str, index) in arr">{{ index }}-{{ str }}</div>
</template>

<script setup lang="ts">
const arr:string[] = ['a', 'b', 'c'];
</script>
```