import Navigator_ from "./Navigator.js";
import NavigatorID_ from "./NavigatorID.js";
import NavigatorLanguage_ from "./NavigatorLanguage.js";
import NavigatorOnLine_ from "./NavigatorOnLine.js";
import NavigatorContentUtils_ from "./NavigatorContentUtils.js";
import NavigatorCookies_ from "./NavigatorCookies.js";
import NavigatorPlugins_ from "./NavigatorPlugins.js";
import NavigatorConcurrentHardware_ from "./NavigatorConcurrentHardware.js";

declare global {
  type Navigator = Navigator_;
  var Navigator: typeof Navigator_;
  type NavigatorID = NavigatorID_;
  type NavigatorLanguage = NavigatorLanguage_;
  type NavigatorOnLine = NavigatorOnLine_;
  type NavigatorContentUtils = NavigatorContentUtils_;
  type NavigatorCookies = NavigatorCookies_;
  type NavigatorPlugins = NavigatorPlugins_;
  type NavigatorConcurrentHardware = NavigatorConcurrentHardware_;
  var navigator: Navigator_;
}

globalThis.Navigator = Navigator_;
globalThis.navigator = Object.create(Navigator_.prototype);
