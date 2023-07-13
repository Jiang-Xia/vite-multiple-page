# <center>Vite 多页面项目</center>


### 1.项目结构

```
├── README.md
├── dist //打包输出目录
├── assets //公共资源
├── scripts //新建页面脚本和模板
├── src
│   ├── store        //pinia 共享状态存储库
│   ├── global        //全局公用
│   └── projects     //多页面文件夹,目录下一个文件夹为一个项目（页面）
├── types  //ts 声明文件
├── .env.development   //开发环境-环境变量
├── .env.production    //生产环境-环境变量
├── .eslintrc.cjs      //eslint 配置
├── .gitignore         //git 提交忽略文件
├── tsconfig.json      //ts 配置
├── tsconfig.node.json //vite在node环境中的 ts 规则
├── vite.config.ts     //vite 配置
├── package.json
```

### 2.如何使用

**安装依赖**
```
npm install
```
> 创建子项目

```js
npm run newPage
//然后会提示：请输入要生成的'页面名称:页面描述'、会生成在 /src/projects 目录下
//注意： 有两个页面模版，如果要用ts，可以执行  npm run newPage --ts
// --ts为使用ts模板
例如输入：newAdmin:新管理端
//完成后 会在 scripts/multiPages.json 中生成对应的数据 后期删除需要删除对应的数据来保持一致 内容数据如下：
[
    {
        "page": "admin",
        "desc": "管理端"
    },
    {
        "page": "client",
        "desc": "客户端"
    },
]
```

**运行指定项目**

```js
/* 
配置参数，在命令行上放置--foo bar设置foo配置参数为bar。 一个 -- 参数(argument)告诉cli解析器停止读取flags.一个 在命令行结尾的--flag参数(parameter)的值将会是true。
然后在vite.config.ts中可以获取参数来进行打包对应的项目
用 process.env.npm_config_page 获取参数 
*/
npm run dev --page=页面名称
// ex: npm run dev --page=client
```

**打包指定子项目**

正式环境打包：

```js
npm run build --page=页面名称
// ex: npm run build --page=client
```

