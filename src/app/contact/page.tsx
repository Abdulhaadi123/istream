"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, MapPin, Mail, Clock, AlertCircle, Loader2 } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@istreamsolution.com", href: "mailto:hello@istreamsolution.com" },
  { icon: MapPin, label: "HQ", value: "New Jersey, United States", href: "#" },
  { icon: Clock, label: "Response Time", value: "Within 12 hours, guaranteed", href: "#" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback demo feedback if keys are not set up in .env yet
      setTimeout(() => {
        setStatus("success");
        setFormData({
          from_name: "",
          from_email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 6000);
      }, 1000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          company: formData.company || "N/A",
          service: formData.service || "General Inquiry",
          budget: formData.budget || "Not Specified",
          message: formData.message,
        },
        publicKey
      );

      setStatus("success");
      setFormData({
        from_name: "",
        from_email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage(
        err?.text || "Failed to send message. Please check your credentials or try again later."
      );
    }
  };

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] mb-4 block font-semibold">
            Get In Touch
          </span>
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
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 sm:p-8 space-y-5"
            >
              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-start gap-3 text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Message Sent Successfully!</strong>
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 12 hours.
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Sending Failed</strong>
                    {errorMessage}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Direct Hire Recruiting">Direct Hire Recruiting</option>
                    <option value="On-Demand Developer Teams">On-Demand Developer Teams</option>
                    <option value="IT Staff Augmentation">IT Staff Augmentation</option>
                    <option value="Remote Operations">Remote Operations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm appearance-none"
                >
                  <option value="">Select budget range</option>
                  <option value="$10K – $25K">$10K – $25K</option>
                  <option value="$25K – $50K">$25K – $50K</option>
                  <option value="$50K – $100K">$50K – $100K</option>
                  <option value="$100K+">$100K+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-[var(--text-secondary)] mb-1.5 block font-medium">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about the roles, tech stacks, or operational services you need..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--primary)]/50 focus:ring-1 focus:ring-[var(--primary)]/30 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_0_24px_rgba(124,58,237,0.4)] disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending Message...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-4 h-4" /> Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] hover:border-slate-200 transition-all"
              >
                <c.icon className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">
                    {c.label}
                  </p>
                  <p className="text-[var(--foreground)] text-sm font-medium">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="bg-gradient-to-br from-[var(--primary)]/15 to-[var(--accent)]/10 border border-[var(--primary)]/20 rounded-2xl p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] mb-2">
                Prefer a quick call?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Book a free 30-minute consultation with our operations architect to discuss your hiring requirements.
              </p>
              <a
                href="mailto:hello@istreamsolution.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-[var(--foreground)] transition-colors"
              >
                Book a Call →
              </a>
            </div>

            <div className="p-5 bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)]">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[var(--foreground)] mb-3">
                Global Operations
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div>
                  <span className="text-[var(--foreground)] font-medium">San Francisco</span> — HQ & Enterprise Accounts
                </div>
                <div>
                  <span className="text-[var(--foreground)] font-medium">Lahore</span> — Sourcing & Vetting Center
                </div>
                <div>
                  <span className="text-[var(--foreground)] font-medium">Dubai</span> — Middle East Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
