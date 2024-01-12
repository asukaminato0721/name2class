# Name2class

Usage:

right click a name / or choose a string, add

```js
class name {}
```

at top of it.

---

## Background

vscode 有什么插件可以让 ts 快速生成 type 吗？

我的要求很简单，就是能生成 `type ABC = {}`

webstorm 没这个烦恼，但是我团队的人用的是 vscode

因为我习惯是先写 type 后补全，我的 type 相对来说比较好补全。

但是我发现 vscode 没这么方便（

我安装的 snippet 不支持这个功能，还是说有触发的条件？

webstorm 就简单多了（

snippet只能你写个简单的触发条件

没法自动插

那就麻烦一点了，如果其他人有相关的插件欢迎推荐一下，谢谢

这就是我的习惯，现有 type 名称再有数据，所以想在 vscode 上复刻下（

问题是在于创建，不打断思路。

比如说这个 A 接口的数据类型现在还没有出来，我就创建 IAPI.A 这个类型（此时为空），等后期用到发现要加字段再来加

目的是为了所有的 API 等数据源头不会缺失 type（有些人懒）

class 是只要
class Name {

}
吗

对

后期来体操就可以了

有了 type 后续的流程就简单了，用什么加什么，不需要提前定义（
