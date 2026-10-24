import type { Block } from "@/content/model";

function anchor(text: string): string {
  return text
    .toLocaleLowerCase("tr")
    .replace(/[^a-z0-9çğıöşü\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  const headings = blocks.filter((block) => block.type === "h");

  return (
    <div className="flex flex-col gap-8">
      {headings.length > 1 ? (
        <nav aria-label="Bölüm içi" className="border border-line bg-surface p-4">
          <p className="font-mono text-xs tracking-widest text-faint">İÇİNDE</p>
          <ul className="mt-3 flex flex-col gap-2">
            {headings.map((block) =>
              block.type === "h" ? (
                <li key={block.text}>
                  <a href={`#${anchor(block.text)}`} className="text-sm text-muted hover:text-fg">
                    {block.text}
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        </nav>
      ) : null}
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="max-w-3xl text-base text-fg">{block.text}</p>;
  }

  if (block.type === "h") {
    return (
      <h2 id={anchor(block.text)} className="max-w-3xl scroll-mt-20 text-2xl font-medium tracking-tight">
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="flex max-w-3xl flex-col gap-3">
        {block.items.map((item) => (
          <li key={item} className="border-l border-crimson pl-4 text-fg">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="flex max-w-3xl flex-col gap-4">
        {block.items.map((item, index) => (
          <li key={item.title} className="grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-4">
            <span className="font-mono text-sm text-crimson">{String(index + 1).padStart(2, "0")}</span>
            <span>
              <span className="block font-medium">{item.title}</span>
              <span className="mt-1 block text-sm text-muted">{item.text}</span>
            </span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "note") {
    return (
      <aside className="max-w-3xl border border-line bg-surface p-5">
        <p className="font-mono text-xs tracking-widest text-crimson">{block.title}</p>
        <p className="mt-3 text-sm text-fg">{block.text}</p>
      </aside>
    );
  }

  return (
    <div className="grid max-w-3xl gap-4 md:grid-cols-2">
      <section className="border border-line bg-surface p-5">
        <h3 className="font-mono text-xs tracking-widest text-crimson">YAP</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {block.do.map((item) => (
            <li key={item} className="text-sm text-fg">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="border border-line p-5">
        <h3 className="font-mono text-xs tracking-widest text-faint">YAPMA</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {block.dont.map((item) => (
            <li key={item} className="text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
