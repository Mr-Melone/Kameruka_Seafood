import { Link } from "@tanstack/react-router";
import { Phone, Menu as MenuIcon, Fish } from "lucide-react";
import { useEffect, useState } from "react";

const PHONE = "+61421861357";
const PHONE_DISPLAY = "0421 861 357";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/booking", label: "Book" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/70 backdrop-blur-xl shadow-sm"
          : "border-transparent bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--ocean)]">
          <span
            className={`grid place-items-center rounded-full bg-[var(--ocean)] text-[var(--sand)] transition-all duration-300 ${
              scrolled ? "h-8 w-8" : "h-9 w-9"
            }`}
          >
            <Fish className={`${scrolled ? "h-4 w-4" : "h-5 w-5"}`} />
          </span>
          <span className="leading-tight">
            Kameruka
            <span className="block text-xs font-normal tracking-widest text-muted-foreground uppercase">
              Seafood
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="story-underline rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--ocean)]"
              activeProps={{
                className:
                  "story-underline rounded-md px-3 py-2 text-sm font-semibold text-[var(--ocean)]",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE}`}
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-[var(--batter)] px-4 py-2 text-sm font-semibold text-[var(--batter-foreground)] shadow-sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{
                  className:
                    "rounded-md px-3 py-3 text-sm font-semibold text-[var(--ocean)] bg-secondary",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
