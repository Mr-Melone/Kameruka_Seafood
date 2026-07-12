import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Fish, Heart, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal, CountUp } from "@/components/reveal";
import hero from "@/assets/hero-fish-chips.jpg";
import heroVideo from "@/assets/hero-fish-chips.mp4.asset.json";
import calamari from "@/assets/calamari.jpg";
import oysters from "@/assets/oysters.jpg";
import platter from "@/assets/platter.jpg";

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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const yBack = useTransform(scrollY, [0, 600], [0, 140]);
  const yMid = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <SiteLayout>
      {/* Hero - full viewport */}
      <section
        ref={heroRef}
        className="relative isolate flex h-screen min-h-[640px] w-full items-center overflow-hidden bg-[var(--ocean-deep)] text-[var(--sand)]"
      >
        {/* Parallax background layers */}
        <motion.video
          src={heroVideo.url}
          poster={hero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          style={{ y: yBack, scale: 1.15 }}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <motion.div
          style={{ y: yMid }}
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-[var(--ocean-deep)] via-[var(--ocean-deep)]/60 to-transparent"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)] via-transparent to-[var(--ocean-deep)]/40" />

        {/* Floating fish accent */}
        <Fish
          aria-hidden
          className="pointer-events-none absolute right-[10%] top-[18%] hidden h-16 w-16 text-[var(--batter)]/30 animate-bob md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[12%] bottom-[28%] hidden h-3 w-3 rounded-full bg-white/30 animate-bob md:block"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--batter)]"
          >
            <MapPin className="h-3 w-3" /> Calamvale Square, Brisbane
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl"
          >
            Kameruka <span className="text-[var(--batter)]">Seafood</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-5 max-w-xl text-lg text-[var(--sand)]/90 md:text-2xl"
          >
            Fresh fish, crisp golden batter, hand-cut chips. A family-run local favourite — straight from the coast to your plate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/menu"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-[var(--batter)] px-7 py-3.5 text-sm font-semibold text-[var(--batter-foreground)] shadow-lg"
            >
              View Menu <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/booking"
              className="btn-glow inline-flex items-center gap-2 rounded-full glass-dark px-7 py-3.5 text-sm font-semibold text-white"
            >
              Book a Table
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#highlights"
          style={{ opacity }}
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        >
          <span className="flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.3em]">
            Scroll
            <ChevronDown className="h-6 w-6 animate-scroll-bounce" />
          </span>
        </motion.a>
      </section>

      {/* Rating strip with animated counter */}
      <section className="border-b border-border bg-[var(--sand)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-6 text-center md:flex-row md:gap-6 md:px-6">
          <div className="flex items-center gap-1 text-[var(--batter)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-current" : "fill-current opacity-60"}`} />
            ))}
          </div>
          <p className="text-sm font-medium text-[var(--ocean-deep)] md:text-base">
            <strong className="text-lg"><CountUp to={4.5} decimals={1} />★</strong> from{" "}
            <strong className="text-lg"><CountUp to={264} /></strong> Google reviews — loved by Calamvale locals
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Fish, title: "Fresh Daily Seafood", body: "Fish, calamari, prawns and oysters delivered fresh — never frozen overnight." },
            { icon: Heart, title: "Family Owned", body: "MiMi & Lee run the shop themselves. You'll see them behind the counter." },
            { icon: MapPin, title: "Local Calamvale Favourite", body: "A long-standing fixture in Calamvale Square — right beside Subway & Domino's." },
          ].map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ocean)]/10 text-[var(--ocean)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured dishes */}
      <section className="relative bg-gradient-to-b from-[var(--sand)] to-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--batter)]">From the Kitchen</p>
                <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">Customer Favourites</h2>
              </div>
              <Link to="/menu" className="hidden text-sm font-semibold text-[var(--ocean)] story-underline md:inline-flex">
                See the full menu →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { img: hero, title: "Fish & Chips", body: "Beer-battered fillets, hand-cut chips, lemon and house tartare." },
              { img: calamari, title: "Crumbed Calamari", body: "Tender rings in golden crumb with garlic aioli." },
              { img: oysters, title: "Fresh Oysters", body: "Natural or Kilpatrick — shucked to order on ice." },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 0.12}>
                <article className="glass group h-full overflow-hidden rounded-2xl">
                  <div className="overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold">{d.title}</h3>
                      <span className="price-placeholder">$XX.XX</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{d.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link to="/menu" className="text-sm font-semibold text-[var(--ocean)] story-underline">
              See the full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative overflow-hidden bg-[var(--ocean-deep)] py-16 text-white">
        <img src={platter} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">Hungry yet?</h2>
            <p className="mx-auto mt-3 max-w-xl text-[var(--sand)]/90">
              Order ahead, dine in, or grab a table. We're here Tuesday through Saturday.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="tel:+61421861357" className="btn-glow inline-flex items-center gap-2 rounded-full bg-[var(--batter)] px-6 py-3 text-sm font-semibold text-[var(--batter-foreground)] shadow-lg">
                Call 0421 861 357
              </a>
              <Link to="/booking" className="btn-glow inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-semibold text-white">
                Book a Table
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
