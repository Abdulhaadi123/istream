import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, CheckCircle2, ShieldCheck, Heart, Sparkles, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Success & Team Support — iStream Solution",
  description: "Dedicated client success managers, developer onboarding, sprint alignment support, and ongoing team health monitoring for global distributed engineering teams.",
};

const features = [
  { icon: Users, title: "Dedicated Success Managers", description: "Every client is paired with an experienced Success Manager who coordinates onboarding, resolves communication blockers, and ensures cultural alignment." },
  { icon: MessageSquare, title: "Onboarding & Tool Setup", description: "We manage the complete administrative onboarding, including NDA signings, security briefings, Slack/Jira setup, and environment access." },
  { icon: ShieldCheck, title: "Ongoing Health Monitoring", description: "Regular pulse surveys and feedback cycles with both engineering managers and developers to monitor team health and maintain retention." },
  { icon: Heart, title: "Developer Welfare & Perks", description: "We organize local team perks, workspace budgets, and local community meetups to keep remote developers engaged and committed to your project." },
];

const reviews = [
  { metric: "97%", label: "Average retention rate over 12 months" },
  { metric: "48 Hours", label: "Average turnaround for replacement or scaling" },
  { metric: "1-on-1", label: "Monthly developer performance reviews" },
];

export default function SuccessSupportPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <Link href="/services/remote-operations" className="text-sm text-[var(--accent)] hover:underline mb-4 block">← Back to Operations</Link>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight">
              Success &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Team Support</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              Building a remote team is only the first step. We provide the management support, onboarding assistance, and developer welfare programs to keep your team motivated and aligned.
            </p>
          </div>

          {/* Right — Realistic Team Photo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group">
              <Image
                src="/cloud-devops-illustration.png"
                alt="iStream Success & Team Support — Collaborative software engineering team coordinating sprint roadmap"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e30]/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[10px] font-bold text-slate-800">97% Talent Retention Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          {reviews.map((r) => (
            <div key={r.label} className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-[var(--primary)] font-[family-name:var(--font-space-grotesk)]">{r.metric}</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">{r.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[var(--primary)]/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/8 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <h3 className="text-base font-bold text-[var(--foreground)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-4">
            Build high-retention remote engineering squads
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Our dedicated success managers align remote developers with your local sprints and company culture seamlessly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[var(--primary)] font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg"
          >
            Schedule Intake Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
