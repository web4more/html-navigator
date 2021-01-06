const os = require("os");

class NavigatorConcurrentHardware {

    get hardwareConcurrency() {
        return os.cpus().length;
    }

    static applyToClass(structure) {
        const props = ["hardwareConcurrency"];

        for (const prop of props) {
            Object.defineProperty(
                structure.prototype,
                prop,
                Object.getOwnPropertyDescriptor(NavigatorConcurrentHardware.prototype, prop)
            );
        }
    }

}

module.exports = NavigatorConcurrentHardware;