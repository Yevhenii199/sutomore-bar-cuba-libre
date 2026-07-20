import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/lang-context";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { LocationSection } from "@/components/site/LocationSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuba Libre Cocktail Bar · Sutomore Beach, Montenegro" },
      {
        name: "description",
        content:
          "Best cocktails, ice cold beer and sunset vibes on Sutomore Beach, Montenegro. Beachfront Cuban-style bar since 2001.",
      },
      { property: "og:title", content: "Cuba Libre Cocktail Bar · Sutomore Beach, Montenegro" },
      {
        property: "og:description",
        content: "Best cocktails, ice cold beer and sunset vibes on Sutomore Beach, Montenegro. Beachfront Cuban-style bar since 2001.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <MenuSection />
          <Gallery />
          <LocationSection />
        </main>
      </div>
    </LangProvider>
  );
}
