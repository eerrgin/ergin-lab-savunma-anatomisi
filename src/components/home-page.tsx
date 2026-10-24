import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { chapters } from "@/content/chapters";
import { audienceLabel, audiences, layers, type AudienceId } from "@/content/model";
import { Frame, Kicker, SiteShell } from "@/components/site-shell";

export function HomePage() {
  const [audience, setAudience] = useState<AudienceId | "hepsi">("hepsi");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const shown = useMemo(() => {
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
      ...chapters.map((chapter) => `- ${chapter.code} ${chapter.title} — ${chapter.summary}`),
    ].join("\n");
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <SiteShell>
      <section className="grid items-end gap-8 lg:grid-cols-12">
        <div className="border-l border-crimson pl-5 lg:col-span-7">
          <Kicker>EL KİTABI · BAĞIŞIKLIK · 2026</Kicker>
          <h1 className="mt-4 max-w-xl text-4xl leading-none font-medium tracking-tight md:text-6xl">
            Savunma anatomisi
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Kişisel hesaptan sistem odasına. Saldırı tarifi yok. Katman katman korunma. Sihir değil, sıkıcı
            disiplin.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/denetim"
              className="inline-flex min-h-11 items-center bg-crimson px-4 font-medium text-bg"
            >
              Denetimi başlat
            </Link>
            <Link
              to="/olay"
              className="inline-flex min-h-11 items-center border border-line px-4 text-fg"
            >
              Hesap ele geçtiyse
            </Link>
          </div>
        </div>
        <Frame className="p-5 lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="led size-2 bg-crimson" aria-hidden="true" />
            <p className="font-mono text-xs tracking-widest text-crimson">SAVUNMA MODU</p>
          </div>
          <p className="mt-4 text-sm text-fg">
            Bu laboratuvar istismar kodu, zararlı yazılım, oltalama kiti ve yetkisiz erişim tarifi içermez.
            Eksik olan kasıtlıdır: başkasına zarar verme yöntemi. Savunma tarafı eksik bırakılmamaya
            çalışıldı.
          </p>
          <p className="mt-4 text-sm text-muted">
            Yetkisiz erişim suçtur. Metin hukuki danışmanlık değildir. Depoyu yanlış okumamak için önce
            sözleşmeyi oku.
          </p>
          <Link
            to="/bolum/$slug"
            params={{ slug: "sozlesme" }}
            className="mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-widest text-crimson"
          >
            01 Sözleşme
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Frame>
      </section>

      <section className="mt-14" aria-labelledby="katmanlar">
        <div className="flex items-end justify-between gap-4">
          <h2 id="katmanlar" className="text-2xl font-medium tracking-tight">
            Yedi katman
          </h2>
          <p className="hidden font-mono text-xs text-faint sm:block">BİRİ DÜŞERSE DİĞERİ DURUR</p>
        </div>
        <ol className="mt-5 border-t border-line">
          {layers.map((layer) => (
            <li key={layer.n}>
              <Link
                to="/bolum/$slug"
                params={{ slug: layer.slug }}
                className="grid min-h-16 grid-cols-[3rem_1fr] items-center gap-4 border-b border-line py-3 md:grid-cols-[4rem_10rem_1fr]"
              >
                <span className="font-mono text-sm text-crimson">{layer.n}</span>
                <span className="font-medium md:col-auto">{layer.name}</span>
                <span className="col-span-2 text-sm text-muted md:col-span-1">{layer.text}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14" aria-labelledby="dizin">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker>INDEX</Kicker>
            <h2 id="dizin" className="mt-2 text-2xl font-medium tracking-tight">
              El kitabı dizini
            </h2>
          </div>
          <button
            type="button"
            onClick={copyIndex}
            className="inline-flex min-h-11 items-center self-start border border-line px-4 font-mono text-xs tracking-widest text-fg"
          >
            {copied ? "Dizin kopyalandı" : "Dizin metnini kopyala"}
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <label className="relative block">
            <span className="sr-only">Bölüm ara</span>
            <Search className="pointer-events-none absolute top-3 left-3 size-4 text-faint" aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Bölüm ara"
              className="min-h-11 w-full border border-line bg-bg pr-3 pl-10 text-fg outline-none placeholder:text-faint"
              suppressHydrationWarning
            />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Kime göre süz">
            <FilterChip active={audience === "hepsi"} onClick={() => setAudience("hepsi")}>
              Tümü
            </FilterChip>
            {audiences.map((item) => (
              <FilterChip
                key={item.id}
                active={audience === item.id}
                onClick={() => setAudience(item.id)}
              >
                {item.label}
              </FilterChip>
            ))}
          </div>
        </div>

        <ul className="mt-4 border-t border-line">
          {shown.length === 0 ? (
            <li className="py-8 text-muted">Bu süzgeçte bölüm yok. Tümüne dön.</li>
          ) : (
            shown.map((chapter) => (
              <li key={chapter.slug}>
                <Link
                  to="/bolum/$slug"
                  params={{ slug: chapter.slug }}
                  className="grid gap-2 border-b border-line py-5 md:grid-cols-[4rem_1fr_auto] md:gap-4"
                >
                  <span className="font-mono text-sm text-crimson">{chapter.code}</span>
                  <span className="min-w-0">
                    <span className="block text-lg font-medium">{chapter.title}</span>
                    <span className="mt-1 block text-sm text-muted">{chapter.summary}</span>
                    <span className="mt-2 block font-mono text-xs tracking-wide text-faint">
                      {chapter.audiences.map((id) => audienceLabel(id)).join(" · ")}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-faint md:pt-1">{chapter.readMin} dk</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3" aria-label="Araçlar">
        <ToolCard
          code="A1"
          title="Oltalama masası"
          text="Kurmaca altı mektup. Riskli mi, değil mi. Tarif yok, sinyal var."
          to="/araclar"
        />
        <ToolCard
          code="A2"
          title="Denetim skoru"
          text="Yirmi dört madde. Yalnızca bu cihazda durur. Zayıf kapını gösterir."
          to="/denetim"
        />
        <ToolCard
          code="A3"
          title="İlk saat"
          text="Hesap ele geçtiyse sıra. Panik yok, posta önce, izi silme."
          to="/olay"
        />
      </section>
    </SiteShell>
  );
}

function FilterChip({
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
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest ${
        active ? "bg-crimson text-bg" : "border border-line text-muted"
      }`}
    >
      {children}
    </button>
  );
}

function ToolCard({
  code,
  title,
  text,
  to,
}: {
  code: string;
  title: string;
  text: string;
  to: "/araclar" | "/denetim" | "/olay";
}) {
  return (
    <Link to={to} className="block border border-line bg-surface p-5 hover:border-crimson">
      <p className="font-mono text-xs tracking-widest text-crimson">{code}</p>
      <h3 className="mt-3 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted">{text}</p>
    </Link>
  );
}
