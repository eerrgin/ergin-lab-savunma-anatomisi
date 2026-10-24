import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Search, o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as Kicker, r as SiteShell, t as Frame } from "./site-shell-BkJr8VHY.mjs";
import { i as chapters } from "./router-yE_E1Avh.mjs";
import { n as audiences, r as layers, t as audienceLabel } from "./model-BKqueAn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D_BuJ0Ly.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const [audience, setAudience] = (0, import_react.useState)("hepsi");
	const [query, setQuery] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const shown = (0, import_react.useMemo)(() => {
		const needle = query.trim().toLocaleLowerCase("tr");
		return chapters.filter((chapter) => {
			const matchesAudience = audience === "hepsi" || chapter.audiences.includes(audience);
			const haystack = `${chapter.title} ${chapter.summary} ${chapter.kicker}`.toLocaleLowerCase("tr");
			return matchesAudience && (needle.length === 0 || haystack.includes(needle));
		});
	}, [audience, query]);
	async function copyIndex() {
		const markdown = [
			"# ERGİN LAB · Savunma Anatomisi",
			"",
			"Yalnızca savunma. İstismar kodu yoktur.",
			"",
			...chapters.map((chapter) => `- ${chapter.code} ${chapter.title} — ${chapter.summary}`)
		].join("\n");
		try {
			await navigator.clipboard.writeText(markdown);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid items-end gap-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-l border-crimson pl-5 lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "EL KİTABI · BAĞIŞIKLIK · 2026" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-xl text-4xl leading-none font-medium tracking-tight md:text-6xl",
						children: "Savunma anatomisi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg text-muted",
						children: "Kişisel hesaptan sistem odasına. Saldırı tarifi yok. Katman katman korunma. Sihir değil, sıkıcı disiplin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/denetim",
							className: "inline-flex min-h-11 items-center bg-crimson px-4 font-medium text-bg",
							children: "Denetimi başlat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/olay",
							className: "inline-flex min-h-11 items-center border border-line px-4 text-fg",
							children: "Hesap ele geçtiyse"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				className: "p-5 lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "led size-2 bg-crimson",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-crimson",
							children: "SAVUNMA MODU"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-fg",
						children: "Bu laboratuvar istismar kodu, zararlı yazılım, oltalama kiti ve yetkisiz erişim tarifi içermez. Eksik olan kasıtlıdır: başkasına zarar verme yöntemi. Savunma tarafı eksik bırakılmamaya çalışıldı."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Yetkisiz erişim suçtur. Metin hukuki danışmanlık değildir. Depoyu yanlış okumamak için önce sözleşmeyi oku."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/bolum/$slug",
						params: { slug: "sozlesme" },
						className: "mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-widest text-crimson",
						children: ["01 Sözleşme", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "size-4",
							"aria-hidden": "true"
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			"aria-labelledby": "katmanlar",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "katmanlar",
					className: "text-2xl font-medium tracking-tight",
					children: "Yedi katman"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden font-mono text-xs text-faint sm:block",
					children: "BİRİ DÜŞERSE DİĞERİ DURUR"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 border-t border-line",
				children: layers.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bolum/$slug",
					params: { slug: layer.slug },
					className: "grid min-h-16 grid-cols-[3rem_1fr] items-center gap-4 border-b border-line py-3 md:grid-cols-[4rem_10rem_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm text-crimson",
							children: layer.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium md:col-auto",
							children: layer.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "col-span-2 text-sm text-muted md:col-span-1",
							children: layer.text
						})
					]
				}) }, layer.n))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14",
			"aria-labelledby": "dizin",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "INDEX" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "dizin",
						className: "mt-2 text-2xl font-medium tracking-tight",
						children: "El kitabı dizini"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: copyIndex,
						className: "inline-flex min-h-11 items-center self-start border border-line px-4 font-mono text-xs tracking-widest text-fg",
						children: copied ? "Dizin kopyalandı" : "Dizin metnini kopyala"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "relative block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Bölüm ara"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "pointer-events-none absolute top-3 left-3 size-4 text-faint",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "Bölüm ara",
								className: "min-h-11 w-full border border-line bg-bg pr-3 pl-10 text-fg outline-none placeholder:text-faint",
								suppressHydrationWarning: true
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						role: "group",
						"aria-label": "Kime göre süz",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: audience === "hepsi",
							onClick: () => setAudience("hepsi"),
							children: "Tümü"
						}), audiences.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							active: audience === item.id,
							onClick: () => setAudience(item.id),
							children: item.label
						}, item.id))]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 border-t border-line",
					children: shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "py-8 text-muted",
						children: "Bu süzgeçte bölüm yok. Tümüne dön."
					}) : shown.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/bolum/$slug",
						params: { slug: chapter.slug },
						className: "grid gap-2 border-b border-line py-5 md:grid-cols-[4rem_1fr_auto] md:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm text-crimson",
								children: chapter.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-lg font-medium",
										children: chapter.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted",
										children: chapter.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block font-mono text-xs tracking-wide text-faint",
										children: chapter.audiences.map((id) => audienceLabel(id)).join(" · ")
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-faint md:pt-1",
								children: [chapter.readMin, " dk"]
							})
						]
					}) }, chapter.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14 grid gap-4 md:grid-cols-3",
			"aria-label": "Araçlar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCard, {
					code: "A1",
					title: "Oltalama masası",
					text: "Kurmaca altı mektup. Riskli mi, değil mi. Tarif yok, sinyal var.",
					to: "/araclar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCard, {
					code: "A2",
					title: "Denetim skoru",
					text: "Yirmi dört madde. Yalnızca bu cihazda durur. Zayıf kapını gösterir.",
					to: "/denetim"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCard, {
					code: "A3",
					title: "İlk saat",
					text: "Hesap ele geçtiyse sıra. Panik yok, posta önce, izi silme.",
					to: "/olay"
				})
			]
		})
	] });
}
function FilterChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: `inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest ${active ? "bg-crimson text-bg" : "border border-line text-muted"}`,
		children
	});
}
function ToolCard({ code, title, text, to }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "block border border-line bg-surface p-5 hover:border-crimson",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-crimson",
				children: code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 text-lg font-medium",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: text
			})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
