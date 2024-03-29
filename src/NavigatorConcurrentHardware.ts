import os from "os";

class NavigatorConcurrentHardware {

    get hardwareConcurrency(): number {
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

export default NavigatorConcurrentHardware;
