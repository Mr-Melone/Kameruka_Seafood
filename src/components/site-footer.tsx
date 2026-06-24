import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";

export const HOURS = [
  { day: "Monday", hours: "11:30am – 7:00pm" },
  { day: "Tuesday", hours: "11:30am – 7:00pm" },
  { day: "Wednesday", hours: "11:30am – 7:00pm" },
  { day: "Thursday", hours: "11:30am – 7:00pm" },
  { day: "Friday", hours: "11:30am – 7:30pm" },
  { day: "Saturday", hours: "11:30am – 7:30pm" },
  { day: "Sunday", hours: "11:30am – 7:00pm" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-[var(--ocean-deep)] text-[var(--sand)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">Kameruka Seafood</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--sand)]/80">
            Family-run fish &amp; chips and fresh seafood in Calamvale Square. Run by MiMi &amp; Lee.
          </p>
          <div className="mt-4 flex gap-3">
            <a aria-label="Facebook" href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Facebook className="h-4 w-4" />
            </a>
            <a aria-label="Instagram" href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--batter)]">Visit</h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--sand)]/85">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Shop 2/51 Kameruka St, Calamvale QLD 4116<br/><span className="text-[var(--sand)]/60">Beside Subway &amp; Domino's</span></li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> <a href="tel:+61421861357" className="hover:underline">0421 861 357</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--batter)]">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-[var(--sand)]/85">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 opacity-60" />{h.day}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-[var(--sand)]/60 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Kameruka Seafood. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/menu" className="hover:text-white">Menu</Link>
            <Link to="/booking" className="hover:text-white">Book a Table</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
