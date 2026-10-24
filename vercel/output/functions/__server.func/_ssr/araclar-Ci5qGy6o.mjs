import { i as __toESM } from "../_runtime.mjs";
import { n as cadence, r as drills } from "./practice-BBjMtpMd.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Kicker, r as SiteShell } from "./site-shell-BkJr8VHY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/araclar-Ci5qGy6o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Tarayıcıda parola cümlesi için sade Türkçe sözcükler. Saldırı sözlüğü değildir. */
var WORDS = [
	"nehir",
	"lamba",
	"defter",
	"zeytin",
	"kuzey",
	"merdiven",
	"pencere",
	"harita",
	"ekmek",
	"limon",
	"istasyon",
	"bulut",
	"cetvel",
	"pusula",
	"rüzgar",
	"kalem",
	"fener",
	"kitap",
	"bahçe",
	"deniz",
	"kahve",
	"orman",
	"köprü",
	"vagon",
	"nane",
	"saat",
	"çekirdek",
	"yelken",
	"sepet",
	"mendil",
	"fincan",
	"söğüt",
	"tebeşir",
	"peron",
	"oda",
	"kumsal",
	"ızgara",
	"nar",
	"iplik",
	"zil",
	"ocak",
	"radar",
	"ada",
	"taş",
	"yol",
	"gece",
	"sabah",
	"dağ",
	"göl",
	"çay",
	"tuz",
	"bal",
	"üzüm",
	"incir",
	"ceviz",
	"biber",
	"sofra",
	"masa",
	"sandalye",
	"avlu",
	"çatı",
	"kuyu",
	"değirmen",
	"tarla",
	"bağ",
	"iskele",
	"liman",
	"dümen",
	"halat",
	"çapa",
	"fırtına",
	"şafak",
	"alacakaranlık",
	"yıldız",
	"ay",
	"kış",
	"yaz",
	"ilkbahar",
	"sonbahar",
	"mercan",
	"kervan"
];
function passphraseBits(count) {
	return Math.round(Math.log2(WORDS.length) * count);
}
function makePassphrase(count) {
	const picked = [];
	const used = /* @__PURE__ */ new Set();
	while (picked.length < count) {
		const index = randomIndex(WORDS.length);
		if (used.has(index)) continue;
		used.add(index);
		picked.push(WORDS[index]);
	}
	return picked;
}
function randomIndex(max) {
	const limit = Math.floor(4294967296 / max) * max;
	const buf = /* @__PURE__ */ new Uint32Array(1);
	let value = 0;
	do {
		crypto.getRandomValues(buf);
		value = buf[0] ?? 0;
	} while (value >= limit);
	return value % max;
}
function ToolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "ARAÇLAR · AĞA ÇIKMAZ" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl",
			children: "Savunma tezgâhı"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-lg text-muted",
			children: "Üç araç da tarayıcıda kalır. Paket kurulumu, tarama, kırma ve gönderilebilir şablon yoktur. Kurmaca kurumlar gerçek marka değildir."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassphraseTool, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrillTool, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cadence, {})
	] });
}
function PassphraseTool() {
	const [count, setCount] = (0, import_react.useState)(6);
	const [words, setWords] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copy() {
		if (!words) return;
		try {
			await navigator.clipboard.writeText(words.join(" "));
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12 border border-line bg-surface p-5 md:p-6",
		"aria-labelledby": "cumle",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-crimson",
				children: "A1 · PAROLA CÜMLESİ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "cumle",
				className: "mt-3 text-2xl font-medium",
				children: "Hatırlanacak ana sır için alıştırma"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl text-sm text-muted",
				children: "Sözcükler bu sayfada üretilir, sunucuya gitmez. Posta ve banka için parola kasasının uzun rastgele çıktısını kullan. Bunu, kasanın ana parolasını seçerken bir alıştırma say."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Sözcük sayısı",
				children: [
					4,
					5,
					6,
					7
				].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": count === value,
					onClick: () => {
						setCount(value);
						setWords(null);
						setCopied(false);
					},
					className: `inline-flex min-h-11 items-center px-3 font-mono text-xs ${count === value ? "bg-crimson text-bg" : "border border-line text-muted"}`,
					children: [
						value,
						" sözcük · ~",
						passphraseBits(value),
						" bit"
					]
				}, value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 min-h-16 font-mono text-xl break-words text-fg md:text-2xl",
				children: words ? words.join("  ·  ") : "Henüz üretilmedi."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex min-h-11 items-center bg-crimson px-4 font-medium text-bg",
					onClick: () => {
						setWords(makePassphrase(count));
						setCopied(false);
					},
					children: "Cümle üret"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					disabled: !words,
					className: "inline-flex min-h-11 items-center border border-line px-4 text-fg disabled:opacity-40",
					onClick: copy,
					children: copied ? "Kopyalandı" : "Kopyala"
				})]
			})
		]
	});
}
function DrillTool() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [choice, setChoice] = (0, import_react.useState)(null);
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const drill = drills[index];
	function answer(risky) {
		if (choice !== null || !drill) return;
		setChoice(risky);
		if (risky === drill.risky) setCorrect((value) => value + 1);
	}
	function next() {
		if (index + 1 >= drills.length) {
			setDone(true);
			return;
		}
		setIndex((value) => value + 1);
		setChoice(null);
	}
	if (!drill) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 border border-line p-5 md:p-6",
		"aria-labelledby": "masa",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-widest text-crimson",
				children: "A2 · KURMACA KARAR MASASI"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "masa",
				className: "mt-3 text-2xl font-medium",
				children: "Bu talep güvenli mi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-3xl text-sm text-muted",
				children: "Eğitim kartıdır. Kopyalayıp gönderme. Alan adları .example ile biter, gerçek değildir. Amaç, mektup yazmak değil, durman gereken talebi görmektir."
			}),
			done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 border border-line bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-faint",
						children: "SONUÇ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-2xl font-medium",
						children: [
							correct,
							" / ",
							drills.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-muted",
						children: "Tam isabet şart değil. Şart olan, para, kod ve çalıştırma isteğinde durup ikinci kanala geçmektir. Oltalama bölümü aynı sinyalleri anlatır."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-5 inline-flex min-h-11 items-center border border-line px-4",
						onClick: () => {
							setIndex(0);
							setChoice(null);
							setCorrect(0);
							setDone(false);
						},
						children: "Yeniden"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-faint",
						children: [
							index + 1,
							" / ",
							drills.length,
							" · ",
							drill.channel
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mt-3 border border-line bg-bg p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Kimden"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: drill.fromName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs break-all text-faint",
								children: drill.fromAddr
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted",
								children: "Konu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: drill.subject
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-fg",
								children: drill.body
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: choice !== null,
							onClick: () => answer(false),
							className: "inline-flex min-h-11 items-center justify-center border border-line px-4 disabled:opacity-40",
							children: "Güvenli görünüyor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: choice !== null,
							onClick: () => answer(true),
							className: "inline-flex min-h-11 items-center justify-center bg-crimson px-4 font-medium text-bg disabled:opacity-40",
							children: "Riskli, dur"
						})]
					}),
					choice !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 border-t border-line pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest text-crimson",
								children: choice === drill.risky ? "AYNI YÖN" : "BİR DAHA BAK"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-3xl text-sm text-fg",
								children: drill.why
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex max-w-3xl flex-col gap-2",
								children: drill.signals.map((signal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-l border-crimson pl-3 text-sm text-muted",
									children: signal
								}, signal))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: next,
								className: "mt-5 inline-flex min-h-11 items-center border border-line px-4",
								children: index + 1 === drills.length ? "Sonucu gör" : "Sonraki kart"
							})
						]
					}) : null
				]
			})
		]
	});
}
function Cadence() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8",
		"aria-labelledby": "ritim",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "ritim",
				className: "text-2xl font-medium",
				children: "Savunma ritmi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted",
				children: "Büyük proje diye erteleme. Takvime yapışan kısa iş, yılda bir yapılan denetimden daha çok kapı kapatır."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-4 md:grid-cols-2",
				children: cadence.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-line p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-mono text-xs tracking-widest text-crimson",
						children: block.when
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-col gap-3",
						children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-fg",
							children: item
						}, item))
					})]
				}, block.when))
			})
		]
	});
}
//#endregion
export { ToolsPage as component };
