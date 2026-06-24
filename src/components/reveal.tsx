import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delayStep = 0.08,
}: {
  children: ReactNode[];
  className?: string;
  delayStep?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * delayStep}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

export function CountUp({
  to,
  decimals = 0,
  suffix = "",
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (v) =>
    decimals ? v.toFixed(decimals) : Math.round(v).toString()
  );
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
