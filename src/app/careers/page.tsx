import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Globe, BookOpen, Heart, Coffee,
  Laptop, GraduationCap, MapPin, Clock, Zap, Users, Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — iStream Solution",
  description: "Join iStream Solution's global recruitment and operations team. Explore open roles, recruitment internships, and our operational values.",
};

const stats = [
  { value: "800+", label: "Talents Placed" },
  { value: "30+", label: "Countries Served" },
  { value: "4.9★", label: "Client Rating" },
  { value: "97%", label: "Client Retention Rate" },
];

const perks = [
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world. We embrace async communication and trust-based flexibility across time zones.",
    accent: "#4f46e5",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access annual learning budgets, recruitment training programs, conference sponsorships, and clear leadership tracks.",
    accent: "#10b981",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical plans, localized health packages, mental wellness resources, and wellness stipends.",
    accent: "#f472b6",
  },
  {
    icon: Coffee,
    title: "Flexible Time Off",
    description: "Flexible work hours, generous paid time off, and absolute alignment with regional public holidays.",
    accent: "#fb923c",
  },
  {
    icon: Laptop,
    title: "Premium Hardware",
    description: "Get a high-end work laptop and external monitors shipped directly to your door, fully funded by us.",
    accent: "#34d399",
  },
  {
    icon: Zap,
    title: "Performance Bonuses",
    description: "Competitive salaries globally benchmarked with uncapped commission structures and placement bonuses.",
    accent: "#fbbf24",
  },
];

const openRoles = [
  { title: "Senior Technical Recruiter", location: "Remote", type: "Full-time", team: "Recruiting", level: "Senior" },
  { title: "Global Payroll & Operations Manager", location: "Remote", type: "Full-time", team: "Operations", level: "Senior" },
  { title: "Talent Sourcing Specialist", location: "Remote", type: "Full-time", team: "Recruiting", level: "Mid-Level" },
  { title: "Frontend Engineer (React / Next.js)", location: "Remote", type: "Full-time", team: "Engineering", level: "Mid-Senior" },
  { title: "Junior Operations Associate", location: "Remote", type: "Full-time", team: "Operations", level: "Entry-Level" },
];

const teamValues = [
  { icon: Star, label: "Excellence First", text: "We deliver exceptional profiles, not just volume." },
  { icon: Users, label: "Collaboration Wins", text: "Recruiters, developers, and clients win together." },
  { icon: Globe, label: "Global Alignment", text: "Vibrant distributed culture across multiple time zones." },
  { icon: Zap, label: "Speed & Integrity", text: "We submit matches within 48 hours with absolute transparency." },
];

export default function CareersPage() {
  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background ambiants */}
      <div className="absolute top-0 left-[-15%] w-[700px] h-[700px] bg-[var(--primary)]/6 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Hero Header ── */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-5 block font-semibold">
            Join The Team
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] tracking-tight leading-[1.05] max-w-2xl">
              Build What&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Next
              </span>
              <br />With Us
            </h1>
            <p className="text-base text-[var(--text-secondary)] max-w-sm leading-relaxed lg:text-right">
              800+ talents placed across 30+ countries, driving tech scaling for the world&apos;s fastest-growing companies.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-left"
              >
                <div className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thin divider */}
        <div className="h-px bg-gradient-to-r from-[var(--primary)]/40 via-slate-200 to-transparent mb-20" />

        {/* ── Engineering Values ── */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3 block font-semibold">How We Work</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {teamValues.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.label}
                  className="flex flex-col gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-200 transition-all"
                >
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                  <div>
                    <p className="text-sm font-bold text-[var(--foreground)] mb-1">{v.label}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Perks Grid ── */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2 block font-semibold">Benefits</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Why Talents Love iStream Solution
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-slate-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all"
                    style={{ background: p.accent + "15", border: `1px solid ${p.accent}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: p.accent }} />
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Open Positions ── */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2 block font-semibold">Now Hiring</span>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
                Open Positions
              </h2>
            </div>
            <span className="text-xs text-[var(--text-secondary)] font-semibold border border-slate-200 rounded-full px-3 py-1.5">
              {openRoles.length} roles open
            </span>
          </div>

          <div className="space-y-3">
            {openRoles.map((role, idx) => (
              <Link
                key={role.title}
                href="/contact"
                className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-white/[0.04] hover:border-[var(--primary)]/30 transition-all duration-300"
              >
                {/* Left: Role number + Title */}
                <div className="flex items-center gap-5 min-w-0">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-slate-300 shrink-0 hidden sm:block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[var(--foreground)] font-bold group-hover:text-[var(--accent)] transition-colors text-base sm:text-lg truncate">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)] font-medium">
                        <Users className="w-3 h-3" />
                        {role.team}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)] font-medium">
                        <MapPin className="w-3 h-3" />
                        {role.location}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-[var(--text-secondary)] font-medium">
                        {role.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Badge + Arrow */}
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span
                    className={`hidden sm:inline-flex text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      role.type === "Internship"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                    }`}
                  >
                    {role.type}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-slate-200 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-8 sm:p-14 text-center">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]" />
          <div className="relative z-10">
            <Clock className="w-8 h-8 text-[var(--accent)] mx-auto mb-4 opacity-60" />
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-3 tracking-tight">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">
              We&apos;re always looking for exceptional engineers and builders. Send us your resume and we&apos;ll review for fit within 48 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_30px_rgba(26,79,143,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Your Resume <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
