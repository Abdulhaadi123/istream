import { Metadata } from "next";
import Link from "next/link";
import { Brain, Code2, Smartphone, Users, Cloud, Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — iStream Solution",
  description: "Explore iStream Solution's full range of technology services: Direct Hire Recruiting, On-Demand Developer Teams, IT Staff Augmentation, and Remote Operations.",
};

const services = [
  {
    icon: Users, 
    title: "Direct Hire Recruiting", 
    href: "/services/direct-hire",
    description: "Contingency and retained headhunting for key engineering, design, and product leadership roles. We place senior candidates who drive business results.",
    highlights: ["Permanent Placements", "Executive Search", "Role-Specific Benchmarks", "AI-Powered Technical Vetting"],
    gradient: "from-blue-500/10 to-indigo-500/5",
    borderGlow: "hover:border-[var(--primary)]/40 hover:shadow-[0_0_30px_rgba(26,79,143,0.15)]",
  },
  {
    icon: Cloud, 
    title: "On-Demand Teams", 
    href: "/services/on-demand-teams",
    description: "Accelerate your pipeline with fully functional, remote engineering teams. We supply developer squads with matching tech stacks to build your product.",
    highlights: ["Project-Based Squads", "Tech Leads & PMs Included", "High-Quality Deliverables", "Fast Bootstrapping"],
    gradient: "from-blue-500/10 to-sky-500/5",
    borderGlow: "hover:border-[var(--accent)]/40 hover:shadow-[0_0_30px_rgba(49,152,212,0.15)]",
  },
  {
    icon: Code2, 
    title: "IT Staff Augmentation", 
    href: "/services/staff-augmentation",
    description: "Scale your capacity instantly with individual senior remote developers. Pre-vetted experts that integrate directly into your internal workflows.",
    highlights: ["Individual Contributors", "48-Hour Matching", "Flexible Engagement Terms", "Zero Recruiting Overhead"],
    gradient: "from-emerald-500/10 to-teal-500/5",
    borderGlow: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Lightbulb, 
    title: "Remote Operations", 
    href: "/services/remote-operations",
    description: "End-to-end management of your remote team's operations. We handle global payroll, local compliance, benefits administration, and onboarding.",
    highlights: ["Global Payroll & Invoicing", "Compliant Contracts", "Simplified Onboarding", "Command Center Platform"],
    gradient: "from-blue-500/10 to-sky-500/5",
    borderGlow: "hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(26,79,143,0.15)]",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-20 relative">
      {/* Background Decorative Lines */}
      <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/15 to-transparent pointer-events-none" />
      <div className="absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">Our Engagement Models</span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight leading-[1.1]">
            Scale Your Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Capabilities</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed font-medium">
            From direct headhunting to on-demand developer teams and automated remote operations — we help you build high-performing engineering organizations.
          </p>
        </div>

        {/* Services Grid (2x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block h-full">
              <div className={`relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between ${service.borderGlow}`}>
                {/* Background radial glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                      <service.icon className="w-5.5 h-5.5 text-[var(--accent)]" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h2 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="relative z-10 mt-auto pt-4 border-t border-slate-200 space-y-2">
                  {service.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Dynamic CTA Board */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--card-border)] rounded-3xl p-8 sm:p-12 text-center backdrop-blur-sm">
          {/* Decorative glows */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[var(--primary)]/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[var(--accent)]/20 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-4 tracking-tight">Not sure which model fits your pipeline?</h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8 leading-relaxed font-medium">
              Schedule a free 30-minute discovery call with our recruitment specialists. We will evaluate your hiring goals, stack requirements, and recommend the best setup.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(26,79,143,0.4)] hover:scale-[1.02] transition-all duration-300">
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
