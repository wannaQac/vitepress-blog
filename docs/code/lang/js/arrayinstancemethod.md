## Array.prototype.splice()
删除或替换现有元素 或 添加新元素来更改数组的内容。

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```
* `start` 开始删除的坐标，从0开始
* `deleteCount` 要删除的元素个数，如果是0，则不删除
* `...items` 如果指定了 items, 如果 `deleteCount` 是0，则全部向后追加，如果 `deleteCount` 是正数，但是小于 `items` 的数量，则先替换后追加，如果 `deleteCount` 是正数，且大于 `items` 的数量，则先替换后删除

```js
// 追加
let arr = [1, 2, 3, 4, 5];
arr.splice(0, 0, 'item1');
// arr = ['item1', 1, 2, 3, 4, 5]

// 删除
let arr = [1, 2, 3, 4, 5];
arr.splice(0, 1);
// arr = [2, 3, 4, 5]

// 替换 + 删除
let arr = [1, 2, 3, 4, 5];
arr.splice(0, 2, 'item1');
// arr = ['item1', 3, 4, 5]

// 替换
let arr = [1, 2, 3, 4, 5];
arr.splice(0, 2, 'item1', 'item2');
// arr = ['item1', 'item2', 3, 4, 5]

// 替换 + 追加
let arr = [1, 2, 3, 4, 5];
arr.splice(0, 2, 'item1', 'item2', 'item3');
// arr = ['item1', 'item2', 'item3', 3, 4, 5]
```
