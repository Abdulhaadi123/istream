import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, HeartPulse, ShoppingBag, Truck, Film, Layout } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve — iStream Solution",
  description: "Explore iStream Solution's placement and staffing domain expertise across FinTech, Healthcare, E-Commerce, Logistics, Media, and Enterprise SaaS.",
};

const industries = [
  {
    icon: Landmark,
    number: "01",
    name: "FinTech & Banking",
    tagline: "Secure. Compliant. Fast.",
    description:
      "We source and deploy senior engineers skilled in building PCI-DSS compliant transaction pipelines, digital wallets, and automated KYC/AML systems. We also handle full local compliance contracts and payouts for these specialized cross-border developers.",
    stats: [
      { value: "48 Hours", label: "Match Time" },
      { value: "PCI-DSS", label: "Domain Focus" },
      { value: "100%", label: "Compliant Contracts" },
    ],
    solutions: ["Digital Wallets", "KYC/AML Sourcing", "Payment Gateways", "Open Banking Devs", "Fraud Tech Placements"],
    accent: "#3b82f6",
  },
  {
    icon: HeartPulse,
    number: "02",
    name: "Healthcare & MedTech",
    tagline: "HIPAA-Hardened. Patient-First.",
    description:
      "We build pre-vetted teams of developers experienced in clinical platforms, telehealth portals, and FHIR EMR integrations. All developers are strictly vetted for data protection compliance and intellectual property security.",
    stats: [
      { value: "HIPAA", label: "Vetted Tech" },
      { value: "FHIR R4", label: "Integrations" },
      { value: "Top 3%", label: "Assessed Talent" },
    ],
    solutions: ["EMR Integrations", "Telehealth Sourcing", "Clinical AI Devs", "HIPAA Compliance", "HL7 FHIR Talent"],
    accent: "#3198d4",
  },
  {
    icon: ShoppingBag,
    number: "03",
    name: "E-Commerce & Retail",
    tagline: "Conversion-Optimized. Scalable.",
    description:
      "On-demand development squads assembled to handle peak seasonal traffic. We place frontend, headless commerce, and inventory system engineers who build conversion-optimized funnels.",
    stats: [
      { value: "5 Days", label: "Squad Deploy" },
      { value: "Headless", label: "Specialists" },
      { value: "Flexible", label: "Engagement Scale" },
    ],
    solutions: ["Headless Commerce", "AI Recommendation Devs", "Inventory Systems", "Checkout Specialists", "Shopify Plus / Custom"],
    accent: "#10b981",
  },
  {
    icon: Truck,
    number: "04",
    name: "Logistics & Supply Chain",
    tagline: "Real-Time. Route-Optimized.",
    description:
      "Deploy specialized developers to construct real-time dispatch systems, fleet GPS tracking, and IoT data pipelines. We handle timesheets, developer onboarding, and payroll dispersals.",
    stats: [
      { value: "30+", label: "Countries Sourced" },
      { value: "Real-Time", label: "System Devs" },
      { value: "Dedicated", label: "Success Managers" },
    ],
    solutions: ["Route Optimization Devs", "Live Tracking Sourcing", "WMS Talent", "IoT Pipelines", "Dispatch Tech Placements"],
    accent: "#f59e0b",
  },
  {
    icon: Film,
    number: "05",
    name: "Media & Entertainment",
    tagline: "Low-Latency. DRM-Protected.",
    description:
      "Sourcing low-latency audio/video streaming specialists, DRM content protection developers, and subscription billing engineers to accelerate creator platform roadmaps.",
    stats: [
      { value: "Low Latency", label: "Expertise" },
      { value: "Streaming", label: "Dev Bench" },
      { value: "99.9%", label: "Staff Retention" },
    ],
    solutions: ["Adaptive Bitrate Devs", "DRM Protection Sourcing", "Creator Portal Devs", "Billing Specialists", "CDN Architecture"],
    accent: "#ec4899",
  },
  {
    icon: Layout,
    number: "06",
    name: "Enterprise SaaS",
    tagline: "Multi-Tenant. API-First.",
    description:
      "Deploy complete multi-tenant SaaS engineering squads with integrated tech leadership. We manage contracts, payroll compliance, and cross-border invoicing, letting you focus on the roadmap.",
    stats: [
      { value: "SOC 2", label: "Aligned Vetting" },
      { value: "Managed", label: "Sprints & Leads" },
      { value: "1 Invoice", label: "Consolidated Billing" },
    ],
    solutions: ["Multi-Tenant Sourcing", "Billing Engine Talent", "Workflow Automation", "API Integration Devs", "Product Owners"],
    accent: "#8b5cf6",
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background ambient */}
      <div className="absolute top-0 left-[-15%] w-[600px] h-[600px] bg-[var(--primary)]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Page Header ── */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">Domain Expertise</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] tracking-tight leading-[1.1] max-w-2xl">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Serve
              </span>
            </h1>
            <p className="text-base text-[var(--text-secondary)] max-w-md leading-relaxed lg:text-right">
              Deep domain expertise across 6 verticals — engineering solutions that meet the specific compliance, 
              performance, and scalability requirements of each industry.
            </p>
          </div>
          {/* Thin divider */}
          <div className="mt-10 h-px bg-gradient-to-r from-[var(--primary)]/40 via-slate-200 to-transparent" />
        </div>

        {/* ── Industry Rows ── */}
        <div className="space-y-0">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={ind.name}
                className="group py-12 border-b border-slate-200 last:border-b-0"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? "" : "lg:direction-rtl"}`}>

                  {/* ─ Left: Number + Icon + Name ─ */}
                  <div className="lg:col-span-4 flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                      <span
                        className="font-[family-name:var(--font-space-grotesk)] text-5xl font-extrabold leading-none"
                        style={{ color: ind.accent + "20" }}
                      >
                        {ind.number}
                      </span>
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ background: ind.accent + "15", border: `1px solid ${ind.accent}25` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: ind.accent }} />
                      </div>
                    </div>

                    <div>
                      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-1 leading-tight">
                        {ind.name}
                      </h2>
                      <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ind.accent }}>
                        {ind.tagline}
                      </p>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {ind.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-2xl p-3 text-left"
                          style={{ background: ind.accent + "08", border: `1px solid ${ind.accent}18` }}
                        >
                          <div
                            className="font-[family-name:var(--font-space-grotesk)] text-lg font-extrabold leading-none mb-1"
                            style={{ color: ind.accent }}
                          >
                            {s.value}
                          </div>
                          <div className="text-[10px] font-semibold text-[var(--foreground)]/40 uppercase tracking-wider leading-tight">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ─ Right: Description + Solutions ─ */}
                  <div className="lg:col-span-8 flex flex-col justify-start gap-6 lg:pl-8 lg:border-l" style={{ borderColor: ind.accent + "20" }}>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed font-medium">
                      {ind.description}
                    </p>

                    {/* Solutions chips */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">What We Deliver</p>
                      <div className="flex flex-wrap gap-2">
                        {ind.solutions.map((sol) => (
                          <span
                            key={sol}
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                            style={{
                              background: ind.accent + "12",
                              border: `1px solid ${ind.accent}28`,
                              color: ind.accent,
                            }}
                          >
                            {sol}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover CTA */}
                    <div className="mt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 opacity-50 group-hover:opacity-100"
                        style={{ color: ind.accent }}
                      >
                        Discuss Your {ind.name} Project <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 sm:p-14">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-transparent" />
          <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] bg-[var(--primary)]/8 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-3 tracking-tight">
                Ready to Build in Your Industry?
              </h2>
              <p className="text-sm text-[var(--text-secondary)] max-w-lg leading-relaxed">
                Tell us your domain. We&apos;ll match the right developers, organize localized compliance contracts, and handle global payouts seamlessly.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_30px_rgba(26,79,143,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
