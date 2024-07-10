# 新特性

## 重写数据双向绑定
`vue2` 采用 `Object.defineProperty()`，`vue3` 基于 `Proxy`

为什么这么做？
* `defineProperty()` 对数组支持不友好，需要重写数组的方法，并且直接修改数组的 `length` 是不被监听的
* 代码更简化，可以监听动态新增的属性和删除的属性
## VDOM性能提升
`vue2` 中每次 `diff` 都是全量对比，`vue3` 则区分了哪些是动态的添加标记，哪些是静态的则没有标记，只对带有标记的进行对比，提升了性能
## Fragments
* `vue3` 中 `<template></template>` 中可以写多个同级节点了，但是 `vue2` 只能有一个节点
```html
<!-- vue3 举例 -->
<template>
    <div></div>
    <div></div>
</template>
```
* 支持 `JSX` 语法
* 新增组件 `Suspense` 和 `teleport`
## Tree-Shaking
`vue3` 可以在保持代码运行结果不变的前提下，去掉无用的代码，也就是按需引入
## Composition API
* `Setup` 语法糖编程，例如 `ref`, `reactive`, `watch` 等