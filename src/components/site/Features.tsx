import { GlassWater, Umbrella, Music4 } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import type { t as tDict } from "@/lib/i18n";

const features: {
  icon: typeof GlassWater;
  title: keyof typeof tDict;
  desc: keyof typeof tDict;
}[] = [
  { icon: GlassWater, title: "feat1_t", desc: "feat1_d" },
  { icon: Umbrella, title: "feat2_t", desc: "feat2_d" },
  { icon: Music4, title: "feat3_t", desc: "feat3_d" },
];

export function Features() {
  const { tr } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          / vibe
        </p>
        <h2 className="mt-2 font-display text-4xl text-deep sm:text-5xl">
          {tr("features_title")}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{tr("features_sub")}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <article
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-1 gradient-sunset opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="inline-grid h-14 w-14 place-items-center rounded-2xl gradient-sunset text-white shadow-glow">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-2xl text-deep">{tr(f.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tr(f.desc)}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
