export default typeof Navigator !== "undefined"
  ? Navigator
  : await import("./Navigator-node.js").then((m) => m.default);
