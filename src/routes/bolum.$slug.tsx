import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { chapterNeighbors, getChapter } from "@/content/chapters";
import { audienceLabel } from "@/content/model";
import { Blocks } from "@/components/blocks";
import { Kicker, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/bolum/$slug")({
  loader: ({ params }) => {
    const chapter = getChapter(params.slug);
    if (!chapter) throw notFound();
    return chapter;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.code} ${loaderData.title} · ERGİN LAB` },
          { name: "description", content: loaderData.summary },
        ]
      : [{ title: "Bölüm bulunamadı · ERGİN LAB" }],
  }),
  notFoundComponent: MissingChapter,
  component: ChapterPage,
});

function ChapterPage() {
  const chapter = Route.useLoaderData();
  const { prev, next } = chapterNeighbors(chapter.slug);

  return (
    <SiteShell>
      <p className="font-mono text-xs text-faint">
        <Link to="/" className="hover:text-fg">
          Dizin
        </Link>
        <span aria-hidden="true"> / </span>
        {chapter.code}
      </p>
      <div className="mt-6 border-l border-crimson pl-5">
        <Kicker>
          {chapter.code} · {chapter.kicker}
        </Kicker>
        <h1 className="mt-3 max-w-3xl text-4xl leading-none font-medium tracking-tight md:text-5xl">
          {chapter.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{chapter.summary}</p>
        <p className="mt-4 font-mono text-xs tracking-wide text-faint">
          {chapter.audiences.map((id) => audienceLabel(id)).join(" · ")} · {chapter.readMin} dk · saldırı
          kodu yok
        </p>
      </div>
      <div className="mt-10">
        <Blocks blocks={chapter.blocks} />
      </div>
      {chapter.sources.length > 0 ? (
        <section className="mt-12 max-w-3xl">
          <h2 className="font-mono text-xs tracking-widest text-faint">RESMİ DAYANAK</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {chapter.sources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  className="text-sm break-all text-crimson underline decoration-line underline-offset-4"
                  rel="noreferrer"
                  target="_blank"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <nav className="mt-12 grid gap-4 border-t border-line pt-6 md:grid-cols-2" aria-label="Komşu bölümler">
        {prev ? (
          <Link to="/bolum/$slug" params={{ slug: prev.slug }} className="border border-line p-4">
            <span className="font-mono text-xs text-faint">ÖNCEKİ</span>
            <span className="mt-2 block font-medium">
              {prev.code} {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/bolum/$slug"
            params={{ slug: next.slug }}
            className="border border-line p-4 md:text-right"
          >
            <span className="font-mono text-xs text-faint">SONRAKİ</span>
            <span className="mt-2 block font-medium">
              {next.code} {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </SiteShell>
  );
}

function MissingChapter() {
  return (
    <SiteShell>
      <Kicker>YOK</Kicker>
      <h1 className="mt-3 text-3xl font-medium">Bu bölüm dizinde yok</h1>
      <Link to="/" className="mt-6 inline-flex min-h-11 items-center text-crimson">
        Dizine dön
      </Link>
    </SiteShell>
  );
}
