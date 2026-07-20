import { useState } from "react";
import { useLang } from "@/lib/lang-context";
import { MENU, descOf, type Category } from "@/lib/menu-data";
import { cn } from "@/lib/utils";
import type { t as tDict } from "@/lib/i18n";

const CATEGORIES: { key: Category; label: keyof typeof tDict }[] = [
  { key: "signature", label: "cat_signature" },
  { key: "classic", label: "cat_classic" },
  { key: "shots", label: "cat_shots" },
  { key: "beer", label: "cat_beer" },
];

export function MenuSection() {
  const { tr, lang } = useLang();
  const [active, setActive] = useState<Category>("signature");
  const items = MENU.filter((m) => m.category === active);

  return (
    <section id="menu" className="relative bg-deep text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_20%_10%,var(--sunset),transparent),radial-gradient(50%_50%_at_90%_90%,var(--teal),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-coral">
              / la carta
            </p>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl">{tr("menu_title")}</h2>
            <p className="mt-3 text-lg text-white/70">{tr("menu_sub")}</p>
          </div>
        </div>

        <div
          role="tablist"
          className="mt-10 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:flex-none sm:px-5",
                active === c.key
                  ? "gradient-sunset text-white shadow-glow"
                  : "text-white/70 hover:text-white"
              )}
            >
              {tr(c.label)}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-coral/50 hover:bg-white/[0.07]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl tracking-wide">{item.name}</h3>
                <span className="rounded-full gradient-sunset px-3 py-1 text-sm font-bold text-white">
                  {item.price}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-coral/90">
                {item.ingredients}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {descOf(item, lang)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
