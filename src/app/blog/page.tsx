import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — iStream Solution | Hiring & Recruitment Insights",
  description:
    "Read iStream Solution insights on IT recruitment, technical staffing, remote team management, and building high-performance engineering teams.",
};

const posts = [
  {
    slug: "how-to-hire-senior-engineers-remotely",
    category: "Hiring Guides",
    title: "How to Hire Senior Engineers Remotely Without Slowing Down Your Sprint",
    excerpt:
      "Sourcing senior engineers across time zones requires a fundamentally different approach than local hiring. We break down the exact pipeline we use to close senior roles in under 14 days.",
    readTime: "6 min read",
    date: "Jul 15, 2026",
    accent: "#4f46e5",
  },
  {
    slug: "staff-augmentation-vs-direct-hire",
    category: "Talent Strategy",
    title: "Staff Augmentation vs. Direct Hire: Which Model Fits Your Growth Stage?",
    excerpt:
      "Both engagement models solve different problems. Here's a practical framework to help CTOs and VP Engs decide which hiring model matches their current runway, team size, and velocity.",
    readTime: "5 min read",
    date: "Jul 8, 2026",
    accent: "#0ea5e9",
  },
  {
    slug: "vetting-process-technical-talent",
    category: "Vetting & Quality",
    title: "Inside iStream's 4-Stage Technical Vetting Process",
    excerpt:
      "We reject over 90% of applicants. Here's exactly what our vetting pipeline looks like — from the first screen to the final client handoff — and why it produces such high placement retention.",
    readTime: "8 min read",
    date: "Jun 30, 2026",
    accent: "#10b981",
  },
  {
    slug: "global-payroll-remote-teams",
    category: "Operations",
    title: "Managing Global Payroll for Remote Engineering Teams: A Practical Guide",
    excerpt:
      "Multi-currency payroll, compliance across jurisdictions, and contractor vs. employee classification — this guide covers everything you need to pay your international team correctly.",
    readTime: "7 min read",
    date: "Jun 22, 2026",
    accent: "#f59e0b",
  },
  {
    slug: "timezone-aligned-teams-productivity",
    category: "Remote Operations",
    title: "Why Timezone Alignment is the Hidden Driver of Remote Team Productivity",
    excerpt:
      "Async-first works — until it doesn't. The companies scaling fastest with remote teams are those who design for meaningful overlap windows. Here's how to engineer yours.",
    readTime: "5 min read",
    date: "Jun 14, 2026",
    accent: "#ec4899",
  },
  {
    slug: "it-recruitment-red-flags",
    category: "Hiring Guides",
    title: "7 Red Flags to Watch for When Evaluating an IT Recruitment Partner",
    excerpt:
      "Not all staffing agencies deliver the same quality. After placing 800+ developers globally, here are the patterns we've seen separate great recruitment partners from mediocre ones.",
    readTime: "4 min read",
    date: "Jun 5, 2026",
    accent: "#ef4444",
  },
];

const categories = ["All", "Hiring Guides", "Talent Strategy", "Vetting & Quality", "Operations", "Remote Operations"];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background glows */}
      <div className="absolute top-0 left-[-15%] w-[700px] h-[700px] bg-[var(--primary)]/6 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-5 block font-semibold">
            Insights & Resources
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--foreground)] tracking-tight leading-[1.05] max-w-2xl">
              Recruitment{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Intelligence
              </span>
            </h1>
            <p className="text-base text-[var(--text-secondary)] max-w-sm leading-relaxed lg:text-right">
              Practical guides on IT hiring, remote team operations, and building
              elite engineering organizations.
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                  i === 0
                    ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                    : "border-slate-200 text-[var(--text-secondary)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-[var(--primary)]/40 via-slate-200 to-transparent mb-16" />

        {/* ── Featured Post ── */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-6 block font-semibold">
            Featured
          </span>
          <Link
            href="/contact"
            className="group grid lg:grid-cols-2 gap-0 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden hover:border-[var(--primary)]/30 hover:shadow-xl transition-all duration-300"
          >
            {/* Left: colored block */}
            <div
              className="min-h-[260px] lg:min-h-[360px] relative flex items-end p-8"
              style={{ background: `linear-gradient(135deg, ${featured.accent}22, ${featured.accent}08)` }}
            >
              <div
                className="absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: featured.accent + "20", border: `1px solid ${featured.accent}30` }}
              >
                <Tag className="w-6 h-6" style={{ color: featured.accent }} />
              </div>
              <div>
                <span
                  className="inline-flex text-[10px] font-bold uppercase px-2.5 py-1 rounded-full mb-3"
                  style={{ background: featured.accent + "18", color: featured.accent, border: `1px solid ${featured.accent}25` }}
                >
                  {featured.category}
                </span>
                <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featured.readTime}</span>
                  <span className="text-slate-300">·</span>
                  <span>{featured.date}</span>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight mb-4 group-hover:text-[var(--primary)] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>

        {/* ── Post Grid ── */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-8 block font-semibold">
            Latest Articles
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href="/contact"
                className="group flex flex-col p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--primary)]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {/* Top accent bar */}
                <div className="h-1 w-10 rounded-full mb-5 transition-all group-hover:w-16" style={{ background: post.accent }} />

                <span
                  className="inline-flex self-start text-[10px] font-bold uppercase px-2.5 py-1 rounded-full mb-4"
                  style={{ background: post.accent + "15", color: post.accent, border: `1px solid ${post.accent}22` }}
                >
                  {post.category}
                </span>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] tracking-tight leading-snug mb-3 group-hover:text-[var(--primary)] transition-colors flex-1">
                  {post.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--card-border)]">
                  <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                    <span className="text-slate-300">·</span>
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Newsletter CTA ── */}
        <div className="relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 p-8 sm:p-14 text-center">
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">
              Stay Informed
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-3 tracking-tight">
              Hiring Insights. Straight to Your Inbox.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">
              Join 2,000+ CTOs and Heads of Engineering who get our bi-weekly breakdown
              on technical hiring, remote ops, and talent market trends.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_30px_rgba(26,79,143,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
