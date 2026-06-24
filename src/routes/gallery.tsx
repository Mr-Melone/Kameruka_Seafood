import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
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

const images = [
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
];

function GalleryPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--ocean)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Gallery</h1>
          <p className="mt-3 text-[var(--sand)]/90">A look at the food, the shop, and the people who make it happen.</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((img, i) => (
            <figure key={i} className={`overflow-hidden rounded-xl bg-secondary shadow-sm ${img.span ?? ""}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
