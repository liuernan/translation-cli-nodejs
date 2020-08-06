# translation-cli-nodejs

a CLI tool to translate word from 中文 to English or from English to 中文.

## two step to use

1.install from NPM:

```
// if u are using npm
npm install -g translation-cli-nodejs

// if u are using yarn
yarn global add translation-cli-nodejs
```

tips: globally installation will can make it much easier to use.

2.now it is OK to use:

```
fy hello
// "你好" (or other results) will be printed in terminal

fy 你好
// "hello" (or other results) will be printed in terminal
```

3.if u see error like this:

```
internal/modules/cjs/loader.js:985
  throw err;
  ^

Error: Cannot find module './private-key'
Require stack:
......
```

that is because I didn't upload my appID and appKey of translate API,
which means this NPM package cannot work.

### translation API

[Youdao Translation API](https://ai.youdao.com/gw.s) is used in this tool.

## Feedback

contact me via [Github Repo](https://github.com/liuernan/translation-cli-nodejs)
