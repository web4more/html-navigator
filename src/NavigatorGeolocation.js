const fetch = require("node-fetch");

class NavigatorGeolocation {

    getCurrentPosition(callback, options = {}) {
        const req = Date.now();

        fetch(`http://ip-api.com/json${options && options.ip && typeof options.ip === "string" ? `/${options.ip}` : ""}`)
            .then(res => res.json())
            .then(data => {
                if (data.status !== "success") return callback(null, new Error("Something went wrong!"));

                const payload = {
                    accuracy: null,
                    altitude: null,
                    altitudeAccuracy: null,
                    heading: null,
                    latitude: data.lat,
                    longitude: data.lon,
                    speed: null,
                    timestamp: req
                };

                callback(payload, null);
            })
            .catch(e => callback(null, e));
    }

    static applyToClass(structure) {
        const props = ["getCurrentPosition"];

        for (const prop of props) {
            Object.defineProperty(
                structure.prototype,
                prop,
                Object.getOwnPropertyDescriptor(NavigatorGeolocation.prototype, prop)
            );
        }
    }

}

module.exports = NavigatorGeolocation;