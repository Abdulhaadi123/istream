"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Users,
  UserPlus,
  CreditCard,
  ShieldAlert,
  Truck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"recruitment" | "operations">("recruitment");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const recruitmentModels = [
    {
      title: "Direct Hire Recruiting",
      icon: Search,
      href: "/services/direct-hire",
      speed: "15 Days",
      bestFor: "Core leadership & key hires",
      desc: "Permanent executive search and headhunting globally. We source, vet, and verify salary benchmarks for key talent roles.",
      points: ["100% replacement guarantee", "Rigorous technical vetting", "IP Protection & reference checks"],
      accent: "#1a4f8f",
    },
    {
      title: "On-Demand Squads",
      icon: Users,
      href: "/services/on-demand-teams",
      speed: "5-7 Days",
      bestFor: "Rapid product development & scaling",
      desc: "Fully functional timezone-aligned development teams. Includes a dedicated Tech Lead, frontend/backend devs, and QA engineers.",
      points: ["Agile standup synchronization", "Pre-matched stacks & collaboration", "Direct management with dashboard"],
      accent: "#3198d4",
    },
    {
      title: "IT Staff Augmentation",
      icon: UserPlus,
      href: "/services/staff-augmentation",
      speed: "48 Hours",
      bestFor: "Surge capacity & specialized stacks",
      desc: "Inject senior individual developers directly into your pipeline. Pre-vetted resources that adapt instantly to your internal sprints.",
      points: ["Zero recruiting overhead", "Flexible hourly/monthly billing", "Developer replacement in 48 hrs"],
      accent: "#059669",
    },
  ];

  const operationsFeatures = [
    {
      title: "Consolidated Payroll",
      icon: CreditCard,
      href: "/services/payroll-invoicing",
      desc: "Handle global payroll, contractor billing, and statutory disbursements from a unified dashboard. Fund globally and settle in 30+ local currencies.",
      points: ["Single invoicing system", "Automated currency exchanges", "Localized bank transfers"],
    },
    {
      title: "Localized Compliance & EOR",
      icon: ShieldAlert,
      href: "/services/localized-compliance",
      desc: "Generate compliant employment contracts that secure intellectual property and fully satisfy local labor regulations in every contractor's country.",
      points: ["Automated W-8BEN/W-9 collection", "IP security agreements", "Local labor law tracking"],
    },
    {
      title: "Success & Team Support",
      icon: Users,
      href: "/services/success-support",
      desc: "Assign a dedicated Client Success Manager to monitor remote team health, assist in developer onboarding, and coordinate team performance pulse-checks.",
      points: ["Dedicated Success Managers", "1-on-1 team health reviews", "97% talent retention average"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200" id="services">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
            Service Models
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
            How We Build &amp; Support Your Teams
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Choose from flexible headhunting models, timezone-matched remote squads, or automate compliance operations globally.
          </p>
        </motion.div>

        {/* Segmented Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-slate-200 p-1.5 rounded-full flex gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab("recruitment")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "recruitment"
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "text-slate-500 hover:text-[var(--primary)] hover:bg-slate-100"
              }`}
            >
              Recruitment &amp; Staffing
            </button>
            <button
              onClick={() => setActiveTab("operations")}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "operations"
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "text-slate-500 hover:text-[var(--primary)] hover:bg-slate-100"
              }`}
            >
              Global Operations &amp; Payroll
            </button>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            {activeTab === "recruitment" ? (
              <motion.div
                key="recruitment"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {recruitmentModels.map((model) => {
                  const Icon = model.icon;
                  return (
                    <div
                      key={model.title}
                      className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(26,79,143,0.06)] hover:border-[var(--primary)]/20 transition-all group text-left"
                    >
                      <div>
                        {/* Header Details */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[var(--primary)]" />
                          </div>
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-3 py-1 rounded-md font-bold uppercase tracking-wider">
                            Match: {model.speed}
                          </span>
                        </div>

                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-slate-800 mb-2">
                          {model.title}
                        </h3>
                        <span className="inline-block text-[11px] text-[var(--accent)] font-semibold mb-4 bg-[var(--accent)]/10 px-2 py-0.5 rounded">
                          Best for: {model.bestFor}
                        </span>

                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                          {model.desc}
                        </p>

                        {/* Highlight list */}
                        <ul className="space-y-2 mb-8">
                          {model.points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2 text-xs text-slate-600">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={model.href}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-all mt-auto"
                      >
                        Explore Model <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="operations"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {operationsFeatures.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(26,79,143,0.06)] hover:border-[var(--primary)]/20 transition-all group text-left"
                    >
                      <div>
                        {/* Header Details */}
                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                          <Icon className="w-5 h-5 text-[var(--accent)]" />
                        </div>

                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-slate-800 mb-4">
                          {feat.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                          {feat.desc}
                        </p>

                        {/* Points */}
                        <ul className="space-y-2 mb-8">
                          {feat.points.map((pt) => (
                            <li key={pt} className="flex items-center gap-2 text-xs text-slate-600">
                              <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={feat.href}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-all mt-auto"
                      >
                        Explore Features <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
