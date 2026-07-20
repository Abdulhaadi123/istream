import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Search,
  Briefcase,
  Sliders,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Direct Hire Recruiting — iStream Solution",
  description:
    "Direct hire and executive recruiting for key engineering, product, and tech leadership roles. We source and place senior candidates who drive business results.",
};

const capabilities = [
  {
    icon: Search,
    title: "Executive Tech Search",
    description:
      "Sourcing CTOs, VP of Engineering, Directors, and Managers who bring strategic leadership and technical expertise to your organization.",
  },
  {
    icon: Briefcase,
    title: "AI & ML Specialists",
    description:
      "Headhunting specialized talent for the AI economy, including Applied AI engineers, LLM specialists, data scientists, and ML researchers.",
  },
  {
    icon: Sliders,
    title: "Full-Stack & Cloud Engineers",
    description:
      "Connecting you with senior developers skilled in modern stacks (Next.js, Node.js, Go, Python) and cloud infrastructure architects (AWS, GCP).",
  },
  {
    icon: Users,
    title: "Rigorous Technical Vetting",
    description:
      "Every candidate undergoes comprehensive technical evaluations, portfolio reviews, and soft-skill assessments before they reach your inbox.",
  },
  {
    icon: DollarSign,
    title: "Salary Benchmarking",
    description:
      "We provide role-specific compensation guides and market data to ensure your offers are competitive and structured for successful closures.",
  },
  {
    icon: TrendingUp,
    title: "Flexible Engagement Models",
    description:
      "Choose from contingency searches for single high-impact roles or retained models for scaling multiple positions simultaneously.",
  },
];

const techStack = {
  "AI & Machine Learning": ["Applied AI", "LLM Integration", "PyTorch / TensorFlow", "LangChain", "Vector DBs (Pinecone)"],
  "Development": ["React / Next.js", "Node.js", "Python / Django", "Golang", "TypeScript", "Ruby on Rails"],
  "Infrastructure & Lead": ["AWS / GCP", "DevOps / SRE", "Kubernetes", "CTOs / VPs", "Product Managers"],
};

const approach = [
  {
    title: "Discovery & Alignment",
    desc: "We analyze your stack, company culture, budget, and timelines during a detailed discovery call to align expectations perfectly.",
  },
  {
    title: "Targeted Sourcing",
    desc: "We headhunt active and passive candidates from our global networks and talent pipeline, filtering specifically for top performers.",
  },
  {
    title: "AI-Powered Technical Assessment",
    desc: "Candidates pass adaptive coding challenges and live reviews to verify hands-on expertise and system design capabilities.",
  },
  {
    title: "Seamless Offer Delivery",
    desc: "We manage salary negotiation, benefits alignment, and onboarding coordination to ensure high acceptance rates.",
  },
];

export default function DirectHirePage() {
  return (
    <main className="pt-20 pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Background glow blobs */}
        <div className="absolute top-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-[var(--primary)]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[var(--accent)]/8 blur-[120px] pointer-events-none" />

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
                Recruitment Services
              </span>

              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl xl:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                Direct Hire{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Recruiting
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                We connect high-growth tech companies with permanent, pre-vetted senior engineers and leaders. Sourced globally, screened rigorously, and matched to fit your engineering culture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(26,79,143,0.4)] transition-all"
                >
                  Share Your Hiring Brief <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 hover:border-[var(--primary)]/50 hover:text-[var(--foreground)] transition-all"
                >
                  Our Vetting Process
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-10">
                {["Permanent Placements", "Executive Search", "AI-Vetted Talent", "Contingency & Retained"].map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[var(--text-secondary)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Realistic Sourcing Photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src="/custom-software-illustration.png"
                  alt="Direct Hire Tech Sourcing — Digital talent selection core"
                  width={780}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--text-secondary)]">Average Retention Rate</p>
                <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--foreground)]">
                  97<span className="text-[var(--accent)]">%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ──────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">
              Capabilities
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
              Tailored Sourcing Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="group bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(26,79,143,0.08)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                  <c.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)] mb-8 text-center">
            Specialized Tech Talent Pools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([cat, techs]) => (
              <div
                key={cat}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5"
              >
                <h3 className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
                  {cat}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-lg bg-slate-50 text-[var(--text-secondary)] border border-slate-200 hover:border-[var(--primary)]/30 hover:text-[var(--foreground)] transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Development Approach ─────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)] mb-8 text-center">
            Our Recruitment Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {approach.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] hover:border-[var(--primary)]/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-[var(--foreground)] font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
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
              Ready to Hire Elite Talent?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Share your requirements with us. Our tech recruiters will source and deliver your matches in record time.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(26,79,143,0.4)] transition-all"
            >
              Start Sourcing Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
