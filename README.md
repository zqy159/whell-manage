# 个人编写的文档

基于[vuepress 1.x](https://v1.vuepress.vuejs.org/zh/)文档系统，以 makrdown 格式编写项目文档，支持多语言。

> `/docs/`目录中存放原始 markdown 文件

## 开始

必备知识:

- 熟悉 [markdown](http://www.markdown.cn/) 语法格式
- 熟悉 vuepress 的 [markdown 拓展语法](https://v1.vuepress.vuejs.org/zh/guide/markdown.html)
- 更多参见[markdown 说明](./docs/markdown.md)

## CLI 说明

```bash
# 安装依赖
yarn install
# 开始写作
yarn serve

# 生成静态HTML文件
yarn build

# 导出pdf
yarn export
```

## 环境变量配置说明

[/docs/.env](./docs/.env)

```yaml
# 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。
# 如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，
# 那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
# base 将会自动地作为前缀插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。
base = /
# 指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析。
dest = ./dist
# 写作环境运行端口
port  = 9000
```
