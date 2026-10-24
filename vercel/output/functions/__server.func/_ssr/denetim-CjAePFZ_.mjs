import { i as __toESM } from "../_runtime.mjs";
import { t as auditItems } from "./practice-BBjMtpMd.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as SiteShell } from "./site-shell-BkJr8VHY.mjs";
import { n as audiences, t as audienceLabel } from "./model-BKqueAn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/denetim-CjAePFZ_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "ergin-lab-denetim-v1";
function AuditPage() {
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("hepsi");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) setAnswers(parseAnswers(raw));
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
	}, [answers, ready]);
	const visible = auditItems.filter((item) => filter === "hepsi" || item.audience === filter);
	const scored = (0, import_react.useMemo)(() => {
		const points = auditItems.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
		const max = auditItems.length * 2;
		const percent = Math.round(points / max * 100);
		return {
			points,
			max,
			percent,
			band: bandFor(percent)
		};
	}, [answers]);
	const gaps = auditItems.filter((item) => (answers[item.id] ?? 0) < 2);
	async function copyGaps() {
		const text = [
			"ERGİN LAB denetim — eksik kalanlar",
			"",
			...gaps.map((item) => `- (${audienceLabel(item.audience)}) ${item.text}`)
		].join("\n");
		try {
			await navigator.clipboard.writeText(text || "Eksik madde yok.");
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "DENETİM · BU CİHAZDA KALIR" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl",
			children: "Kapıların hangisi açık"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-lg text-muted",
			children: "Evet iki puan, kısmen bir, hayır sıfır. Kısmen: başladı ama her hesabı veya her sistemi kapsamıyor. Sonuç bir sertifika değil, bu haftanın iş listesidir."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-8 border border-line bg-surface p-5",
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-faint",
					children: "SKOR"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-4xl font-medium tracking-tight",
					children: ready ? `${scored.percent}` : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-1 bg-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1 bg-crimson",
						style: { width: `${ready ? scored.percent : 0}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm text-fg",
					children: scored.band
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 font-mono text-xs text-faint",
					children: [
						scored.points,
						" / ",
						scored.max,
						" puan · ",
						auditItems.length,
						" madde"
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			role: "group",
			"aria-label": "Kitle",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
				active: filter === "hepsi",
				onClick: () => setFilter("hepsi"),
				children: "Tümü"
			}), audiences.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filter, {
				active: filter === item.id,
				onClick: () => setFilter(item.id),
				children: item.label
			}, item.id))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 flex flex-col gap-4",
			children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border border-line p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-faint",
						children: audienceLabel(item.audience)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-fg",
						children: item.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
								pressed: answers[item.id] === 2,
								onClick: () => setAnswers((current) => ({
									...current,
									[item.id]: 2
								})),
								children: "Evet"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
								pressed: answers[item.id] === 1,
								onClick: () => setAnswers((current) => ({
									...current,
									[item.id]: 1
								})),
								children: "Kısmen"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
								pressed: answers[item.id] === 0,
								onClick: () => setAnswers((current) => ({
									...current,
									[item.id]: 0
								})),
								children: "Hayır"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/bolum/$slug",
								params: { slug: item.chapter },
								className: "inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest text-crimson",
								children: "Bölümü aç"
							})
						]
					})
				]
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: copyGaps,
				className: "inline-flex min-h-11 items-center bg-crimson px-4 font-medium text-bg",
				children: copied ? "Eksikler kopyalandı" : "Eksik maddeleri kopyala"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					setAnswers({});
					setCopied(false);
				},
				className: "inline-flex min-h-11 items-center border border-line px-4",
				children: "Sıfırla"
			})]
		})
	] });
}
function bandFor(percent) {
	if (percent < 40) return "Kritik açıklık. Bu hafta postaya çok adımlı doğrulama, benzersiz parola ve en az bir ayrı yedek.";
	if (percent < 70) return "Temel var, delik duruyor. Kısmen dediğin satırlar genelde yönetici hesabı, yedek provası veya yönlendirme kuralıdır. Onlardan başla.";
	if (percent < 90) return "Sağlam alışkanlık. Kalan açıklar çoğu zaman terk edilmiş alan adı, eski ajans anahtarı veya denenmemiş yedektir.";
	return "Disiplin yüksek. Rehavet yeni risktir. Çeyrekte bir provayı ve ayrılan kişinin erişimini yeniden sor.";
}
function parseAnswers(raw) {
	try {
		const value = JSON.parse(raw);
		if (!value || typeof value !== "object") return {};
		const out = {};
		for (const [key, item] of Object.entries(value)) if (item === 0 || item === 1 || item === 2) out[key] = item;
		return out;
	} catch {
		return {};
	}
}
function Filter({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: `inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest ${active ? "bg-crimson text-bg" : "border border-line text-muted"}`,
		children
	});
}
function Choice({ pressed, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": pressed,
		onClick,
		className: `inline-flex min-h-11 items-center px-3 text-sm ${pressed ? "bg-crimson text-bg" : "border border-line text-fg"}`,
		children
	});
}
//#endregion
export { AuditPage as component };
