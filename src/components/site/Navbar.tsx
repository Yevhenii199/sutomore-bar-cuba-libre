import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MapPin, Martini } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { LANGS, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "nav_home" as const, href: "#home" },
  { key: "nav_menu" as const, href: "#menu" },
  { key: "nav_gallery" as const, href: "#gallery" },
  { key: "nav_location" as const, href: "#location" },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sutomore+Beach+Montenegro";

export function Navbar() {
  const { lang, setLang, tr } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-sunset text-white shadow-glow">
            <Martini className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl leading-none tracking-wide text-deep">
            Cuba <span className="text-gradient-sunset">Libre</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {tr(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch lang={lang} setLang={setLang} />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full gradient-sunset px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <MapPin className="h-4 w-4" />
            {tr("nav_view_location")}
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {tr(l.key)}
              </a>
            ))}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-sunset px-4 py-3 text-sm font-semibold text-white shadow-glow"
            >
              <MapPin className="h-4 w-4" />
              {tr("nav_view_location")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      role="tablist"
      aria-label="Language"
      className="flex items-center rounded-full border border-border bg-card p-1 text-xs font-semibold"
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          role="tab"
          aria-selected={lang === l.code}
          onClick={() => setLang(l.code)}
          className={cn(
            "rounded-full px-2.5 py-1 transition-all sm:px-3",
            lang === l.code
              ? "gradient-sunset text-white shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
