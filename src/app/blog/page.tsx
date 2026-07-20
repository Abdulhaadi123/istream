import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogListing from "@/components/BlogListing";

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
    image: "/blog-remote-hiring.jpg",
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
    image: "/blog-staff-aug.jpg",
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
    image: "/blog-vetting.jpg",
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
    image: "/blog-payroll.jpg",
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
    image: "/blog-timezone.jpg",
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
    image: "/blog-recruitment.jpg",
  },
];

const categories = ["All", "Hiring Guides", "Talent Strategy", "Vetting & Quality", "Operations", "Remote Operations"];

export default function BlogPage() {
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
        </div>

        {/* Render interactive client component for categories & posts */}
        <BlogListing posts={posts} categories={categories} />

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
