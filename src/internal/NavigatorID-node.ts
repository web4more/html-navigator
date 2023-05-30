const navigatorCompatibilityMode: "Chrome" | "Gecko" | "WebKit" = "Chrome";
const userAgent = `Node.js/${process.versions.node}` as const;

interface NavigatorID {
  readonly appCodeName: "Mozilla";
  readonly appName: "Netscape";
  readonly appVersion: `5.0 (${string}`;
  readonly platform: "MacIntel" | "Win32" | "Linux x86_64" | "Linux armv81";
  readonly product: "Gecko";
  readonly productSub: "20030107" | "20100101";
  readonly userAgent: `Node.js/${string}`;
  readonly vendor: "Google Inc." | "" | "Apple Computer, Inc.";
  readonly vendorSub: "";
}
const NavigatorID = {
  prototype: {
    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-appcodename */
    get appCodeName(): "Mozilla" {
      // Must return the string "Mozilla".
      return "Mozilla";
    },

    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-appname */
    get appName(): "Netscape" {
      // Must return the string "Netscape".
      return "Netscape";
    },

    get appVersion(): `5.0 (${string}` {
      // Must return the appropriate string that starts with "5.0 (", as
      // follows:

      // Let trail be the substring of default `User-Agent` value that follows
      // the "Mozilla/" prefix.
      const trail = userAgent.match(/Mozilla\/(.*)/)?.[1] ?? "";

      // If the navigator compatibility mode is Chrome or WebKit
      if (
        navigatorCompatibilityMode === "Chrome" ||
        navigatorCompatibilityMode === "WebKit"
      ) {
        // Return trail.
        return trail as `5.0 (${string}`;
      }

      // If the navigator compatibility mode is Gecko
      else {
        // If trail starts with "5.0 (Windows", then return "5.0 (Windows)".
        if (trail.startsWith("5.0 (Windows")) {
          return "5.0 (Windows)";
        }

        // Otherwise, return the prefix of trail up to but not including the
        // first U+003B (;), concatenated with the character U+0029 RIGHT
        // PARENTHESIS. For example, "5.0 (Macintosh)", "5.0 (Android 10)", or
        // "5.0 (X11)".
        else {
          return (trail.slice(0, trail.indexOf(";")) + ")") as `5.0 (${string}`;
        }
      }
    },

    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-platform */
    get platform(): "MacIntel" | "Win32" | "Linux x86_64" | "Linux armv81" {
      // Must return a string representing the platform on which the browser is
      // executing (e.g. "MacIntel", "Win32", "Linux x86_64", "Linux armv81")
      // or, for privacy and compatibility, a string that is commonly returned
      // on another platform.
      return (
        (
          {
            aix: "Linux x86_64",
            android: "Linux armv81",
            darwin: "MacIntel",
            freebsd: "Linux x86_64",
            haiku: "Linux x86_64",
            linux: "Linux x86_64",
            openbsd: "Linux x86_64",
            sunos: "Linux x86_64",
            win32: "Win32",
            cygwin: "Win32",
            netbsd: "Linux x86_64",
          } as const
        )[process.platform] || "Linux x86_64"
      );
    },

    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-product */
    get product(): "Gecko" {
      // Must return the string "Gecko".
      return "Gecko";
    },

    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-productsub */
    get productSub(): "20030107" | "20100101" {
      // Must return the appropriate string from the following list:

      // If the navigator compatibility mode is Chrome or WebKit
      if (
        navigatorCompatibilityMode === "Chrome" ||
        navigatorCompatibilityMode === "WebKit"
      ) {
        // The string "20030107".
        return "20030107";
      }

      // If the navigator compatibility mode is Gecko
      else {
        // The string "20100101".
        return "20100101";
      }
    },

    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-useragent */
    get userAgent(): `Node.js/${string}` {
      // Must return the default `User-Agent` value.
      return userAgent;
    },

    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-vendor */
    get vendor(): "Google Inc." | "" | "Apple Computer, Inc." {
      // Must return the appropriate string from the following list:

      // If the navigator compatibility mode is Chrome
      if (navigatorCompatibilityMode === "Chrome") {
        // The string "Google Inc.".
        return "Google Inc.";
      }

      // If the navigator compatibility mode is Gecko
      if (navigatorCompatibilityMode === "Gecko") {
        // The empty string.
        return "";
      }

      // If the navigator compatibility mode is WebKit
      else {
        // The string "Apple Computer, Inc.".
        return "Apple Computer, Inc.";
      }
    },

    /** @see https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-vendorsub */
    get vendorSub(): "" {
      // Must return the empty string.
      return "";
    },
  } as NavigatorID,
};

// If the navigator compatibility mode is Gecko, then the user agent must also
// support the following partial interface:

// ☝ Not implemented since we are "Chrome".

export default NavigatorID;
export { navigatorCompatibilityMode, userAgent };
