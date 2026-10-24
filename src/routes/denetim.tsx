import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { audienceLabel, audiences, type AudienceId } from "@/content/model";
import { auditItems } from "@/content/practice";
import { Kicker, SiteShell } from "@/components/site-shell";

const STORAGE_KEY = "ergin-lab-denetim-v1";

type Score = 0 | 1 | 2;

export const Route = createFileRoute("/denetim")({
  component: AuditPage,
  head: () => ({
    meta: [
      { title: "Denetim · ERGİN LAB" },
      {
        name: "description",
        content: "Yirmi dört savunma maddesi. Skor yalnızca bu tarayıcıda saklanır.",
      },
    ],
  }),
});

function AuditPage() {
  const [answers, setAnswers] = useState<Record<string, Score>>({});
  const [ready, setReady] = useState(false);
  const [filter, setFilter] = useState<AudienceId | "hepsi">("hepsi");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setAnswers(parseAnswers(raw));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers, ready]);

  const visible = auditItems.filter((item) => filter === "hepsi" || item.audience === filter);
  const scored = useMemo(() => {
    const points = auditItems.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
    const max = auditItems.length * 2;
    const percent = Math.round((points / max) * 100);
    return { points, max, percent, band: bandFor(percent) };
  }, [answers]);

  const gaps = auditItems.filter((item) => (answers[item.id] ?? 0) < 2);

  async function copyGaps() {
    const lines = gaps.map((item) => `- (${audienceLabel(item.audience)}) ${item.text}`);
    const text = ["ERGİN LAB denetim — eksik kalanlar", "", ...lines].join("\n");
    try {
      await navigator.clipboard.writeText(text || "Eksik madde yok.");
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <SiteShell>
      <Kicker>DENETİM · BU CİHAZDA KALIR</Kicker>
      <h1 className="mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl">
        Kapıların hangisi açık
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Evet iki puan, kısmen bir, hayır sıfır. Kısmen: başladı ama her hesabı veya her sistemi
        kapsamıyor. Sonuç bir sertifika değil, bu haftanın iş listesidir.
      </p>

      <section className="mt-8 border border-line bg-surface p-5" aria-live="polite">
        <p className="font-mono text-xs tracking-widest text-faint">SKOR</p>
        <p className="mt-2 text-4xl font-medium tracking-tight">{ready ? `${scored.percent}` : "—"}</p>
        <div className="mt-4 h-1 bg-line">
          <div className="h-1 bg-crimson" style={{ width: `${ready ? scored.percent : 0}%` }} />
        </div>
        <p className="mt-4 max-w-2xl text-sm text-fg">{scored.band}</p>
        <p className="mt-2 font-mono text-xs text-faint">
          {scored.points} / {scored.max} puan · {auditItems.length} madde
        </p>
      </section>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Kitle">
        <Filter active={filter === "hepsi"} onClick={() => setFilter("hepsi")}>
          Tümü
        </Filter>
        {audiences.map((item) => (
          <Filter key={item.id} active={filter === item.id} onClick={() => setFilter(item.id)}>
            {item.label}
          </Filter>
        ))}
      </div>

      <ul className="mt-6 flex flex-col gap-4">
        {visible.map((item) => (
          <li key={item.id} className="border border-line p-4">
            <p className="font-mono text-xs tracking-widest text-faint">{audienceLabel(item.audience)}</p>
            <p className="mt-2 text-fg">{item.text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Choice
                pressed={answers[item.id] === 2}
                onClick={() => setAnswers((current) => ({ ...current, [item.id]: 2 }))}
              >
                Evet
              </Choice>
              <Choice
                pressed={answers[item.id] === 1}
                onClick={() => setAnswers((current) => ({ ...current, [item.id]: 1 }))}
              >
                Kısmen
              </Choice>
              <Choice
                pressed={answers[item.id] === 0}
                onClick={() => setAnswers((current) => ({ ...current, [item.id]: 0 }))}
              >
                Hayır
              </Choice>
              <Link
                to="/bolum/$slug"
                params={{ slug: item.chapter }}
                className="inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest text-crimson"
              >
                Bölümü aç
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={copyGaps}
          className="inline-flex min-h-11 items-center bg-crimson px-4 font-medium text-bg"
        >
          {copied ? "Eksikler kopyalandı" : "Eksik maddeleri kopyala"}
        </button>
        <button
          type="button"
          onClick={() => {
            setAnswers({});
            setCopied(false);
          }}
          className="inline-flex min-h-11 items-center border border-line px-4"
        >
          Sıfırla
        </button>
      </div>
    </SiteShell>
  );
}

function bandFor(percent: number): string {
  if (percent < 40) {
    return "Kritik açıklık. Bu hafta postaya çok adımlı doğrulama, benzersiz parola ve en az bir ayrı yedek.";
  }
  if (percent < 70) {
    return "Temel var, delik duruyor. Kısmen dediğin satırlar genelde yönetici hesabı, yedek provası veya yönlendirme kuralıdır. Onlardan başla.";
  }
  if (percent < 90) {
    return "Sağlam alışkanlık. Kalan açıklar çoğu zaman terk edilmiş alan adı, eski ajans anahtarı veya denenmemiş yedektir.";
  }
  return "Disiplin yüksek. Rehavet yeni risktir. Çeyrekte bir provayı ve ayrılan kişinin erişimini yeniden sor.";
}

function parseAnswers(raw: string): Record<string, Score> {
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return {};
    const out: Record<string, Score> = {};
    for (const [key, item] of Object.entries(value)) {
      if (item === 0 || item === 1 || item === 2) out[key] = item;
    }
    return out;
  } catch {
    return {};
  }
}

function Filter({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest ${
        active ? "bg-crimson text-bg" : "border border-line text-muted"
      }`}
    >
      {children}
    </button>
  );
}

function Choice({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center px-3 text-sm ${
        pressed ? "bg-crimson text-bg" : "border border-line text-fg"
      }`}
    >
      {children}
    </button>
  );
}
