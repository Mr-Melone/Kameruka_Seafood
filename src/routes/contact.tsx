import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/site-layout";
import { HOURS } from "@/components/site-footer";
import { MapPin, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kameruka Seafood Calamvale" },
      { name: "description", content: "Find Kameruka Seafood in Calamvale Square — Shop 2/51 Kameruka St, beside Subway & Domino's. Call 0421 861 357." },
      { property: "og:title", content: "Contact Kameruka Seafood" },
      { property: "og:description", content: "Calamvale Square, beside Subway & Domino's." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
    if (!parsed.success) {
      setError("Please fill out all fields.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    setSent(true);
  }

  return (
    <SiteLayout>
      <section className="bg-[var(--ocean)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Contact &amp; Find Us</h1>
          <p className="mt-3 max-w-2xl text-[var(--sand)]/90">
            We're in Calamvale Square — right beside Subway and Domino's.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-16">
        <div className="space-y-6">
          <div className="grid gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-[var(--ocean)]" />
              <div>
                <p className="font-semibold">Shop 2/51 Kameruka St</p>
                <p className="text-sm text-muted-foreground">Calamvale QLD 4116 — Calamvale Square (beside Subway &amp; Domino's)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-[var(--ocean)]" />
              <a href="tel:+61421861357" className="font-semibold text-[var(--ocean)] hover:underline">0421 861 357</a>
            </div>
            <a
              href="tel:+61421861357"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--batter)] px-5 py-2.5 text-sm font-semibold text-[var(--batter-foreground)]"
            >
              <Phone className="h-4 w-4" /> Click to call
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Kameruka Seafood location"
              src="https://www.google.com/maps?q=Shop+2%2F51+Kameruka+St+Calamvale+QLD+4116&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl border border-border bg-secondary/50 p-6">
            <h3 className="font-display text-lg font-semibold text-[var(--ocean-deep)]">Opening Hours</h3>
            <table className="mt-3 w-full text-sm">
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h.day} className="border-b border-border/50 last:border-0">
                    <td className="py-1.5 font-medium">{h.day}</td>
                    <td className="py-1.5 text-right text-muted-foreground">{h.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="font-display text-2xl font-semibold">Send a Message</h2>
          {sent ? (
            <div className="mt-6 flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-[var(--ocean)]" />
              <p className="font-semibold">Thanks — we'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Name</span>
                <input name="name" maxLength={100} required className="rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ocean)]" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Email</span>
                <input type="email" name="email" maxLength={255} required className="rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ocean)]" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Message</span>
                <textarea name="message" rows={5} maxLength={1000} required className="rounded-lg border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--ocean)]" />
              </label>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ocean)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--ocean-deep)] disabled:opacity-60"
              >
                {sending && <Loader2 className="h-4 w-4 animate-spin" />}
                <Mail className="h-4 w-4" /> Send
              </button>
            </form>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}
