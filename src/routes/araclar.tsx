import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cadence, drills } from "@/content/practice";
import { makePassphrase, passphraseBits } from "@/content/words";
import { Kicker, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/araclar")({
  component: ToolsPage,
  head: () => ({
    meta: [
      { title: "Araçlar · ERGİN LAB" },
      {
        name: "description",
        content:
          "Parola cümlesi alıştırması, oltalama karar masası ve savunma ritmi. Saldırı aracı değildir.",
      },
    ],
  }),
});

function ToolsPage() {
  return (
    <SiteShell>
      <Kicker>ARAÇLAR · AĞA ÇIKMAZ</Kicker>
      <h1 className="mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl">
        Savunma tezgâhı
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Üç araç da tarayıcıda kalır. Paket kurulumu, tarama, kırma ve gönderilebilir şablon yoktur. Kurmaca
        kurumlar gerçek marka değildir.
      </p>
      <PassphraseTool />
      <DrillTool />
      <Cadence />
    </SiteShell>
  );
}

function PassphraseTool() {
  const [count, setCount] = useState(6);
  const [words, setWords] = useState<string[] | null>(null);
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!words) return;
    try {
      await navigator.clipboard.writeText(words.join(" "));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="mt-12 border border-line bg-surface p-5 md:p-6" aria-labelledby="cumle">
      <p className="font-mono text-xs tracking-widest text-crimson">A1 · PAROLA CÜMLESİ</p>
      <h2 id="cumle" className="mt-3 text-2xl font-medium">
        Hatırlanacak ana sır için alıştırma
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-muted">
        Sözcükler bu sayfada üretilir, sunucuya gitmez. Posta ve banka için parola kasasının uzun rastgele
        çıktısını kullan. Bunu, kasanın ana parolasını seçerken bir alıştırma say.
      </p>
      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Sözcük sayısı">
        {[4, 5, 6, 7].map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={count === value}
            onClick={() => {
              setCount(value);
              setWords(null);
              setCopied(false);
            }}
            className={`inline-flex min-h-11 items-center px-3 font-mono text-xs ${
              count === value ? "bg-crimson text-bg" : "border border-line text-muted"
            }`}
          >
            {value} sözcük · ~{passphraseBits(value)} bit
          </button>
        ))}
      </div>
      <p className="mt-5 min-h-16 font-mono text-xl break-words text-fg md:text-2xl">
        {words ? words.join("  ·  ") : "Henüz üretilmedi."}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          className="inline-flex min-h-11 items-center bg-crimson px-4 font-medium text-bg"
          onClick={() => {
            setWords(makePassphrase(count));
            setCopied(false);
          }}
        >
          Cümle üret
        </button>
        <button
          type="button"
          disabled={!words}
          className="inline-flex min-h-11 items-center border border-line px-4 text-fg disabled:opacity-40"
          onClick={copy}
        >
          {copied ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>
    </section>
  );
}

function DrillTool() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const drill = drills[index];

  function answer(risky: boolean) {
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

  return (
    <section className="mt-8 border border-line p-5 md:p-6" aria-labelledby="masa">
      <p className="font-mono text-xs tracking-widest text-crimson">A2 · KURMACA KARAR MASASI</p>
      <h2 id="masa" className="mt-3 text-2xl font-medium">
        Bu talep güvenli mi
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-muted">
        Eğitim kartıdır. Kopyalayıp gönderme. Alan adları .example ile biter, gerçek değildir. Amaç, mektup
        yazmak değil, durman gereken talebi görmektir.
      </p>
      {done ? (
        <div className="mt-6 border border-line bg-surface p-5">
          <p className="font-mono text-xs text-faint">SONUÇ</p>
          <p className="mt-2 text-2xl font-medium">
            {correct} / {drills.length}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Tam isabet şart değil. Şart olan, para, kod ve çalıştırma isteğinde durup ikinci kanala
            geçmektir. Oltalama bölümü aynı sinyalleri anlatır.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex min-h-11 items-center border border-line px-4"
            onClick={() => {
              setIndex(0);
              setChoice(null);
              setCorrect(0);
              setDone(false);
            }}
          >
            Yeniden
          </button>
        </div>
      ) : (
        <div className="mt-6">
          <p className="font-mono text-xs text-faint">
            {index + 1} / {drills.length} · {drill.channel}
          </p>
          <article className="mt-3 border border-line bg-bg p-4">
            <p className="text-sm text-muted">Kimden</p>
            <p className="font-medium">{drill.fromName}</p>
            <p className="font-mono text-xs break-all text-faint">{drill.fromAddr}</p>
            <p className="mt-4 text-sm text-muted">Konu</p>
            <p className="font-medium">{drill.subject}</p>
            <p className="mt-4 text-sm leading-relaxed text-fg">{drill.body}</p>
          </article>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              disabled={choice !== null}
              onClick={() => answer(false)}
              className="inline-flex min-h-11 items-center justify-center border border-line px-4 disabled:opacity-40"
            >
              Güvenli görünüyor
            </button>
            <button
              type="button"
              disabled={choice !== null}
              onClick={() => answer(true)}
              className="inline-flex min-h-11 items-center justify-center bg-crimson px-4 font-medium text-bg disabled:opacity-40"
            >
              Riskli, dur
            </button>
          </div>
          {choice !== null ? (
            <div className="mt-5 border-t border-line pt-5">
              <p className="font-mono text-xs tracking-widest text-crimson">
                {choice === drill.risky ? "AYNI YÖN" : "BİR DAHA BAK"}
              </p>
              <p className="mt-3 max-w-3xl text-sm text-fg">{drill.why}</p>
              <ul className="mt-4 flex max-w-3xl flex-col gap-2">
                {drill.signals.map((signal) => (
                  <li key={signal} className="border-l border-crimson pl-3 text-sm text-muted">
                    {signal}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={next}
                className="mt-5 inline-flex min-h-11 items-center border border-line px-4"
              >
                {index + 1 === drills.length ? "Sonucu gör" : "Sonraki kart"}
              </button>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}

function Cadence() {
  return (
    <section className="mt-8" aria-labelledby="ritim">
      <h2 id="ritim" className="text-2xl font-medium">
        Savunma ritmi
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Büyük proje diye erteleme. Takvime yapışan kısa iş, yılda bir yapılan denetimden daha çok kapı
        kapatır.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {cadence.map((block) => (
          <article key={block.when} className="border border-line p-5">
            <h3 className="font-mono text-xs tracking-widest text-crimson">{block.when}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {block.items.map((item) => (
                <li key={item} className="text-sm text-fg">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
