"use client";

import { useState } from "react";
import { Send, CheckCircle, MapPin, Mail, Clock } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@istreamsolution.com", href: "mailto:hello@istreamsolution.com" },
  { icon: MapPin, label: "HQ", value: "New Jersey, United States", href: "#" },
  { icon: Clock, label: "Response Time", value: "Within 12 hours, guaranteed", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4 block">Get In Touch</span>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6">
            Let&apos;s Build a High-Performing Tech Team
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Whether you need to hire permanent engineers, deploy a remote squad, or setup compliant global operations — tell us about your requirements and we&apos;ll respond within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block">Full Name *</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm" />
                </div>
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block">Email Address *</label>
                  <input type="email" required placeholder="john@company.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block">Company</label>
                  <input type="text" placeholder="Your Company" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm" />
                </div>
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm appearance-none">
                    <option value="">Select a service</option>
                    <option value="direct-hire">Direct Hire Recruiting</option>
                    <option value="on-demand">On-Demand Developer Teams</option>
                    <option value="staff-aug">IT Staff Augmentation</option>
                    <option value="remote-ops">Remote Operations</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)] mb-1.5 block">Budget Range</label>
                <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm appearance-none">
                  <option value="">Select budget range</option>
                  <option value="10k-25k">$10K – $25K</option>
                  <option value="25k-50k">$25K – $50K</option>
                  <option value="50k-100k">$50K – $100K</option>
                  <option value="100k+">$100K+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)] mb-1.5 block">Project Details *</label>
                <textarea required rows={5} placeholder="Tell us about the roles, tech stacks, or operational services you need..." className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(26,79,143,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                {submitted ? <><CheckCircle className="w-4 h-4" /> Message Sent Successfully!</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((c) => (
              <a key={c.label} href={c.href} className="flex items-start gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] hover:border-slate-200 transition-all">
                <c.icon className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                <div><p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">{c.label}</p><p className="text-[var(--foreground)] text-sm">{c.value}</p></div>
              </a>
            ))}

            <div className="bg-gradient-to-br from-[var(--primary)]/15 to-[var(--accent)]/10 border border-[var(--primary)]/20 rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] mb-2">Prefer a quick call?</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Book a free 30-minute consultation with our operations architect to discuss your hiring requirements.</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--foreground)] transition-colors">Book a Call →</a>
            </div>

            <div className="p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[var(--foreground)] mb-3">Global Operations</h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div><span className="text-[var(--foreground)] font-medium">San Francisco</span> — HQ & Enterprise Accounts</div>
                <div><span className="text-[var(--foreground)] font-medium">Lahore</span> — Sourcing & Vetting Center</div>
                <div><span className="text-[var(--foreground)] font-medium">Dubai</span> — Middle East Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
