.ignore 里面需要包含.env 这是因为它是设置文件 不属于源代码 我们不需要把这个传到 github 上去

.env 当中，添加新的变量，用来说明此时的环境。

需要首先把前端代码 build 一下，此时，前端代码都在 build 文件夹里。

server.js 中，设置在 production 环境下，如果需要前端，那么直接指向刚才 build 过的文件夹。

如此一来，只需要启动后端即可。前端的项目不必启动，因为前端的代码已经全部 build 好了，后端运行起来时直接就用 build 里面的代码。

设置"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install && npm run build"
