declare module "node-navigator" {

    export class NavigatorID {
        get appCodeName(): string;
        get appName(): string;
        get appVersion(): string;
        get platform(): string;
        get product(): string;
        get userAgent(): string;
        taintEnabled(): boolean;

        static applyToClass(structure: any): void;
    }

    export class NavigatorConcurrentHardware {
        get hardwareConcurrency(): number;

        static applyToClass(structure: any): void;
    }

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

    export class NavigatorGeolocation {
        getCurrentPosition(callback: GeolocationCallback): void;

        static applyToClass(structure: any): void;
    }

    export class NavigatorLanguage {
        get language(): string;
        get languages(): string[];

        static applyToClass(structure: any): void;
    }

    export class NavigatorOnLine {
        get onLine(): boolean;

        static applyToClass(structure: any): void;
    }

    export class Navigator {
        geolocation: NavigatorGeolocation;

        get appCodeName(): string;
        get appName(): string;
        get appVersion(): string;
        get platform(): string;
        get product(): string;
        get userAgent(): string;
        get onLine(): boolean;
        get language(): string;
        get languages(): string[];
        get hardwareConcurrency(): number;
        get vendor(): string;

        getCurrentPosition(callback: GeolocationCallback, options?: GeolocationOptions): void;
        taintEnabled(): boolean;
        vibrate(): void;
    }
}