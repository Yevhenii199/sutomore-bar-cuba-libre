import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-beach.jpg";
import { useLang } from "@/lib/lang-context";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sutomore+Beach+Montenegro";

export function Hero() {
  const { tr } = useLang();
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Cuba Libre beach bar at sunset on Sutomore beach"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-deep/70 via-deep/40 to-sunset/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          {tr("hero_kicker")}
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] text-white sm:text-7xl md:text-8xl">
          {tr("hero_title_a")}
          <br />
          <span className="text-gradient-sunset">{tr("hero_title_b")}</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
          {tr("hero_sub")}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 rounded-full gradient-sunset px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            {tr("hero_cta_menu")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <MapPin className="h-4 w-4" />
            {tr("hero_cta_dir")}
          </a>
        </div>
      </div>
    </section>
  );
}
