import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Cloud, Users, Code2, ShieldAlert, Cpu, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "On-Demand Engineering Teams — iStream Solution",
  description:
    "Assemble and deploy fully managed remote developer squads to accelerate your product roadmap. Pre-vetted senior engineers ready in under a week.",
};

const capabilities = [
  {
    icon: Code2,
    title: "Custom Squad Assembly",
    description:
      "Fully tailored developer squads consisting of frontend, backend, and mobile engineers matched to your specific tech stack.",
  },
  {
    icon: Users,
    title: "Integrated Tech Leadership",
    description:
      "Every squad includes a senior Tech Lead and a Project Manager to coordinate sprints, ensure quality code, and handle daily reporting.",
  },
  {
    icon: Cpu,
    title: "Vetted AI & Tech Experts",
    description:
      "Access senior engineers skilled in advanced technologies, including Generative AI, RAG integrations, LLM workflows, and modern web frameworks.",
  },
  {
    icon: ShieldAlert,
    title: "Rigorous Quality Assurance",
    description:
      "Integrated manual and automated testing ensures that every feature deployed meets strict performance and security guidelines.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Infrastructure",
    description:
      "Our teams build with horizontal scalability in mind, using Docker, Kubernetes, and automated CI/CD pipelines on AWS, Azure, or GCP.",
  },
  {
    icon: Database,
    title: "Secure & Compliant Code",
    description:
      "Adhering to strict security standards, OWASP practices, and secure data handling to protect your business IP at all times.",
  },
];

const techStack = [
  "React / Next.js", "Node.js", "Python / Django", "Golang", "TypeScript",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS / GCP", "Terraform",
  "GitHub Actions", "Tailwind CSS", "Applied AI", "LangChain", "Vector DBs",
];

export default function OnDemandTeamsPage() {
  return (
    <main className="pt-20 pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-24">
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
                Staffing Solutions
              </span>

              <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl xl:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                On-Demand{" "}
                <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                  Developer Teams
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
                Accelerate your roadmap with fully managed, offshore engineering squads. We source, vet, and onboard complete development teams in under a week, reducing recruiting cycles by 90%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(26,79,143,0.4)] transition-all"
                >
                  Request a Custom Squad <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-we-vet"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-600 border border-slate-200 hover:border-[var(--primary)]/50 hover:text-[var(--foreground)] transition-all"
                >
                  Our Vetting Process
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {["Offshore Teams", "Managed Sprints", "Product Acceleration", "Vetted Tech Leads"].map((b) => (
                  <span
                    key={b}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[var(--text-secondary)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Realistic Squad Photo */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src="/cloud-devops-illustration.png"
                  alt="On-Demand Engineering Teams — Managed remote developer squads"
                  width={780}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 shadow-xl">
                <p className="text-xs text-[var(--text-secondary)]">Average Deployment Time</p>
                <p className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--foreground)]">
                  5 Days
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
              Services
            </span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
              End-to-End Squad Offerings
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
            Tech Stacks Handled
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 text-sm rounded-xl bg-slate-50 text-[var(--text-secondary)] border border-slate-200 hover:border-[var(--primary)]/30 hover:text-[var(--foreground)] transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 via-[var(--card-bg)] to-[var(--accent)]/5 border border-[var(--card-border)] rounded-2xl p-12">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
              Need a High-Performance Squad?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto text-sm sm:text-base">
              Scale your development capacity. Share your project requirements and let us deploy a custom squad.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_28px_rgba(26,79,143,0.4)] transition-all"
            >
              Get Squad Scope Proposal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
