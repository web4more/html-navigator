class NavigatorLanguage {

    get language(): string {
        return process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || process.env.LC_MESSAGES;
    }

    get languages(): string[] {
        return [this.language];
    }

    static applyToClass(structure) {
        const props = ["language", "languages"];

        for (const prop of props) {
            Object.defineProperty(
                structure.prototype,
                prop,
                Object.getOwnPropertyDescriptor(NavigatorLanguage.prototype, prop)
            );
        }
    }

}

export default NavigatorLanguage;
