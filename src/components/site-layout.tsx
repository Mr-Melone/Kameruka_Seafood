import type { ReactNode } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <div className="flex min-h-screen flex-col">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[var(--batter)] via-[var(--ocean)] to-[var(--batter)]"
        aria-hidden
      />

      <SiteHeader />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}
