import { MapPin, Clock, Instagram, Facebook, MessageCircle, Send, Martini } from "lucide-react";
import { useLang } from "@/lib/lang-context";

const MAPS_URL =
  "https://maps.app.goo.gl/zXJmiaQpeMcSE5or8";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Beach+Bar+Cuba+Libre,+Sutomore&t=&z=17&ie=UTF8&iwloc=&output=embed";

export function LocationSection() {
  const { tr } = useLang();
  return (
    <section id="location" className="bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <iframe
              title="Cuba Libre Bar location on Sutomore Beach, Montenegro"
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full sm:h-[480px] lg:h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              / find us
            </p>
            <h2 className="mt-2 font-display text-4xl text-deep sm:text-5xl">
              {tr("loc_title")}
            </h2>

            <div className="mt-8 space-y-4">
              <InfoCard icon={<MapPin className="h-5 w-5" />} label={tr("loc_addr_l")} value={tr("loc_addr")} />
              <InfoCard
                icon={<Clock className="h-5 w-5" />}
                label={tr("loc_hours_l")}
                value={tr("loc_hours")}
                badge={tr("loc_open_daily")}
              />
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full gradient-sunset px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <MapPin className="h-4 w-4" />
              {tr("loc_map_cta")}
            </a>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {tr("loc_follow")}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Social href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} label="Instagram" />
                <Social href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
                <Social href="https://wa.me/38200000000" icon={<MessageCircle className="h-5 w-5" />} label="WhatsApp" />
                <Social href="https://t.me/" icon={<Send className="h-5 w-5" />} label="Telegram" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border/60 bg-deep text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-[1fr_auto] sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full gradient-sunset text-white">
              <Martini className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl">Cuba Libre · Sutomore</p>
              <p className="text-xs text-white/60">{tr("footer_tag")}</p>
            </div>
          </div>
          <p className="text-xs text-white/60 sm:text-right sm:self-center">
            © {new Date().getFullYear()} Cuba Libre Cocktail Bar. {tr("footer_rights")}
          </p>
        </div>
      </footer>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  badge?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
          {badge && (
            <span className="rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-base font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}

function Social({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
    >
      {icon}
    </a>
  );
}
