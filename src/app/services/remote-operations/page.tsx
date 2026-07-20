import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  CreditCard,
  UserCheck,
  Cpu,
  Heart,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Remote Operations & Workforce Management — iStream Solution",
  description:
    "Consolidated global payroll, localized compliance, remote onboarding, benefits administration, and hardware provisioning handled end-to-end.",
};

const services = [
  {
    icon: CreditCard,
    title: "Global Payroll & Invoicing",
    description:
      "Pay your international developers with a single consolidated monthly invoice. We disperse funds locally in multiple currencies, on time, every time.",
  },
  {
    icon: ShieldCheck,
    title: "Localized Compliance & IP",
    description:
      "Automated localized contracts protect your IP assignments and ensure compliance with strict regional tax and labor laws, avoiding audit risks.",
  },
  {
    icon: UserCheck,
    title: "Simplified Onboarding",
    description:
      "KYC checks, identity verification, NDA signings, and bank document collections completed in a streamlined digital workflow.",
  },
  {
    icon: Laptop,
    title: "Hardware Provisioning",
    description:
      "We source, configure, and ship work laptops and peripherals to your remote workers globally, handling import duties and delivery.",
  },
  {
    icon: Heart,
    title: "Benefits & Local Perks",
    description:
      "Give your remote team premium localized healthcare options, regional insurance benefits, and expense budgets to increase retention.",
  },
  {
    icon: Cpu,
    title: "Unified Command Center",
    description:
      "A centralized platform to track timesheets, approve expense requests, configure local policies, and oversee global operations.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Configure Setup",
    desc: "Create your workspace account, define billing parameters, and set local employment policies.",
  },
  {
    step: "02",
    title: "Invite Remote Team",
    desc: "Send onboarding invites to your remote workers. They complete profile verification and local KYC.",
  },
  {
    step: "03",
    title: "Issue Contracts",
    desc: "Local compliant employment contracts are auto-generated, reviewed, and signed digitally.",
  },
  {
    step: "04",
    title: "Consolidated Billing",
    desc: "Review timesheets, approve expenses, and pay one unified monthly invoice. We handle the rest.",
  },
];

export default function RemoteOperationsPage() {
  return (
    <main className="pt-20 pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[var(--accent)]/6 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              <Link
                href="/services"
                className="flex w-fit items-center gap-1.5 text-xs text-[var(--accent)] hover:text-[var(--foreground)] transition-colors mb-6 opacity-70 hover:opacity-100"
              >
                ← Back to Services
              </Link>

              <span className="inline-block text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-semibold mb-4">
                Workforce Management
              </span>

              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl xl:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                Remote{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Operations
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                We handle the operational complexity of managing your remote team. From localized compliance and automated global payroll to equipment shipping and onboarding — all in one unified platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(26,79,143,0.4)] transition-all"
                >
                  Onboard Your Team <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 hover:border-[var(--primary)]/50 hover:text-[var(--foreground)] transition-all"
                >
                  Our Vetting Process
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {["Global Payroll", "100% Compliant", "IT Asset Delivery", "Benefits Management"].map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[var(--text-secondary)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Realistic Operations Photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src="/tech-consulting-illustration.png"
                  alt="Remote Operations Command Center — Payroll and local compliance matrix"
                  width={780}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--text-secondary)]">Compliance Audit Rating</p>
                <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--foreground)]">
                  100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">
              Platform Features
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
              Centralized Remote Operations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(26,79,143,0.08)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                  <s.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ─────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)] mb-10 text-center">
            How Remote Operations Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--primary)]/30 transition-all group"
              >
                <span className="text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  {s.step}
                </span>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] mt-3 mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 via-[var(--card-bg)] to-[var(--accent)]/5 border border-[var(--card-border)] rounded-2xl p-12">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
              Simplify Your Remote Operations
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Talk to our team of payroll and compliance specialists. Discover how we can handle your international remote contracts and payouts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(26,79,143,0.4)] transition-all"
            >
              Consult an Operations Expert <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
