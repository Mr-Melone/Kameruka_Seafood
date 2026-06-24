import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Fish, Heart, MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import hero from "@/assets/hero-fish-chips.jpg";
import calamari from "@/assets/calamari.jpg";
import oysters from "@/assets/oysters.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kameruka Seafood | Fresh Fish & Chips in Calamvale" },
      { name: "description", content: "Family-run fish & chips and fresh seafood in Calamvale Square, Brisbane. Rated 4.5★ by 264 locals." },
      { property: "og:title", content: "Kameruka Seafood — Calamvale's Fresh Fish & Chips" },
      { property: "og:description", content: "Beside Subway & Domino's in Calamvale Square. Fresh, family-run." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--ocean-deep)] text-[var(--sand)]">
        <div className="absolute inset-0">
          <img src={hero} alt="Crispy battered fish and chips" width={1600} height={1024} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)] via-[var(--ocean-deep)]/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-36">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--batter)]">
            <MapPin className="h-3 w-3" /> Calamvale Square, Brisbane
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Kameruka Seafood
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--sand)]/90 md:text-xl">
            Fresh fish, crisp golden batter, hand-cut chips. A family-run local favourite — straight from the coast to your plate.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-[var(--batter)] px-6 py-3 text-sm font-semibold text-[var(--batter-foreground)] shadow-lg transition hover:brightness-95">
              View Menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/booking" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Rating strip */}
      <section className="border-b border-border bg-[var(--sand)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-5 text-center md:flex-row md:gap-6 md:px-6">
          <div className="flex items-center gap-1 text-[var(--batter)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-current" : "fill-current opacity-60"}`} />
            ))}
          </div>
          <p className="text-sm font-medium text-[var(--ocean-deep)]">
            <strong>4.5★</strong> from <strong>264</strong> Google reviews — loved by Calamvale locals
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Fish, title: "Fresh Daily Seafood", body: "Fish, calamari, prawns and oysters delivered fresh — never frozen overnight." },
            { icon: Heart, title: "Family Owned", body: "MiMi & Lee run the shop themselves. You'll see them behind the counter." },
            { icon: MapPin, title: "Local Calamvale Favourite", body: "A long-standing fixture in Calamvale Square — right beside Subway & Domino's." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--ocean)]/10 text-[var(--ocean)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured dishes */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--batter)]">From the Kitchen</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Customer Favourites</h2>
            </div>
            <Link to="/menu" className="hidden text-sm font-semibold text-[var(--ocean)] hover:underline md:inline-flex">
              See the full menu →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { img: hero, title: "Fish & Chips", body: "Beer-battered fillets, hand-cut chips, lemon and house tartare." },
              { img: calamari, title: "Crumbed Calamari", body: "Tender rings in golden crumb with garlic aioli." },
              { img: oysters, title: "Fresh Oysters", body: "Natural or Kilpatrick — shucked to order on ice." },
            ].map((d) => (
              <article key={d.title} className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
                <img src={d.img} alt={d.title} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/menu" className="text-sm font-semibold text-[var(--ocean)] hover:underline">See the full menu →</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
