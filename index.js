import package_ from "./package.json" assert { type: "json" };

export * from "./dist/Navigator.js";
export const version = package_.version;
