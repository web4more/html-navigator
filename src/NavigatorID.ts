const os = require("os");
const util = require("util");

class NavigatorID {

    /**
     * Always returns "Mozilla", in any browser. This property is kept only for compatibility purposes.
     */
    get appCodeName() {
        return "Mozilla";
    }

    /**
     * Always returns "Netscape", in any browser. This property is kept only for compatibility purposes.
     */
    get appName() {
        return "Netscape";
    }

    /**
     * Returns a string representing version information about the browser. Do not rely on this property to return a useful value.
     */
    get appVersion() {
        return process.version.replace("v", "");
    }

    /**
     * Returns either the empty string or a string representing the platform the browser is running on. Do not rely on this property to return a useful value.
     */
    get platform() {
        return process.platform;
    }

    /**
     * Always returns "Gecko", in any browser. This property is kept only for compatibility purposes.
     */
    get product() {
        return "Gecko";
    }

    /**
     * Returns the user-agent string for the current browser.
     * @returns {string}
     */
    get userAgent() {
        return `Node/${this.appVersion} (${os.type()} ${os.release()}; ${this.platform}; ${process.arch})`;
    }

    /**
     * This feature is no longer recommended. Though some browsers might still support it,
     * it may have already been removed from the relevant web standards, may be in the process of being dropped,
     * or may only be kept for compatibility purposes.
     * @deprecated
     */
    taintEnabled() {
        return false;
    }

    /**
     * JSON representation of NavigatorID
     */
    toJSON() {
        return {
            appCodeName: this.appCodeName,
            appName: this.appName,
            appVersion: this.appVersion,
            platform: this.platform,
            product: this.product,
            userAgent: this.userAgent
        };
    }

    toString() {
        return "[NavigatorID]";
    }

    static applyToClass(structure) {
        const props = ["appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "taintEnabled"];
        
        for (const prop of props) {
            Object.defineProperty(
                structure.prototype,
                prop,
                Object.getOwnPropertyDescriptor(NavigatorID.prototype, prop)
            );
        }
    }
}

util.deprecate(NavigatorID.prototype.taintEnabled, "This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes.");

module.exports = NavigatorID;