// This keeps webpack chunk/style injections CSP-safe when Pega runtime provides a nonce.
// Without this assignment, strict CSP pages may block dynamically injected assets.
// @ts-ignore
if (window?.__webpack_nonce__) {
  // @ts-ignore
  __webpack_nonce__ = window.__webpack_nonce__;
}
