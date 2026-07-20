import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, CheckCircle2, Globe, Banknote, BarChart3, RefreshCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Payroll & Invoicing — iStream Solution",
  description: "Automated multi-currency global payroll. One invoice, local disbursements in 30+ countries. We handle FX, tax filings, and on-time payment to your entire distributed team.",
};

const features = [
  { icon: Globe, title: "Multi-Currency Disbursement", description: "Pay contractors and employees in their local currency — USD, EUR, PLN, COP, INR, and 20+ more. No FX headaches for your team." },
  { icon: Banknote, title: "Single Consolidated Invoice", description: "You receive one clean monthly invoice covering your entire distributed workforce, regardless of location or contract type." },
  { icon: BarChart3, title: "Automated Tax Filings", description: "We calculate and file local tax obligations on behalf of your contractors, keeping you fully compliant with regional regulations." },
  { icon: RefreshCcw, title: "On-Time Every Cycle", description: "Payments are disbursed on a fixed schedule with real-time status tracking. Late payments are eliminated from your operations." },
];

const steps = [
  { step: "01", title: "Submit Headcount", desc: "Share your team list, rates, and hours for the cycle." },
  { step: "02", title: "Single Invoice Issued", desc: "We issue one invoice to your finance team in your preferred currency." },
  { step: "03", title: "Local Disbursement", desc: "Funds are disbursed to each contractor/employee in their local currency." },
  { step: "04", title: "Reports & Ledger", desc: "You receive a full payment ledger, receipts, and tax summaries." },
];

export default function PayrollInvoicingPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <Link href="/services/remote-operations" className="text-sm text-[var(--accent)] hover:underline mb-4 block">← Back to Operations</Link>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight">
              Payroll &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Invoicing</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              One invoice. Local disbursements to your entire team in 30+ countries. We handle FX conversion, tax filings, and payment tracking so your finance team doesn&apos;t have to.
            </p>
          </div>

          {/* Right — Payroll Ledger Visual */}
          <div className="lg:col-span-5 relative flex items-start justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl border border-slate-200 p-5 shadow-xl bg-white text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 text-xs font-bold text-slate-400">
                <span className="uppercase tracking-wider">July 2025 — Payroll Run</span>
                <span className="text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full text-[10px]">All Settled ✓</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Warsaw Hub (4 devs)", currency: "PLN", amount: "72,400.00", flag: "🇵🇱" },
                  { name: "Bogota Hub (3 devs)", currency: "COP", amount: "28.5M", flag: "🇨🇴" },
                  { name: "Lahore Hub (2 devs)", currency: "PKR", amount: "890,000", flag: "🇵🇰" },
                  { name: "Bangalore Hub (1 dev)", currency: "INR", amount: "145,000", flag: "🇮🇳" },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between border border-slate-100 rounded-xl px-3.5 py-2.5 bg-slate-50/50">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{row.flag}</span>
                      <div>
                        <p className="text-[11px] font-bold text-slate-800">{row.name}</p>
                        <p className="text-[9px] text-slate-400">{row.currency} disbursement</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-extrabold text-slate-700">{row.currency} {row.amount}</p>
                      <p className="text-[8px] text-emerald-600 font-bold">Sent</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 mt-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Your Invoice Total</span>
                  <span className="text-sm font-extrabold text-[var(--primary)]">$18,400.00 USD</span>
                </div>
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

        {/* Process */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.step} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-5 text-left">
                <span className="text-3xl font-extrabold text-[var(--primary)]/20 font-[family-name:var(--font-space-grotesk)]">{s.step}</span>
                <h4 className="text-sm font-bold text-[var(--foreground)] mt-2 mb-1">{s.title}</h4>
                <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to simplify your global payroll?
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            One intake call is all it takes. We&apos;ll have your team&apos;s first payroll cycle running within 5 business days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[var(--primary)] font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
