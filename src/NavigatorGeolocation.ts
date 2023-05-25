import http from "http";

export interface GeolocationCallback {
    (success: GeolocationData, error: Error): void;
}

export interface GeolocationOptions {
    ip?: string;
}

export interface GeolocationData {
    accuracy: null;
    altitude: null;
    altitudeAccuracy: null;
    heading: null;
    latitude: number;
    longitude: number;
    speed: null;
    timestamp: number;
}

class NavigatorGeolocation {

    getCurrentPosition(callback: GeolocationCallback, options = {}): void {
        const req = Date.now();

        try {
            http.get(`http://ip-api.com/json${options && options.ip && typeof options.ip === "string" ? `/${options.ip}` : ""}`, res => {

                let raw = "";

                res.on("data", (chunk) => raw += chunk.toString());

                res.once("end", () => {
                    let data;

                    try {
                        data = JSON.parse(raw);
                    } catch (e) {
                        return callback(null, new Error("Something went wrong!"));
                    }

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
                });

                res.once("error", err => callback(null, err));
            });
        } catch(e) {
            callback(null, e);
        }
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

export default NavigatorGeolocation;
