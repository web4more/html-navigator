import cp from "child_process";

class NavigatorOnLine {

    get onLine(): boolean {
        try {
            cp.execSync("ping google.com", { windowsHide: true });
            return true;
        } catch(e) {
            return false;
        }
    }

    static applyToClass(structure) {
        const props = ["onLine"];

        for (const prop of props) {
            Object.defineProperty(
                structure.prototype,
                prop,
                Object.getOwnPropertyDescriptor(NavigatorOnLine.prototype, prop)
            );
        }
    }

}

export default NavigatorOnLine;
