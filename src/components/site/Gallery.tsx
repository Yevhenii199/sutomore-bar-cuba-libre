import corona from "@/assets/gallery-corona.jpg";
import mural from "@/assets/gallery-mural.jpg";
import mojito from "@/assets/gallery-mojito.jpg";
import sunbeds from "@/assets/gallery-sunbeds.jpg";
import signpost from "@/assets/gallery-signpost.jpg";
import hero from "@/assets/hero-beach.jpg";

import beachSign from "@/assets/gallery-beach-sign.jpg";
import barInterior from "@/assets/gallery-bar-interior.jpg";
import menuBoard from "@/assets/gallery-menu-board.jpg";

// Новий імпорт для входу з прапором
import entrance from "@/assets/gallery-entrance.jpg";

import { useLang } from "@/lib/lang-context";

const shots = [
  { src: sunbeds, alt: "Beach sunbeds at sunset", span: "sm:col-span-2 sm:row-span-2" },
  { src: corona, alt: "Cold Corona beer at sunset", span: "" },
  { src: mojito, alt: "Fresh mojito on the beach", span: "" },
  { src: entrance, alt: "Cuba Libre entrance with Cuban flag and straw arch", span: "sm:col-span-2" },
  { src: barInterior, alt: "Rustic wooden beach bar interior with straw roof", span: "sm:col-span-2" },
  { src: beachSign, alt: "Wooden beach direction signpost by the sea", span: "" },
  { src: menuBoard, alt: "Hand-painted wooden cocktail menu board", span: "" },
  { src: mural, alt: "Cuban mural wall art", span: "sm:col-span-2" },
  { src: signpost, alt: "Havana Miami Cuba wooden signpost", span: "" },
  { src: hero, alt: "Sunset beach bar", span: "" },
];

export function Gallery() {
  const { tr } = useLang();
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          / gallery
        </p>
        <h2 className="mt-2 font-display text-4xl text-deep sm:text-5xl">
          {tr("gallery_title")}
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">{tr("gallery_sub")}</p>
      </div>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4">
        {shots.map((s, i) => (
          <figure
            key={i}
            className={`group relative overflow-hidden rounded-2xl shadow-card ${s.span}`}
          >
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </figure>
        ))}
      </div>
    </section>
  );
}