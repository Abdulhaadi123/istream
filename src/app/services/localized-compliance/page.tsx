import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileText, Lock, Scale, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Localized Compliance & Contracts — iStream Solution",
  description: "Risk-free contractor agreements with full IP protection, local labor law compliance, and EOR services across 30+ countries.",
};

const features = [
  { icon: FileText, title: "Localized Employment Contracts", description: "Every contractor receives a legally binding, jurisdiction-specific contract that meets local labor law requirements — written and reviewed by in-country legal counsel." },
  { icon: Lock, title: "IP & NDA Protection", description: "All work product, code, and data created by your contractors is protected by robust IP assignment clauses tailored to each country's IP framework." },
  { icon: Scale, title: "EOR (Employer of Record)", description: "We act as the legal employer in each country, absorbing all employer liability, tax registration, and regulatory risk on your behalf." },
  { icon: AlertCircle, title: "Ongoing Compliance Monitoring", description: "Labor laws change. Our legal team monitors regulations in every active jurisdiction and automatically updates your contracts to stay compliant." },
];

const countries = [
  { flag: "🇵🇱", name: "Poland", notes: "UoP & B2B contracts, ZUS contributions" },
  { flag: "🇨🇴", name: "Colombia", notes: "RUT registration, PILA compliance" },
  { flag: "🇵🇰", name: "Pakistan", notes: "FBR compliant invoicing, NTN setup" },
  { flag: "🇮🇳", name: "India", notes: "GST, TDS deductions, Form 16A" },
  { flag: "🇷🇴", name: "Romania", notes: "ANAF filings, CIM contracts" },
  { flag: "🇧🇷", name: "Brazil", notes: "CLT / PJ contracts, e-Social" },
];

export default function LocalizedCompliancePage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <Link href="/services/remote-operations" className="text-sm text-[var(--accent)] hover:underline mb-4 block">← Back to Operations</Link>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight">
              Localized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Compliance</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              Every country has its own labor laws, tax obligations, and IP regulations. We handle all of it — so you can hire globally without legal risk.
            </p>
          </div>

          {/* Right — Compliance Status Panel */}
          <div className="lg:col-span-5 relative flex items-start justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl border border-slate-200 p-5 shadow-xl bg-white text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 text-xs font-bold text-slate-400">
                <span className="uppercase tracking-wider">Active Contract Audit</span>
                <span className="text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full text-[10px]">6 Countries ✓</span>
              </div>
              <div className="space-y-2.5">
                {countries.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 border border-slate-100 rounded-xl px-3.5 py-2.5 bg-slate-50/50">
                    <span className="text-lg">{c.flag}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-slate-800">{c.name}</p>
                      <p className="text-[9px] text-slate-400 truncate">{c.notes}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[8px] font-bold text-emerald-700">Compliant</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            Hire globally without legal risk
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Our legal team handles every jurisdiction so you can focus on building, not paperwork.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[var(--primary)] font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg"
          >
            Talk to Compliance Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
