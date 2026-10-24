import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as SiteShell } from "./site-shell-BkJr8VHY.mjs";
import { n as Route, r as chapterNeighbors } from "./router-yE_E1Avh.mjs";
import { t as audienceLabel } from "./model-BKqueAn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bolum._slug-BVWsVWNn.js
var import_jsx_runtime = require_jsx_runtime();
function anchor(text) {
	return text.toLocaleLowerCase("tr").replace(/[^a-z0-9çğıöşü\s-]/gi, "").trim().replace(/\s+/g, "-");
}
function Blocks({ blocks }) {
	const headings = blocks.filter((block) => block.type === "h");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [headings.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Bölüm içi",
			className: "border border-line bg-surface p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-faint",
				children: "İÇİNDE"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: headings.map((block) => block.type === "h" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${anchor(block.text)}`,
					className: "text-sm text-muted hover:text-fg",
					children: block.text
				}) }, block.text) : null)
			})]
		}) : null, blocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, index))]
	});
}
function BlockView({ block }) {
	if (block.type === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "max-w-3xl text-base text-fg",
		children: block.text
	});
	if (block.type === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		id: anchor(block.text),
		className: "max-w-3xl scroll-mt-20 text-2xl font-medium tracking-tight",
		children: block.text
	});
	if (block.type === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex max-w-3xl flex-col gap-3",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "border-l border-crimson pl-4 text-fg",
			children: item
		}, item))
	});
	if (block.type === "steps") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex max-w-3xl flex-col gap-4",
		children: block.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-sm text-crimson",
				children: String(index + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-medium",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-sm text-muted",
				children: item.text
			})] })]
		}, item.title))
	});
	if (block.type === "note") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "max-w-3xl border border-line bg-surface p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs tracking-widest text-crimson",
			children: block.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-fg",
			children: block.text
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid max-w-3xl gap-4 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border border-line bg-surface p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-xs tracking-widest text-crimson",
				children: "YAP"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-col gap-3",
				children: block.do.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-fg",
					children: item
				}, item))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border border-line p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-mono text-xs tracking-widest text-faint",
				children: "YAPMA"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-col gap-3",
				children: block.dont.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted",
					children: item
				}, item))
			})]
		})]
	});
}
function ChapterPage() {
	const chapter = Route.useLoaderData();
	const { prev, next } = chapterNeighbors(chapter.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-faint",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "hover:text-fg",
					children: "Dizin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: " / "
				}),
				chapter.code
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 border-l border-crimson pl-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: [
					chapter.code,
					" · ",
					chapter.kicker
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl",
					children: chapter.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-lg text-muted",
					children: chapter.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 font-mono text-xs tracking-wide text-faint",
					children: [
						chapter.audiences.map((id) => audienceLabel(id)).join(" · "),
						" · ",
						chapter.readMin,
						" dk · saldırı kodu yok"
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: chapter.blocks })
		}),
		chapter.sources.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12 max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-xs tracking-widest text-faint",
				children: "RESMİ DAYANAK"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-col gap-2",
				children: chapter.sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: source.href,
					className: "text-sm break-all text-crimson underline decoration-line underline-offset-4",
					rel: "noreferrer",
					target: "_blank",
					children: source.label
				}) }, source.href))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mt-12 grid gap-4 border-t border-line pt-6 md:grid-cols-2",
			"aria-label": "Komşu bölümler",
			children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/bolum/$slug",
				params: { slug: prev.slug },
				className: "border border-line p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-faint",
					children: "ÖNCEKİ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-2 block font-medium",
					children: [
						prev.code,
						" ",
						prev.title
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/bolum/$slug",
				params: { slug: next.slug },
				className: "border border-line p-4 md:text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-faint",
					children: "SONRAKİ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-2 block font-medium",
					children: [
						next.code,
						" ",
						next.title
					]
				})]
			}) : null]
		})
	] });
}
//#endregion
export { ChapterPage as component };
