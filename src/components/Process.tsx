"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, ShieldCheck, Users } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    phase: "Discovery & Sourcing",
    duration: "Day 1",
    title: "Defining Candidate Brief",
    description:
      "We detail your exact stack requirements, target salary benchmarks, timezone overlap needs, and team alignment requirements to start targeted sourcing.",
  },
  {
    icon: PenTool,
    number: "02",
    phase: "AI Vetting & Selection",
    duration: "Day 2",
    title: "Top 3% Vetting Pipeline",
    description:
      "Candidates undergo coding assessments, live system architecture tests, and communication reviews. We select the top candidates for your interview.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    phase: "Compliance & Contracts",
    duration: "Day 3",
    title: "Risk-Free Localized EOR",
    description:
      "We generate compliant international agreements that protect your intellectual property and satisfy local labor legislation automatically.",
  },
  {
    icon: Users,
    number: "04",
    phase: "Team Activation & Support",
    duration: "Day 4+",
    title: "Deployment & Success Sync",
    description:
      "We coordinate developer onboarding, assign a dedicated Success Manager for ongoing health monitoring, and activate automated global payroll.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-20 sm:py-28 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Deployment Timeline
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            Unified Sourcing &amp; Operations Pipeline
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From your hiring brief to global payroll and laptop delivery — we handle the complete lifecycle.
          </p>
        </motion.div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-[0_12px_35px_rgba(26,79,143,0.06)] hover:border-[var(--primary)]/20 transition-all duration-300 group hover:-translate-y-1 relative text-left"
              >
                {/* Duration Badge */}
                <div className="absolute top-5 right-5 text-[10px] bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-0.5 rounded-full font-bold">
                  {step.duration}
                </div>

                {/* Step Index Label */}
                <div className="font-mono text-sm font-bold text-slate-300 group-hover:text-[var(--accent)] transition-colors mb-3">
                  Phase {step.number}
                </div>

                {/* Icon Wrapper */}
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:border-slate-300 transition-all">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                </div>

                {/* Content */}
                <div>
                  <span className="block text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1 font-semibold">
                    {step.phase}
                  </span>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base font-bold text-slate-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
