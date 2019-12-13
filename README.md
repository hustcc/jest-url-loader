# jest-url-loader

> Similar with webpack's url-loader for Jest. Import url resource in [jest-electron](https://github.com/hustcc/jest-electron).


[![npm Version](https://img.shields.io/npm/v/jest-url-loader.svg)](https://www.npmjs.com/package/jest-url-loader)
[![Build Status](https://github.com/hustcc/jest-url-loader/workflows/build/badge.svg)](https://github.com/hustcc/jest-url-loader/actions)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/jest-url-loader/badge.svg)](https://coveralls.io/github/hustcc/jest-url-loader)
[![npm License](https://img.shields.io/npm/l/jest-url-loader.svg)](https://www.npmjs.com/package/jest-url-loader)



## Usage


 - Install
 
```bash
$ npm i --save-dev jest-url-loader
```

 - Configure

Update your jest configure, and add it into transform.

```diff
+    "transform": {
+      "\\.(jpg|jpeg|png|gif|svg)$": "jest-url-loader"
+    },
```



## License

MIT@[hustcc](https://github.com/hustcc).
