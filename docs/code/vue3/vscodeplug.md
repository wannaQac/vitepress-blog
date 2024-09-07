# Vscode 配置

## Vscode Vue 插件
### Vue2
* Vetur
### Vue3
* Vue - Official

## 代码片段设置
`Vscode` 左下角设置-代码片段-搜索或者键入 `vue` 进行 `vue.json` 的设置，参考内容如下，这允许你在某个 `.vue` 后缀的空文件中输入 `vue3` 的时候默认生成 `body` 中的内容
```
{
	"Print to console": {
		"prefix": "vue3",
		"body": [
			"<template>",
			"",
			"  <div></div>",
			"",
			"</template>",
			"",
			"<script setup lang='ts'>",
			"import { ref, reactive } from 'vue'",
			"",
			"</script>",

			"<style scoped>",
			"",
			"</style>",
		],
		"description": "Log output"
	}
}
```