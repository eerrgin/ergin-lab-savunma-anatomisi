import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, r as Shield, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BkJr8VHY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Dizin"
	},
	{
		to: "/araclar",
		label: "Araçlar"
	},
	{
		to: "/denetim",
		label: "Denetim"
	},
	{
		to: "/olay",
		label: "Olay"
	},
	{
		to: "/bolum/$slug",
		label: "Sözleşme",
		params: { slug: "sozlesme" }
	}
];
function SiteShell({ children }) {
	const path = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lab-grid min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0.5 bg-crimson" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-h-11 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								className: "size-5 text-crimson",
								strokeWidth: 1.75,
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm tracking-widest text-fg",
								children: "ERGİN LAB"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							"aria-label": "Ana menü",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
								item,
								path
							}, item.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center border border-line text-fg md:hidden",
							"aria-expanded": open,
							"aria-label": open ? "Menüyü kapat" : "Menüyü aç",
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-line px-4 py-3 md:hidden",
					"aria-label": "Mobil menü",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							item,
							path,
							block: true
						}) }, item.label))
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-crimson",
						children: "SAVUNMA DERLEMESİ · EKİM 2026"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "İstismar kodu, zararlı yazılım ve saldırı tarifi yoktur. Yetkisiz erişim suçtur. Bu metin hukuki danışmanlık değildir." })]
				})
			})
		]
	});
}
function NavLink({ item, path, block }) {
	const active = item.to === "/" ? path === "/" : item.to === "/bolum/$slug" ? path.endsWith("/sozlesme") : path === item.to || path.startsWith(`${item.to}/`);
	const className = [
		"inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest",
		block ? "w-full" : "",
		active ? "text-crimson" : "text-muted hover:text-fg"
	].join(" ");
	if (item.to === "/bolum/$slug") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to,
		params: item.params,
		className,
		children: item.label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.to,
		className,
		children: item.label
	});
}
function Frame({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative border border-line bg-surface ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -top-px -left-px size-3 border-t border-l border-crimson" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -top-px -right-px size-3 border-t border-r border-crimson" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -bottom-px -left-px size-3 border-b border-l border-crimson" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -right-px -bottom-px size-3 border-r border-b border-crimson" }),
			children
		]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xs tracking-widest text-crimson",
		children
	});
}
//#endregion
export { Kicker as n, SiteShell as r, Frame as t };
