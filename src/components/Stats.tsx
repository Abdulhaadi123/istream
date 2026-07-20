"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 800, suffix: "+", label: "Talents Placed" },
  { value: 30, suffix: "+", label: "Countries Served" },
  { value: 97, suffix: "%", label: "Client Retention" },
  { value: 48, suffix: "hrs", label: "Avg. Deployment Time", isDecimal: false },
  { value: 4.9, suffix: "/5", label: "Avg. Client Rating", isDecimal: true },
  { value: 5, suffix: "+", label: "Years of Excellence" },
];

function AnimatedCounter({
  target,
  suffix,
  isDecimal,
  inView,
}: {
  target: number;
  suffix: string;
  isDecimal?: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  return (
    <span className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--foreground)]">
      {isDecimal ? count.toFixed(1) : count}
      <span className="text-[var(--accent)] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 divide-y sm:divide-y-0 md:divide-x-0 divide-slate-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="text-center px-4"
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
                inView={isInView}
              />
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
