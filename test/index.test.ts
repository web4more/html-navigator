import test from "node:test";
import assert from "node:assert";
import "../src/index";
import { isMainThread } from "node:worker_threads";

test("navigator", () => assert(navigator));
test("navigator.appCodeName", () => assert("appCodeName" in navigator));
test("navigator.appName", () => assert("appName" in navigator));
test("navigator.appVersion", () => assert("appVersion" in navigator));
test("navigator.platform", () => assert("platform" in navigator));
test("navigator.product", () => assert("product" in navigator));
test("navigator.productSub", () =>
  assert(
    isMainThread ? "productSub" in navigator : !("productSub" in navigator)
  ));
test("navigator.userAgent", () => assert("userAgent" in navigator));
test("navigator.vendor", () =>
  assert(isMainThread ? "vendor" in navigator : !("vendor" in navigator)));
test("navigator.vendorSub", () =>
  assert(
    isMainThread ? "vendorSub" in navigator : !("vendorSub" in navigator)
  ));
test("navigator.language", () => assert("language" in navigator));
test("navigator.languages", () => assert("languages" in navigator));
test("navigator.onLine", () => assert("onLine" in navigator));
test("navigator.registerProtocolHandler", () =>
  assert("registerProtocolHandler" in navigator));
test("navigator.unregisterProtocolHandler", () =>
  assert("unregisterProtocolHandler" in navigator));
test("navigator.cookieEnabled", () => assert("cookieEnabled" in navigator));
test("navigator.plugins", () => assert("plugins" in navigator));
test("navigator.mimeTypes", () => assert("mimeTypes" in navigator));
test("navigator.javaEnabled", () => assert("javaEnabled" in navigator));
test("navigator.pdfViewerEnabled", () =>
  assert("pdfViewerEnabled" in navigator));
test("navigator.hardwareConcurrency", () =>
  assert("hardwareConcurrency" in navigator));
