import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Users, Clock, Shield, Briefcase, Star, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Staff Augmentation — iStream Solution",
  description: "Scale your team instantly with pre-vetted senior engineers. Dedicated engineers, hourly developers, and on-demand technical resources deployed within 48 hours.",
};

const engagementModels = [
  { icon: Briefcase, title: "Individual Engineers", description: "Inject senior developers directly into your existing team to add capacity, resolve specific blocks, or accelerate features.", tag: "Monthly / Hourly" },
  { icon: Users, title: "Dedicated Squads", description: "Fully functional engineering squads embedded into your product roadmap. Includes developer, QA, and Tech Lead.", tag: "Monthly Retainer" },
  { icon: Zap, title: "On-Demand Resource Bench", description: "Access developers on-demand from our pre-vetted bench, allowing flexible adjustments based on project cycles.", tag: "Flexible Scale" },
  { icon: Star, title: "Technical Leadership Search", description: "Focused sourcing for hard-to-fill senior leadership, team leads, and architects to guide your internal developers.", tag: "Custom Engagements" },
];

const roles = [
  "Frontend Developers (React, Next.js, Vue)", "Backend Developers (Node.js, Python, Golang, Ruby)", "Full-Stack Engineers (TypeScript, Python, Go)", "Mobile App Developers (iOS, Android, React Native, Flutter)",
  "AI & Machine Learning Engineers", "Data Engineers & Architects", "DevOps & SRE Engineers", "Cloud Architects (AWS, GCP, Azure)",
  "QA & Automation Engineers", "UI/UX Product Designers", "Product Managers", "Engineering Leads & Managers",
];

const vettingSteps = [
  { step: "01", title: "Automated Screening", desc: "Rigorous technical tests, coding assignments, and preliminary language proficiency reviews." },
  { step: "02", title: "Technical Coding Challenge", desc: "Real-world engineering problems to evaluate syntax, design decisions, edge case handling, and code purity." },
  { step: "03", title: "Live System Design Review", desc: "Pair programming and architecture discussions with our principal engineers to evaluate design patterns." },
  { step: "04", title: "Behavioral & Culture Fit", desc: "Interviews checking communication skills, remote work alignment, collaboration values, and accountability." },
  { step: "05", title: "Reference Validation", desc: "Verifying past employment, professional project delivery history, and client satisfaction." },
];

export default function StaffAugmentationPage() {
  return (
    <main className="pt-32 pb-20 relative">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Split Content + Premium Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <Link href="/services" className="text-sm text-[var(--accent)] hover:underline mb-4 block">← Back to Services</Link>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight">
              IT Staff <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Augmentation</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              Scale your engineering team in 48 hours, not 48 days. Access our pre-vetted pool of senior engineers across every tech stack — with flexible engagement models, replacement guarantees, and zero recruitment overhead.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl border border-slate-200 p-2 shadow-2xl bg-white overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/staff-aug-illustration.png"
                  alt="iStream Solutions Developer Augmentation Talent"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { stat: "48hrs", label: "Average Deployment" }, { stat: "200+", label: "Engineers on Bench" },
            { stat: "97%", label: "Client Retention" }, { stat: "Top 3%", label: "Talent Accepted" },
          ].map((s) => (
            <div key={s.label} className="text-center p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
              <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">{s.stat}</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1 font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-8">Engagement Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((m) => (
              <div key={m.title} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-slate-200 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <m.icon className="w-8 h-8 text-[var(--accent)]" />
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">{m.tag}</span>
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-[var(--foreground)] mb-2">{m.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vetting Process */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-8">Our 5-Stage Vetting Pipeline</h2>
          <div className="space-y-4">
            {vettingSteps.map((v) => (
              <div key={v.step} className="flex items-start gap-5 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
                <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent shrink-0">{v.step}</span>
                <div><h3 className="text-[var(--foreground)] font-semibold mb-1">{v.title}</h3><p className="text-sm text-[var(--text-secondary)]">{v.desc}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* Employment Types */}
        <div className="mb-20 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--foreground)] mb-4">Supported Employment Types</h2>
          <div className="flex flex-wrap gap-3">
            {["W-2 (Full-Time)", "1099 (Independent Contractor)", "C2C (Corp-to-Corp)", "Contract-to-Hire", "Part-Time / Hourly", "Onshore & Offshore"].map((t) => (
              <span key={t} className="px-4 py-2 text-sm rounded-lg bg-slate-50 text-[var(--text-secondary)] border border-slate-200 font-semibold">{t}</span>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)] mb-6">Roles Available On-Demand</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {roles.map((r) => (
              <div key={r} className="flex items-center gap-2 p-3 bg-[var(--card-bg)] rounded-lg border border-[var(--card-border)]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span className="text-sm text-[var(--text-secondary)] font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "48-Hour Deployment", desc: "From requirement brief to resource deployment in under 48 hours." },
            { icon: Shield, title: "Replacement Guarantee", desc: "If an engineer isn't the right fit, we replace them at no additional cost." },
            { icon: Star, title: "12-Hour Response Time", desc: "We respond to every hiring brief within 12 hours, guaranteed." },
          ].map((g) => (
            <div key={g.title} className="text-center p-6 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 rounded-2xl border border-[var(--card-border)]">
              <g.icon className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] mb-2">{g.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--card-border)] rounded-2xl p-10">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">Ready to Scale Your Team?</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-lg mx-auto">Tell us the roles you need and we&apos;ll match you with pre-vetted engineers within 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(26,79,143,0.4)] transition-all">
            Hire Top Talent <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
