# Navigator for Node.js

🧭 Bring the HTML `navigator` object to Node.js

<div align="center">

![](https://picsum.photos/600/400)

</div>

📱 Lets you use web platform conventions to detect agent capabilities \
🤝 Works well with other `Navigator` mixins \
🦄 Supports polyfill or ponyfill imports

## Installation

```sh
npm install node-navigator
```

You should also be able to use this package in other Node-compatible
environments like Deno or Bun provided they implement the `node:` modules that
this package uses.

```js
import "https://esm.sh/node-navigator";
```

## Usage

```js
import "node-navigator";

console.log(navigator.userAgent);
//=> 'Node.js/20.0.0
```

### What's implemented?

📚 Check out the [documentation website] for more information on what's
implemented. And, more importantly, how it's implemented! 😎

This polyfill attempts to define an implementation that matches the parts of the
HTML Standard that refer to the `Navigator` interface. Almost all of it is
specified in [8.9 System state and capabilities | HTML Standard], with the sole
exception being the `NavigatorConcurrentHardware` mixin which is defined in the
[10.2.7 Concurrent hardware capabilities].

Here's an index of what we define. Note that the `NavigatorPlugins` and related
PDF detection interfaces are not implemented, as well as the
`NavigatorContentUtils` interface which defines `.registerProtocolHandler()`.

```webidl
[Exposed=Window]
interface Navigator {
  // objects implementing this interface also implement the interfaces given below
};
Navigator includes NavigatorID;
Navigator includes NavigatorLanguage;
Navigator includes NavigatorOnLine;
Navigator includes NavigatorCookies;
Navigator includes NavigatorConcurrentHardware;
interface mixin NavigatorID {
  readonly attribute DOMString appCodeName; // constant "Mozilla"
  readonly attribute DOMString appName; // constant "Netscape"
  readonly attribute DOMString appVersion;
  readonly attribute DOMString platform;
  readonly attribute DOMString product; // constant "Gecko"
  readonly attribute DOMString productSub;
  readonly attribute DOMString userAgent;
  readonly attribute DOMString vendor;
  readonly attribute DOMString vendorSub; // constant ""
};
partial interface mixin NavigatorID {
  [Exposed=Window] boolean taintEnabled(); // constant false
  [Exposed=Window] readonly attribute DOMString oscpu;
};
interface mixin NavigatorLanguage {
  readonly attribute DOMString language;
  readonly attribute FrozenArray<DOMString> languages;
};
interface mixin NavigatorOnLine {
  readonly attribute boolean onLine;
};
interface mixin NavigatorCookies {
  readonly attribute boolean cookieEnabled;
};
interface mixin NavigatorConcurrentHardware {
  readonly attribute unsigned long long hardwareConcurrency;
};
```

## Development

This package compartmentalizes each specific interface (`Navigator`,
`NavigatorID`, `NavigatorLanguage`, etc.) into its own file as a mixin. Then,
the main implementing interface merges all those together into a single
`Navigator` interface. This works well and composes nicely with other mixins
from other polyfills! 😎

This project is written in TypeScript and tries to implement the Web IDL
interfaces outlined in [8.9 System state and capabilities | HTML Standard] To
get started developing on this project, open the Git repo in your favorite IDE
(like [GitHub Codespaces]) and then run `npm start` to start the test watcher.
Make sure you manually run the entire `npm test` suite before committing!

Here's an example of how you might write a polyfill to mixin your
`MyNavigatorMixin` to an existing `Navigator` implementation (like this
package!):

```ts
// Expect that the user already has either:
// a) A minimal 'globalThis.Navigator = class {}' and
//    'globalThis.navigator = new Navigator()' implementation
// b) A polyfill that implements the 'Navigator' interface (like this
//    node-navigator package)
declare global {
  class Navigator {}
  var navigator: Navigator;
}

const s = Object.getOwnPropertyDescriptors(MyNavigatorMixin);
delete s.name;
delete s.length;
Object.defineProperties(Navigator, s);

const p = Object.getOwnPropertyDescriptors(MyNavigatorMixin.prototype);
delete p.constructor;
delete p[Symbol.toStringTag];
Object.defineProperties(Navigator.prototype, p);

// 🤚 Only hook into the constructor if absolutely necessary!
Navigator = new Proxy(Navigator, {
  construct(target, args, newTarget) {
    const o = Reflect.construct(target, args, newTarget);
    MyNavigatorMixin.call(o);
    return o;
  },
});
// Manually call on existing instances
MyNavigatorMixin.call(navigator);
```

**What's in the name?** This package is called "node-navigator" because it was,
originally a Node.js `navigator` implementation created a bit before a standard
naming convention arose. If it could be renamed to something more
convention-conforming like "html-navigator" or "html-system-state" then that
would be great! 😅 But that's unlikely given the SEO and other factors that make
such a rename difficult.

<!-- prettier-ignore-start -->
[8.9 System state and capabilities | HTML Standard]: https://html.spec.whatwg.org/multipage/system-state.html
[GitHub Codespaces]: https://github.com/features/codespaces
[10.2.7 Concurrent hardware capabilities]: https://html.spec.whatwg.org/multipage/workers.html#navigator.hardwareconcurrency
[documentation website]: https://skdhg.github.io/node-navigator/
<!-- prettier-ignore-end -->
