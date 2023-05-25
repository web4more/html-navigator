const NavigatorConcurrentHardware = require("./NavigatorConcurrentHardware");
const NavigatorGeolocation = require("./NavigatorGeolocation");
const NavigatorID = require("./NavigatorID");
const NavigatorLanguage = require("./NavigatorLanguage");
const NavigatorOnLine = require("./NavigatorOnLine");
const os = require("os");

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

module.exports = {
    Navigator,
    NavigatorConcurrentHardware,
    NavigatorID,
    NavigatorLanguage,
    NavigatorOnLine,
    NavigatorGeolocation
};