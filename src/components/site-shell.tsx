import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Shield, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const NAV = [
  { to: "/", label: "Dizin" },
  { to: "/araclar", label: "Araçlar" },
  { to: "/denetim", label: "Denetim" },
  { to: "/olay", label: "Olay" },
  { to: "/bolum/$slug", label: "Sözleşme", params: { slug: "sozlesme" } },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="lab-grid min-h-screen">
      <div className="h-0.5 bg-crimson" />
      <header className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          <Link to="/" className="flex min-h-11 items-center gap-2">
            <Shield className="size-5 text-crimson" strokeWidth={1.75} aria-hidden="true" />
            <span className="font-mono text-sm tracking-widest text-fg">ERGİN LAB</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Ana menü">
            {NAV.map((item) => (
              <NavLink key={item.label} item={item} path={path} />
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-line text-fg md:hidden"
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open ? (
          <nav className="border-t border-line px-4 py-3 md:hidden" aria-label="Mobil menü">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.label}>
                  <NavLink item={item} path={path} block />
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted md:px-6">
          <p className="font-mono text-xs tracking-widest text-crimson">SAVUNMA DERLEMESİ · EKİM 2026</p>
          <p>
            İstismar kodu, zararlı yazılım ve saldırı tarifi yoktur. Yetkisiz erişim suçtur. Bu metin hukuki
            danışmanlık değildir.
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  item,
  path,
  block,
}: {
  item: (typeof NAV)[number];
  path: string;
  block?: boolean;
}) {
  const active =
    item.to === "/"
      ? path === "/"
      : item.to === "/bolum/$slug"
        ? path.endsWith("/sozlesme")
        : path === item.to || path.startsWith(`${item.to}/`);

  const className = [
    "inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest",
    block ? "w-full" : "",
    active ? "text-crimson" : "text-muted hover:text-fg",
  ].join(" ");

  if (item.to === "/bolum/$slug") {
    return (
      <Link to={item.to} params={item.params} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <Link to={item.to} className={className}>
      {item.label}
    </Link>
  );
}

export function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-line bg-surface ${className}`}>
      <span className="pointer-events-none absolute -top-px -left-px size-3 border-t border-l border-crimson" />
      <span className="pointer-events-none absolute -top-px -right-px size-3 border-t border-r border-crimson" />
      <span className="pointer-events-none absolute -bottom-px -left-px size-3 border-b border-l border-crimson" />
      <span className="pointer-events-none absolute -right-px -bottom-px size-3 border-r border-b border-crimson" />
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs tracking-widest text-crimson">{children}</p>;
}
