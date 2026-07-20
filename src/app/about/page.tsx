import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Heart, Globe, Award, MapPin, Activity, ShieldCheck, Database, Server, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — iStream Solution",
  description: "Learn about iStream Solution's mission, values, and the team behind premium tech recruiting, global payroll, and workforce operations.",
};

const values = [
  {
    icon: Target,
    title: "Technical Excellence",
    description: "Every candidate undergoes strict automated testing and pair-programming system design sessions before being presented.",
  },
  {
    icon: Heart,
    title: "Client-First Collaboration",
    description: "We work directly inside your Slack channels, share detailed interview metrics, and align with your internal milestones.",
  },
  {
    icon: Globe,
    title: "Global Compliance & IP",
    description: "We secure localized legal contracts and assign robust intellectual property rights, protecting your business globally.",
  },
  {
    icon: Award,
    title: "Unified Remote Operations",
    description: "We centralize cross-border payroll dispersals, localized health perks, laptop shipments, and time-off tracking in a single portal.",
  },
];

const milestones = [
  { year: "2019", title: "Recruitment Studio Founded", desc: "Launched with a core team of tech headhunters and developers matching local companies with engineering talent." },
  { year: "2021", title: "Global Talent Network Expansion", desc: "Expanded our candidate pipeline to cover 30+ countries, offering timezone-synchronized remote placements." },
  { year: "2022", title: "Compliance & Payroll Launch", desc: "Built our centralized compliant payroll dispersal framework, protecting client operations against regional audit risks." },
  { year: "2023", title: "800+ Talents Placed", desc: "Crossed 800+ placements worldwide with a 4.9 client rating and high employee retention rates." },
  { year: "2025", title: "Unified Operations Command Center", desc: "Integrated automated equipment shipping, localized benefits administration, and timesheets into iStream Solution." },
];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      {/* Background ambient mesh flows */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header — Full-width text only, clean */}
        <div className="text-left mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-4 block font-semibold">About iStream Solution</span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight leading-[1.1]">
            Connecting Teams Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Global Borders</span>
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl font-medium">
            iStream Solution is a premium recruitment and remote operations platform — making global tech staffing, compliant payroll, and remote workforce management simple and accessible for scaling enterprises worldwide.
          </p>
        </div>

        {/* Cinematic Full-Width Agency Photo — large, bold, editorial */}
        {/* Cinematic Full-Width Sourcing Network Panel */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-16 border border-slate-200 bg-white p-6 sm:p-10 shadow-lg text-left" style={{minHeight: '340px'}}>
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">Live Network Monitor</span>
          </div>

          <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl font-bold text-slate-800 mb-6">
            Global Hubs &amp; Sourcing Centers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Hub 1 */}
            <div className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 hover:border-[var(--primary)]/20 transition-all">
              <span className="inline-block text-[9px] bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider mb-3">Latin America</span>
              <h4 className="text-sm font-bold text-slate-800 mb-1">LATAM Sourcing Hub</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-4">EST aligned developer matches from Brazil, Colombia, Argentina, and Mexico.</p>
              <div className="text-[11px] font-semibold text-slate-600">
                <span className="block">● 340+ Developers Deployed</span>
                <span className="block">● Avg. Match: 48 Hours</span>
              </div>
            </div>

            {/* Hub 2 */}
            <div className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 hover:border-[var(--primary)]/20 transition-all">
              <span className="inline-block text-[9px] bg-[var(--accent)]/10 text-[var(--accent)] px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider mb-3">Eastern Europe</span>
              <h4 className="text-sm font-bold text-slate-800 mb-1">EE Sourcing Hub</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-4">GMT/CET aligned engineers from Poland, Romania, Hungary, and Ukraine.</p>
              <div className="text-[11px] font-semibold text-slate-600">
                <span className="block">● 280+ Developers Deployed</span>
                <span className="block">● Avg. Match: 3-5 Days</span>
              </div>
            </div>

            {/* Hub 3 */}
            <div className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 hover:border-[var(--primary)]/20 transition-all">
              <span className="inline-block text-[9px] bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider mb-3">South Asia</span>
              <h4 className="text-sm font-bold text-slate-800 mb-1">Asia Sourcing Hub</h4>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-4">Shift schedules and overlapping hours from India, Pakistan, and Bangladesh.</p>
              <div className="text-[11px] font-semibold text-slate-600">
                <span className="block">● 180+ Developers Deployed</span>
                <span className="block">● Avg. Match: 48 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {[
            { stat: "800+", label: "Talents Placed" },
            { stat: "30+", label: "Countries Served" },
            { stat: "97%", label: "Client Retention" },
            { stat: "5+", label: "Years of Excellence" },
          ].map((s) => (
            <div key={s.label} className="text-left p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl">
              <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {s.stat}
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 font-semibold uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Our Core Values (Vibrant principle cards with specific colors) */}
        <div className="mb-24">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">Our Principles</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex items-start gap-5 p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl hover:border-slate-300 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--accent)]/5 transition-all">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stepped Timeline Journey (Editorial staggered history list, no simple grids) */}
        <div className="mb-24 relative">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">Our History</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight">Our Journey</h2>
          </div>
          
          <div className="relative border-l border-slate-200 ml-4 pl-8 space-y-12">
            {milestones.map((m, mi) => (
              <div key={m.year} className="relative group text-left">
                {/* Node connector */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[var(--background)] border border-slate-200 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] group-hover:scale-125 transition-transform" />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Staggered text card */}
                  <div className="lg:col-span-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-6 hover:border-slate-300 transition-all duration-300">
                    <span className="font-[family-name:var(--font-space-grotesk)] text-2xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                      {m.year}
                    </span>
                    <h3 className="text-[var(--foreground)] font-bold mt-1 mb-2 text-base sm:text-lg">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">{m.desc}</p>
                  </div>
                  {/* Subtle placeholder indicating step index */}
                  <div className="hidden lg:flex lg:col-span-4 text-right justify-end font-mono text-[70px] font-extrabold text-[var(--foreground)]/5 select-none pr-8">
                    0{mi + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Engineering Hubs (Interactive dashboard styling) */}
        <div className="mb-24">
          <div className="text-left mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-3 block font-semibold">Global Scale</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-[var(--foreground)] tracking-tight">Global Operations &amp; Sourcing Centers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { 
                city: "San Francisco, CA", 
                role: "HQ & Enterprise Accounts", 
                country: "United States", 
                stats: { ping: "12ms", active: "15 Leads", servers: "AWS Cloud" }
              },
              { 
                city: "Lahore, Pakistan", 
                role: "Sourcing & Vetting Center", 
                country: "Pakistan", 
                stats: { ping: "142ms", active: "120 Talent Reps", servers: "Dedicated Platform" }
              },
              { 
                city: "Dubai, UAE", 
                role: "Middle East Operations", 
                country: "UAE", 
                stats: { ping: "38ms", active: "10 Operations Managers", servers: "Multi-Cloud" }
              },
            ].map((office) => (
              <div key={office.city} className="p-6 bg-[var(--card-bg)] rounded-3xl border border-[var(--card-border)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-20 h-20 bg-[var(--primary)]/5 rounded-full blur-xl" />
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4 group-hover:border-slate-300 transition-all">
                    <MapPin className="w-4.5 h-4.5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-[var(--foreground)] font-bold text-base sm:text-lg">{office.city}</h3>
                  <p className="text-xs text-[var(--text-secondary)] font-semibold mt-1">{office.role}</p>
                </div>

                {/* Sub-dashboard specs */}
                <div className="mt-6 pt-4 border-t border-slate-200 space-y-1.5 font-mono text-[9px] text-[var(--foreground)]/50">
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1"><Activity className="w-3 h-3 text-[var(--accent)]" /> Network Ping</span>
                    <span className="text-[var(--foreground)] font-semibold">{office.stats.ping}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3 text-[var(--accent)]" /> Staffing Capacity</span>
                    <span className="text-[var(--foreground)] font-semibold">{office.stats.active}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1"><Server className="w-3 h-3 text-[var(--accent)]" /> Host Node</span>
                    <span className="text-[var(--foreground)] font-semibold">{office.stats.servers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--card-border)] rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] mb-4 tracking-tight">Want to Join Our Network?</h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-8 max-w-lg mx-auto leading-relaxed">We&apos;re always looking for top-tier engineers, recruiters, and operations experts to join our global network.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/careers" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-[var(--foreground)] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(26,79,143,0.4)] transition-all duration-300 hover:-translate-y-0.5">
              View Open Roles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full text-sm font-semibold text-[var(--foreground)] border border-slate-200 hover:bg-slate-50 transition-all duration-300">
              Partner With Us
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
