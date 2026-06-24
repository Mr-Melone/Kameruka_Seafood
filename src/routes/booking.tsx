import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/site-layout";
import { HOURS } from "@/components/site-footer";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Table | Kameruka Seafood Calamvale" },
      { name: "description", content: "Reserve a table at Kameruka Seafood in Calamvale Square. Quick online booking." },
      { property: "og:title", content: "Book a Table — Kameruka Seafood" },
      { property: "og:description", content: "Reserve your spot in Calamvale Square." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  phone: z.string().trim().min(5, "Phone required").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  booking_date: z.string().min(1, "Date required"),
  booking_time: z.string().min(1, "Time required"),
  party_size: z.number().int().min(1).max(30),
  special_requests: z.string().max(500).optional(),
});

function BookingPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = bookingSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      booking_date: String(fd.get("booking_date") ?? ""),
      booking_time: String(fd.get("booking_time") ?? ""),
      party_size: Number(fd.get("party_size") ?? 0),
      special_requests: String(fd.get("special_requests") ?? "") || undefined,
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);
    const { error: dbError } = await supabase.from("bookings").insert(parsed.data);
    setSubmitting(false);
    if (dbError) {
      setError("Couldn't submit booking. Please call us on 0421 861 357.");
      return;
    }
    setSuccess(true);
    form.reset();
  }

  return (
    <SiteLayout>
      <section className="bg-[var(--ocean)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Book a Table</h1>
          <p className="mt-3 max-w-2xl text-[var(--sand)]/90">
            Reserve your spot at Kameruka Seafood. We'll confirm by phone if anything looks busy.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1fr_320px] md:px-6 md:py-16">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          {success ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-[var(--ocean)]" />
              <h2 className="font-display text-2xl font-semibold">Booking received!</h2>
              <p className="max-w-md text-muted-foreground">
                Thanks — we've got your request. Our team will give you a quick call if anything needs confirming.
              </p>
              <button onClick={() => setSuccess(false)} className="mt-2 rounded-full bg-[var(--batter)] px-5 py-2 text-sm font-semibold text-[var(--batter-foreground)]">
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name" name="name" required maxLength={100} />
                <Field label="Phone" name="phone" type="tel" required maxLength={30} />
              </div>
              <Field label="Email" name="email" type="email" required maxLength={255} />
              <div className="grid gap-4 md:grid-cols-3">
                <Field label="Date" name="booking_date" type="date" required />
                <Field label="Time" name="booking_time" type="time" required />
                <Field label="Party size" name="party_size" type="number" min={1} max={30} defaultValue={2} required />
              </div>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Special requests</span>
                <textarea name="special_requests" rows={4} maxLength={500} className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--ocean)]" placeholder="High chair, allergies, occasion…" />
              </label>

              {error && <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ocean)] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[var(--ocean-deep)] disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Sending…" : "Request Booking"}
              </button>
            </form>
          )}
        </div>

        <aside className="rounded-2xl border border-border bg-secondary/50 p-6">
          <h3 className="font-display text-lg font-semibold text-[var(--ocean-deep)]">Opening Hours</h3>
          <p className="mt-1 text-xs text-muted-foreground">Please book within hours.</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span className="font-medium">{h.day}</span>
                <span className="text-muted-foreground">{h.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            Prefer to call? <a href="tel:+61421861357" className="font-semibold text-[var(--ocean)] hover:underline">0421 861 357</a>
          </p>
        </aside>
      </div>
    </SiteLayout>
  );
}

function Field({ label, name, ...props }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium">{label}{props.required && <span className="text-destructive"> *</span>}</span>
      <input
        name={name}
        {...props}
        className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[var(--ocean)]"
      />
    </label>
  );
}
