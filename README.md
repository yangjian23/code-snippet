# @unicloud/code-snippet

## Description

It's a code snippet plugin for VS Code


## Purpose

插件收录了大部分 element-ui 组件的snippets 和一些常用的 js 代码片段，它能够帮你节省输入大段常用代码的时间，提高开发效率


## Usage
VS Code Extensions中安装插件 @unicloud/code-snippet

插件的 snippets 是以 @ 开头的一串字符，例如:
```
@log    // 对应 console.log()

@el-button // 对应 <el-button type=""></el-button>

...
```


## Dictionary
除了大部分 element-ui 组件外，还收录了如：
```
@template   // 通用的 Vue template

@message    // this.$message()

@messageBox-alert   // this.$alert()

@messageBox-confirm    // this.$confirm()

@messageBox-prompt  // this.$prompt()

...

```
另外还有一些常用的 JavaScript 片段，如：
```
@promise    // new Promise()

@setTimeout // setTimeout()

@setInterval    // setInterval()

@log    // console.log()

...

```
和一些进阶的 snippets，如：
```
@generate-store // 一个简单的 vuex 模板

@generate-router    // 一个简单的 router 模板

@generate-interceptors  // 基于@pillarjs/http 的简单拦截器

...
```

## and More
@unicloud/code-snippet 还在起步阶段，如果您有好的想法和需要补充的代码片段，欢迎留下 Issues ,我们将不断完善

