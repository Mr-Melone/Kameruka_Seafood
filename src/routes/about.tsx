import { createFileRoute } from "@tanstack/react-router";
import { Heart, Fish, Users, Leaf } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import interior from "@/assets/interior.jpg";
import shopfront from "@/assets/shopfront.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MiMi & Lee | Kameruka Seafood Calamvale" },
      { name: "description", content: "The story of MiMi and Lee — keeping Calamvale's beloved fish & chips shop fresh, family-run, and full of heart." },
      { property: "og:title", content: "About Kameruka Seafood" },
      { property: "og:description", content: "Family-run, long-standing Calamvale Square favourite." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Fish, title: "Always Fresh", body: "Fish, prawns and oysters arrive daily. If it's not fresh, it doesn't get cooked." },
  { icon: Heart, title: "Family Run", body: "MiMi and Lee are here every day — cooking, chatting, looking after locals like family." },
  { icon: Users, title: "Local Calamvale", body: "Generations of regulars. We know your usual order, and we'll make it just right." },
  { icon: Leaf, title: "Honest Cooking", body: "Hand-cut chips, clean oil, real batter. No shortcuts, no surprises." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[var(--sand)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--batter)]">Our Story</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-[var(--ocean-deep)] md:text-6xl">
              Run with love by <span className="text-[var(--ocean)]">MiMi &amp; Lee</span>
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              <p>
                Kameruka Seafood started with a simple idea: the kind of fish & chip shop you grew up loving — warm, welcoming, and serving food made the proper way. The kind of place where the chips are always hot, the batter always crackles, and the person behind the counter remembers your name.
              </p>
              <p>
                MiMi and Lee took on the shop because they believed Calamvale deserved exactly that. They're here every single day, picking the freshest catch from trusted suppliers, hand-cutting chips out the back, and looking after every customer who walks through the door.
              </p>
              <p>
                We're a small, honest family business. No frozen shortcuts, no fancy gimmicks — just generous portions, golden batter, and a friendly hello. Whether you're popping in for a quick Friday night feed or bringing the whole family for a sit-down feast, you'll be treated like one of our own.
              </p>
              <p className="font-medium text-[var(--ocean-deep)]">
                Thank you for being part of our story. We can't wait to feed you.
              </p>
              <p className="font-display text-2xl text-[var(--ocean)]">— MiMi &amp; Lee 🐟</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid gap-4">
              <img src={shopfront} alt="Kameruka Seafood shopfront in Calamvale Square" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md" />
              <img src={interior} alt="Inside Kameruka Seafood" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--batter)]">What we stand for</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--ocean)] md:text-4xl">
              Old-school care. Fresh every day.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              The little things matter to us — because they matter to you.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--ocean)]/10 text-[var(--ocean)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
