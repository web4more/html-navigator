import NavigatorID from "./NavigatorID-node.js";

class Navigator {
  static {
    Object.defineProperty(this, "name", {
      value: "Navigator",
      configurable: true,
    });
    Object.defineProperty(this.prototype, Symbol.toStringTag, {
      value: "Navigator",
      configurable: true,
    });
  }

  constructor() {
    throw new TypeError("Illegal constructor");
  }
}

NavigatorID: {
  const s = Object.getOwnPropertyDescriptors(NavigatorID);
  delete s.name;
  delete s.length;
  // @ts-ignore
  delete s.prototype;

  Object.defineProperties(Navigator, s);
  const p = Object.getOwnPropertyDescriptors(NavigatorID.prototype);
  // @ts-ignore
  delete p.constructor;
  // @ts-ignore
  delete p[Symbol.toStringTag];
  Object.defineProperties(Navigator.prototype, p);
}
NavigatorLanguage: {
  const s = Object.getOwnPropertyDescriptors(NavigatorLanguage);
  delete s.name;
  delete s.length;
  delete s.prototype;
  Object.defineProperties(Navigator, s);

  const p = Object.getOwnPropertyDescriptors(NavigatorLanguage.prototype);
  delete p.constructor;
  delete p[Symbol.toStringTag];
  Object.defineProperties(Navigator.prototype, p);
}
NavigatorOnLine: {
  const s = Object.getOwnPropertyDescriptors(NavigatorOnLine);
  delete s.name;
  delete s.length;
  delete s.prototype;
  Object.defineProperties(Navigator, s);

  const p = Object.getOwnPropertyDescriptors(NavigatorOnLine.prototype);
  delete p.constructor;
  delete p[Symbol.toStringTag];
  Object.defineProperties(Navigator.prototype, p);
}
NavigatorContentUtils: {
  const s = Object.getOwnPropertyDescriptors(NavigatorContentUtils);
  delete s.name;
  delete s.length;
  delete s.prototype;

  Object.defineProperties(Navigator, s);
  const p = Object.getOwnPropertyDescriptors(NavigatorContentUtils.prototype);
  delete p.constructor;
  delete p[Symbol.toStringTag];
  Object.defineProperties(Navigator.prototype, p);
}
NavigatorCookies: {
  const s = Object.getOwnPropertyDescriptors(NavigatorCookies);
  delete s.name;
  delete s.length;
  delete s.prototype;

  Object.defineProperties(Navigator, s);
  const p = Object.getOwnPropertyDescriptors(NavigatorCookies.prototype);
  delete p.constructor;
  delete p[Symbol.toStringTag];
  Object.defineProperties(Navigator.prototype, p);
}
NavigatorPlugins: {
  const s = Object.getOwnPropertyDescriptors(NavigatorPlugins);
  delete s.name;
  delete s.length;
  delete s.prototype;

  Object.defineProperties(Navigator, s);
  const p = Object.getOwnPropertyDescriptors(NavigatorPlugins.prototype);
  delete p.constructor;
  delete p[Symbol.toStringTag];
  Object.defineProperties(Navigator.prototype, p);
}
NavigatorConcurrentHardware: {
  const s = Object.getOwnPropertyDescriptors(NavigatorConcurrentHardware);
  delete s.name;
  delete s.length;
  delete s.prototype;

  Object.defineProperties(Navigator, s);
  const p = Object.getOwnPropertyDescriptors(
    NavigatorConcurrentHardware.prototype
  );
  delete p.constructor;
  delete p[Symbol.toStringTag];
  Object.defineProperties(Navigator.prototype, p);
}

export default Navigator;
