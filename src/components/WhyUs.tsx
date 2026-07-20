"use client";

import { motion } from "framer-motion";
import { CheckCircle, Quote, TrendingUp, Users, Clock, Shield } from "lucide-react";

const stats = [
  { value: "800+", label: "Engineers Deployed", icon: Users },
  { value: "48h", label: "Avg. Placement Speed", icon: Clock },
  { value: "97%", label: "Client Retention Rate", icon: TrendingUp },
  { value: "30+", label: "Countries Covered", icon: Shield },
];

const testimonials = [
  {
    quote:
      "iStream had a senior Go developer matched, legally onboarded, and writing production code in under 3 days. No agency has come close to that.",
    name: "Marcus B.",
    role: "CTO, FinTech Scale-up · Frankfurt",
    initials: "MB",
    color: "bg-[var(--primary)]/10 text-[var(--primary)]",
  },
  {
    quote:
      "The EOR compliance setup for our LATAM squad was seamless. Contracts, IP protection, and payroll all handled — we just focused on shipping.",
    name: "Rachel T.",
    role: "VP Engineering · Series B SaaS · Austin",
    initials: "RT",
    color: "bg-emerald-50 text-emerald-700",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 relative bg-white border-t border-slate-200" id="why-us">
      {/* Ambient glows */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
              Why iStream Solution
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              The Results Speak for Themselves
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
              Companies that switch to iStream stop waiting months for the right hire. We combine precision sourcing, local legal compliance, and hands-on payroll ops into a single managed service built for speed.
            </p>

            {/* Differentiators */}
            <div className="space-y-4">
              {[
                { title: "Top 3% Technical Vetting", desc: "Every engineer passes coding and architecture tests before you see them." },
                { title: "100% Legal Compliance EOR", desc: "Localized employment contracts protect your intellectual property." },
                { title: "Direct Board Collaboration", desc: "Your developers join your standups, your tools, and your team culture." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800">{item.title}</h4>
                    <p className="text-[11px] text-[var(--text-secondary)] leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Client Proof Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {/* KPI Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:border-[var(--primary)]/20 transition-all"
                >
                  <Icon className="w-4 h-4 text-[var(--primary)] mx-auto mb-2" />
                  <p className="text-xl font-extrabold text-[var(--foreground)] font-[family-name:var(--font-space-grotesk)]">{value}</p>
                  <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col gap-3 hover:shadow-md hover:border-[var(--primary)]/20 transition-all"
                >
                  <Quote className="w-5 h-5 text-[var(--primary)]/30 shrink-0" />
                  <p className="text-[12px] sm:text-[13px] text-slate-600 leading-relaxed font-medium flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-extrabold shrink-0 ${t.color}`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{t.name}</p>
                      <p className="text-[10px] text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom trust bar */}
            <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl px-6 py-4 flex items-center justify-between gap-4 shadow-lg">
              <div>
                <p className="text-white text-sm font-bold">Ready to scale your team?</p>
                <p className="text-white/70 text-[11px] mt-0.5">First match introduced within 48 hours of intake.</p>
              </div>
              <a
                href="/contact"
                className="shrink-0 bg-white text-[var(--primary)] text-xs font-extrabold px-5 py-2.5 rounded-full hover:bg-slate-50 transition-colors shadow"
              >
                Start Hiring →
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
