import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as SiteShell } from "./site-shell-BkJr8VHY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bolum._slug-B3L7wV24.js
var import_jsx_runtime = require_jsx_runtime();
function MissingChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "YOK" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 text-3xl font-medium",
			children: "Bu bölüm dizinde yok"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-6 inline-flex min-h-11 items-center text-crimson",
			children: "Dizine dön"
		})
	] });
}
//#endregion
export { MissingChapter as notFoundComponent };
