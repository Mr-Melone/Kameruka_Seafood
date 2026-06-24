import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import interior from "@/assets/interior.jpg";
import shopfront from "@/assets/shopfront.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MiMi & Lee | Kameruka Seafood Calamvale" },
      { name: "description", content: "The story of MiMi and Lee — keeping Calamvale's beloved fish & chips shop fresh and family-run." },
      { property: "og:title", content: "About Kameruka Seafood" },
      { property: "og:description", content: "Family-run, long-standing Calamvale Square favourite." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--sand)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--batter)]">Our Story</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-[var(--ocean-deep)] md:text-5xl">Run by MiMi &amp; Lee</h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              <p>
                Kameruka Seafood has been a fixture of Calamvale Square for years — the kind of local spot you stop at on the way home, where the chips are always hot and the fish is always fresh.
              </p>
              <p>
                When MiMi and Lee took over, they made one promise: keep what locals love. That means quality seafood delivered daily, batter that crackles, and a family welcome behind the counter.
              </p>
              <p>
                Today the shop is still family-run, still loved by Calamvale, and still proudly serving Brisbane's south-side from Shop 2/51 Kameruka St — right beside Subway and Domino's.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <img src={shopfront} alt="Kameruka Seafood shopfront" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md" />
            <img src={interior} alt="Inside the shop" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6">
        <h2 className="font-display text-3xl font-semibold text-[var(--ocean)]">Old-school care. Fresh every day.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We pick the seafood, cut the chips, and treat every customer like a regular. That's the Kameruka way.
        </p>
      </section>
    </SiteLayout>
  );
}
