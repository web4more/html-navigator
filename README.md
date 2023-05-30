# `Navigator` for Node.js

🧭 A `Navigator` and `.navigator` polyfill for Node.js environments

<div align="center">

![](https://picsum.photos/600/400)

</div>

🎉 Lets you use browser idioms like `navigator.userAgent` in Node.js \
📦 Helpfully provides spec-defined algorithms as sub-exports \
🧊 Isomorphic so you can use this even in browsers \
🤝 Works well with other Navigator extensions like [jcbhmr/geolocation] \
📜 Based on [8.9 System state and capabilities | HTML Standard]

## Installation

![npm](https://img.shields.io/static/v1?style=for-the-badge&message=npm&color=CB3837&logo=npm&logoColor=FFFFFF&label=)
![Yarn](https://img.shields.io/static/v1?style=for-the-badge&message=Yarn&color=2C8EBB&logo=Yarn&logoColor=FFFFFF&label=)
![pnpm](https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=)

You can install this package using npm, [Yarn], or [pnpm]:

```sh
npm install node-navigator
```

⚠️ Make sure you don't install [navigator]! That's a very old unrelated package.

## Usage

![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![Deno](https://img.shields.io/static/v1?style=for-the-badge&message=Deno&color=000000&logo=Deno&logoColor=FFFFFF&label=)
![Bun](https://img.shields.io/static/v1?style=for-the-badge&message=Bun&color=000000&logo=Bun&logoColor=FFFFFF&label=)

```js
import "node-navigator";

console.log(navigator.userAgent);
//=> 'Node.js/20.0.0'
```

### What's included

This polyfill **only** targets that part of the `Navigator` interface that's
defined by the [HTML Standard]. Here's the complete Web IDL interface that's
included:

```webidl
[Exposed=*]
interface Navigator {}
```

💡 You can access all of these interfaces directly as 🦄 ponyfills via a file
export like this:

```js
import Navigator from "node-navigator/Navigator.js";

console.log(globalThis.Navigator, Navigator);
//=> undefined, [Function: Navigator]
```

## Development

![Node.js](https://img.shields.io/static/v1?style=for-the-badge&message=Node.js&color=339933&logo=Node.js&logoColor=FFFFFF&label=)
![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)

This package is built with TypeScript and plain-old `tsc`. To get started
developing, all you need to do is open this repo in your favorite editor like
[GitHub Codespaces] and run `npm start` to start the test watcher. We use the
builtin Node.js `node:test` module coupled with `tsx` to run our tests.

```sh
npm start
```

Make sure you run the full `npm test` script before committing though! 😉

[GitHub Codespaces]: https://github.com/features/codespaces
[Yarn]: https://yarnpkg.com/
[pnpm]: https://pnpm.io/
[8.9 System state and capabilities | HTML Standard]:
  https://html.spec.whatwg.org/multipage/system-state.html
[HTML Standard]: https://html.spec.whatwg.org/multipage/
