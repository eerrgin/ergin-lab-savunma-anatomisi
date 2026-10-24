import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { phases } from "@/content/practice";
import { Kicker, SiteShell } from "@/components/site-shell";

const STORAGE_KEY = "ergin-lab-olay-v1";

export const Route = createFileRoute("/olay")({
  component: IncidentPage,
  head: () => ({
    meta: [
      { title: "İlk saat · ERGİN LAB" },
      {
        name: "description",
        content: "Hesap ele geçtiğinde yapılacak ve yapılmayacaklar. Saldırı adımı yoktur.",
      },
    ],
  }),
});

function IncidentPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const value: unknown = JSON.parse(raw);
        if (value && typeof value === "object") {
          const next: Record<string, boolean> = {};
          for (const [key, item] of Object.entries(value)) {
            if (item === true) next[key] = true;
          }
          setDone(next);
        }
      } catch {
        setDone({});
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done, ready]);

  const finished = phases.filter((phase) => done[phase.id]).length;

  return (
    <SiteShell>
      <Kicker>OLAY · İLK SAAT</Kicker>
      <h1 className="mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl">
        Ele geçtiyse sıra bu
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Yeni bir bağlantıya basmak hız değildir. Hız, kapıyı büyütmemektir. İşaretler yalnızca bu
        tarayıcıda durur.
      </p>
      <p className="mt-4 font-mono text-xs tracking-widest text-crimson">
        {finished} / {phases.length} aşama işaretli
      </p>
      <ol className="mt-8 flex flex-col gap-5">
        {phases.map((phase, index) => (
          <li key={phase.id} className="border border-line p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-mono text-xs tracking-widest text-crimson">
                {String(index + 1).padStart(2, "0")} · {phase.minutes}
              </p>
              <button
                type="button"
                aria-pressed={Boolean(done[phase.id])}
                onClick={() => setDone((current) => ({ ...current, [phase.id]: !current[phase.id] }))}
                className={`inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest ${
                  done[phase.id] ? "bg-crimson text-bg" : "border border-line text-muted"
                }`}
              >
                {done[phase.id] ? "Bu aşama bitti" : "Bitti işaretle"}
              </button>
            </div>
            <h2 className="mt-3 text-2xl font-medium">{phase.title}</h2>
            <p className="mt-2 max-w-3xl text-muted">{phase.lead}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-mono text-xs tracking-widest text-crimson">YAP</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {phase.do.map((item) => (
                    <li key={item} className="text-sm text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-widest text-faint">YAPMA</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {phase.dont.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {phase.org ? (
              <div className="mt-5 border-t border-line pt-4">
                <h3 className="font-mono text-xs tracking-widest text-crimson">KURUM</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {phase.org.map((item) => (
                    <li key={item} className="text-sm text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-2xl text-sm text-muted">
        Anlatının tamamı{" "}
        <Link to="/bolum/$slug" params={{ slug: "olay" }} className="text-crimson">
          11. bölümde
        </Link>
        . Ulusal ihbar için{" "}
        <a href="https://www.usom.gov.tr/" className="text-crimson" rel="noreferrer" target="_blank">
          USOM
        </a>{" "}
        kurumun kendi hattıyla birlikte değerlendirilir. Bu sayfa ihbar formu değildir.
      </p>
    </SiteShell>
  );
}
