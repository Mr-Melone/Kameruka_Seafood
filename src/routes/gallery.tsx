import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import hero from "@/assets/hero-fish-chips.jpg";
import calamari from "@/assets/calamari.jpg";
import oysters from "@/assets/oysters.jpg";
import kilpatrick from "@/assets/oysters-kilpatrick.jpg";
import burger from "@/assets/burger.jpg";
import platter from "@/assets/platter.jpg";
import raw from "@/assets/raw-seafood.jpg";
import salad from "@/assets/salad.jpg";
import kids from "@/assets/kids.jpg";
import shopfront from "@/assets/shopfront.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Kameruka Seafood Calamvale" },
      { name: "description", content: "Food, shopfront and interior photos from Kameruka Seafood in Calamvale Square." },
      { property: "og:title", content: "Gallery — Kameruka Seafood" },
      { property: "og:description", content: "A peek inside our Calamvale shop." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Tile = { src?: string; alt: string; span?: string; placeholder?: string };

const tiles: Tile[] = [
  { src: hero, alt: "Fish & chips", span: "md:row-span-2" },
  { src: shopfront, alt: "Shopfront" },
  { src: oysters, alt: "Natural oysters" },
  { src: calamari, alt: "Crumbed calamari" },
  { src: platter, alt: "Seafood platter", span: "md:col-span-2" },
  { src: burger, alt: "Fish burger" },
  { src: interior, alt: "Inside the shop", span: "md:col-span-2" },
  { src: kilpatrick, alt: "Oysters Kilpatrick" },
  { src: raw, alt: "Fresh raw seafood" },
  { src: salad, alt: "Garden salad" },
  { src: kids, alt: "Kids meal" },
  { alt: "Behind the scenes", placeholder: "Photo coming soon" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[var(--ocean)] text-white">
        <img src={interior} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <h1 className="font-display text-4xl font-bold md:text-6xl">Gallery</h1>
            <p className="mt-3 text-[var(--sand)]/90 md:text-lg">A look at the food, the shop, and the people who make it happen.</p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={i} delay={i * 0.05} className={t.span ?? ""}>
              <figure className="glass h-full w-full overflow-hidden rounded-xl">
                {t.src ? (
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                ) : (
                  <div className="photo-placeholder h-full w-full">
                    <Camera className="h-6 w-6" />
                    <span>{t.placeholder ?? "Photo coming soon"}</span>
                  </div>
                )}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
