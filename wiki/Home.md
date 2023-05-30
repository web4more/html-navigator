## Architecture

This polyfill is designed to be as isomorphic as reasonably possible. For
instance, we try to make sure that if you're in a browser, you get all the
`NavigatorID` and such interfaces sourced right from the browser, and if you're
in Node.js, you get a userland polyfill for those interfaces. We do this magic
by exposing a `node-naviagtor/NavigatorID.js` and other interface-specific files
that you can import as [ponyfills]. If the `navigator` object already exists, we
don't load our custom polyfill, we just peel off the parts we need into a
`NavigatorID` or other interface as appropriate.

Here's an example:

```js
// node-naviagtor/NavigatorID.js
export default typeof navigator === "undefined"
  ? await import("./intenal/NavigatorID-node.js").then((m) => m.default)
  : await import("./intenal/NavigatorID-browser.js").then((m) => m.default);
```

```js
// node-naviagtor/internal/NavigatorID-browser.js
export default {
  prototype: {
    get appCodeName() {
      return navigator.appCodeName;
    },

    // ...
  },
};
```

We even use some fancy shortcuts with export conditions to pre-assume that
`typeof navigator === "undefined"` check:

```jsonc
// package.json
{
  "exports": {
    "./NavigatorID.js": {
      "node": "./internal/NavigatorID-node.js",
      "browser": "./internal/NavigatorID-browser.js",
      "default": "./NavigatorID.js"
    }
  }
}
```

## How it works

TODO: Explain how it works

## What's in the name

The name of this package is laregly historical. If we were to rename it today,
it would probably be something more universal and spec-related instead of
"node-naviagtor". But we're stuck with this name for better or worse! 😊

[ponyfills]: https://ponyfill.com/
