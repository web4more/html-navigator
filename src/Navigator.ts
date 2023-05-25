import NavigatorConcurrentHardware from "./NavigatorConcurrentHardware";
import NavigatorGeolocation from "./NavigatorGeolocation";
import NavigatorID from "./NavigatorID";
import NavigatorLanguage from "./NavigatorLanguage";
import NavigatorOnLine from "./NavigatorOnLine";
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
        return Math.floor(os.totalmem() / 1e+9);
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
    NavigatorGeolocation
};
