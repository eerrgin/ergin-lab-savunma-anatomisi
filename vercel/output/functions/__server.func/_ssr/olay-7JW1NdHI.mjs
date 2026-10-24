import { i as __toESM } from "../_runtime.mjs";
import { i as phases } from "./practice-BBjMtpMd.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as SiteShell } from "./site-shell-BkJr8VHY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/olay-7JW1NdHI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "ergin-lab-olay-v1";
function IncidentPage() {
	const [done, setDone] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) try {
			const value = JSON.parse(raw);
			if (value && typeof value === "object") {
				const next = {};
				for (const [key, item] of Object.entries(value)) if (item === true) next[key] = true;
				setDone(next);
			}
		} catch {
			setDone({});
		}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
	}, [done, ready]);
	const finished = phases.filter((phase) => done[phase.id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "OLAY · İLK SAAT" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl",
			children: "Ele geçtiyse sıra bu"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-lg text-muted",
			children: "Yeni bir bağlantıya basmak hız değildir. Hız, kapıyı büyütmemektir. İşaretler yalnızca bu tarayıcıda durur."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 font-mono text-xs tracking-widest text-crimson",
			children: [
				finished,
				" / ",
				phases.length,
				" aşama işaretli"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 flex flex-col gap-5",
			children: phases.map((phase, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs tracking-widest text-crimson",
							children: [
								String(index + 1).padStart(2, "0"),
								" · ",
								phase.minutes
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": Boolean(done[phase.id]),
							onClick: () => setDone((current) => ({
								...current,
								[phase.id]: !current[phase.id]
							})),
							className: `inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest ${done[phase.id] ? "bg-crimson text-bg" : "border border-line text-muted"}`,
							children: done[phase.id] ? "Bu aşama bitti" : "Bitti işaretle"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-medium",
						children: phase.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-3xl text-muted",
						children: phase.lead
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-mono text-xs tracking-widest text-crimson",
							children: "YAP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-2",
							children: phase.do.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-fg",
								children: item
							}, item))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-mono text-xs tracking-widest text-faint",
							children: "YAPMA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-2",
							children: phase.dont.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-muted",
								children: item
							}, item))
						})] })]
					}),
					phase.org ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 border-t border-line pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-mono text-xs tracking-widest text-crimson",
							children: "KURUM"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-col gap-2",
							children: phase.org.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "text-sm text-fg",
								children: item
							}, item))
						})]
					}) : null
				]
			}, phase.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 max-w-2xl text-sm text-muted",
			children: [
				"Anlatının tamamı",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/bolum/$slug",
					params: { slug: "olay" },
					className: "text-crimson",
					children: "11. bölümde"
				}),
				". Ulusal ihbar için",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.usom.gov.tr/",
					className: "text-crimson",
					rel: "noreferrer",
					target: "_blank",
					children: "USOM"
				}),
				" ",
				"kurumun kendi hattıyla birlikte değerlendirilir. Bu sayfa ihbar formu değildir."
			]
		})
	] });
}
//#endregion
export { IncidentPage as component };
