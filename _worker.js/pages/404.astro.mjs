globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderScript, l as renderHead, r as renderTemplate } from '../chunks/astro/server_CMYtVhQL.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DwBJekGt.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=/"><title>404 - Redirecting...</title>${renderScript($$result, "C:/Users/Bruger/Desktop/dansk.pw/danskpw/src/pages/404.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> <p>Redirecting to <a href="/">home page</a>...</p> </body></html>`;
}, "C:/Users/Bruger/Desktop/dansk.pw/danskpw/src/pages/404.astro", void 0);

const $$file = "C:/Users/Bruger/Desktop/dansk.pw/danskpw/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
