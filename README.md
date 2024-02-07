# wangEdiotr-plugin-gap-filling

## 介绍

这是一个用于在 wangEditor 中插入填空题空格的插件

## 安装

```shell
npm install wangEditor-plugin-gap-filling
```

## 使用

### 注册到编辑器

```js
import { Boot } from "@wangeditor/editor";
import gapFillingModule from "wangEditor-plugin-gap-filling";

// 注册。要在创建编辑器之前注册，且只能注册一次，不可重复注册。
Boot.registerModule(gapFillingModule);
```

### 配置

```js
const toolbar = createToolbar({
  editor,
  selector: "#toolbar-container",
  config: {
    insertKeys: {
      index: 0,
      keys: ["gapFilling"],
    },
  },
});
```
