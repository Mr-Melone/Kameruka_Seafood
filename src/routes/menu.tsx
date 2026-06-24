import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import hero from "@/assets/hero-fish-chips.jpg";
import burger from "@/assets/burger.jpg";
import oysters from "@/assets/oysters.jpg";
import kilpatrick from "@/assets/oysters-kilpatrick.jpg";
import calamari from "@/assets/calamari.jpg";
import salad from "@/assets/salad.jpg";
import platter from "@/assets/platter.jpg";
import kids from "@/assets/kids.jpg";
import raw from "@/assets/raw-seafood.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Kameruka Seafood Calamvale" },
      { name: "description", content: "Fish & chips, burgers, oysters, calamari, salads, platters, kids meals and raw seafood — fresh in Calamvale Square." },
      { property: "og:title", content: "Menu — Kameruka Seafood" },
      { property: "og:description", content: "Browse our fresh seafood menu in Calamvale." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; img?: string };
type Section = { title: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Fish & Chips",
    items: [
      { name: "Classic Fish & Chips", desc: "Beer-battered fillet with hand-cut chips and lemon.", img: hero },
      { name: "Grilled Fish & Chips", desc: "Lightly seasoned grilled fillet, chips and salad." },
      { name: "Crumbed Fish & Chips", desc: "Golden crumbed fillet with chips and tartare." },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Fish Burger", desc: "Crispy fillet, lettuce, tomato, tartare on a brioche bun.", img: burger },
      { name: "Prawn Burger", desc: "Panko prawns, slaw, aioli, soft bun." },
    ],
  },
  {
    title: "Oysters",
    items: [
      { name: "Oysters Natural (½ doz / doz)", desc: "Freshly shucked, lemon and mignonette.", img: oysters },
      { name: "Oysters Kilpatrick (½ doz / doz)", desc: "Bacon, worcestershire glaze, grilled.", img: kilpatrick },
    ],
  },
  {
    title: "Calamari",
    items: [
      { name: "Crumbed Calamari", desc: "Tender rings in seasoned crumb with aioli.", img: calamari },
      { name: "Salt & Pepper Calamari", desc: "Lightly dusted, chilli, shallots, lime." },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Garden Salad", desc: "Mixed leaves, cucumber, tomato, onion, house dressing.", img: salad },
      { name: "Greek Salad", desc: "Feta, olives, cucumber, tomato, red onion." },
    ],
  },
  {
    title: "Platters & Party Packs",
    items: [
      { name: "Seafood Platter for 2", desc: "Fish, calamari, prawns, scallops, chips, salad.", img: platter },
      { name: "Family Party Pack", desc: "Generous mix of our favourites — perfect for sharing." },
    ],
  },
  {
    title: "Kids Meals",
    items: [
      { name: "Kids Fish & Chips", desc: "Smaller battered fillet with chips.", img: kids },
      { name: "Kids Nuggets & Chips", desc: "Crispy nuggets with chips and tomato sauce." },
    ],
  },
  {
    title: "Raw Seafood (Takeaway Uncooked)",
    items: [
      { name: "Fresh Fillets", desc: "Daily catch — ask about today's selection.", img: raw },
      { name: "Green Prawns & Live Shellfish", desc: "Take home and cook your own — ask our team." },
    ],
  },
];

export default function MenuPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--ocean)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Our Menu</h1>
          <p className="mt-3 max-w-2xl text-[var(--sand)]/90">
            Dine-in, takeaway or order ahead by phone. Prices listed in-store — call us on{" "}
            <a href="tel:+61421861357" className="underline">0421 861 357</a>.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        {sections.map((section) => (
          <section key={section.title} className="mb-14 last:mb-0">
            <h2 className="font-display text-2xl font-semibold text-[var(--ocean-deep)] md:text-3xl">{section.title}</h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-[var(--batter)]" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <article key={item.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  {item.img ? (
                    <img src={item.img} alt={item.name} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                  ) : (
                    <div className="aspect-[4/3] w-full bg-secondary" />
                  )}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">$ —</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <p className="mt-8 rounded-xl border border-dashed border-border bg-secondary/50 p-4 text-center text-sm text-muted-foreground">
          Available dine-in, takeaway, and by phone order. We don't currently deliver via Uber Eats or DoorDash.
        </p>
      </div>
    </SiteLayout>
  );
}
