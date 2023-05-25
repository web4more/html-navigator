import NavigatorConcurrentHardware from "./NavigatorConcurrentHardware.js";
import NavigatorGeolocation from "./NavigatorGeolocation.js";
import NavigatorID from "./NavigatorID.js";
import NavigatorLanguage from "./NavigatorLanguage.js";
import NavigatorOnLine from "./NavigatorOnLine.js";
import os from "os";

// Navigator class
class Navigator {
  constructor() {
    this.geolocation = new NavigatorGeolocation();
  }

  get vendor() {
    return `Node${process.version.replace("v", "")}`;
  }

  get deviceMemory() {
    return Math.floor(os.totalmem() / 1e9);
  }

  vibrate() {}
}

// apply props
NavigatorConcurrentHardware.applyToClass(Navigator);
NavigatorID.applyToClass(Navigator);
NavigatorLanguage.applyToClass(Navigator);
NavigatorOnLine.applyToClass(NavigatorOnLine);
NavigatorGeolocation.applyToClass(Navigator);

export {
  Navigator,
  NavigatorConcurrentHardware,
  NavigatorID,
  NavigatorLanguage,
  NavigatorOnLine,
  NavigatorGeolocation,
};
