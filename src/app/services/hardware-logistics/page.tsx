import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Laptop, Package, MapPin, Wrench, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Hardware & Logistics — iStream Solution",
  description: "Global IT device procurement, configuration, and delivery to your remote team anywhere in the world. MacBooks, ThinkPads, peripherals — handled end-to-end.",
};

const features = [
  { icon: Laptop, title: "Device Sourcing & Procurement", description: "We source the exact hardware your team needs — MacBook Pro, ThinkPad, Dell XPS, and peripherals — at competitive bulk pricing." },
  { icon: Wrench, title: "Pre-Configuration & MDM Enrollment", description: "Devices arrive ready to use. MDM enrollment, VPN setup, software installation, and security policies applied before shipping." },
  { icon: MapPin, title: "International Delivery", description: "We ship to 30+ countries, handle import duties and customs clearance, and provide door-to-door tracking for every device." },
  { icon: Package, title: "Return & Lifecycle Management", description: "When a contractor offboards, we coordinate device retrieval, data wipe, and redeployment or secure disposal of the hardware." },
];

const devices = [
  { name: "MacBook Pro M4", spec: "16GB RAM / 512GB SSD", status: "In Transit", dest: "Warsaw, PL", color: "bg-blue-50 text-[var(--primary)]" },
  { name: "ThinkPad X1 Carbon", spec: "32GB RAM / 1TB SSD", status: "Delivered", dest: "Bogota, CO", color: "bg-emerald-50 text-emerald-700" },
  { name: "Dell XPS 15", spec: "16GB RAM / 512GB SSD", status: "Configuring", dest: "Lahore, PK", color: "bg-amber-50 text-amber-700" },
  { name: "Mechanical Keyboard + Monitor", spec: "Peripheral Bundle", status: "Ordered", dest: "Bangalore, IN", color: "bg-purple-50 text-purple-700" },
];

export default function HardwareLogisticsPage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <Link href="/services/remote-operations" className="text-sm text-[var(--accent)] hover:underline mb-4 block">← Back to Operations</Link>
            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight">
              Hardware &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Logistics</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              Get the right device to your remote team member, anywhere in the world, pre-configured and ready to work from day one.
            </p>
          </div>

          {/* Right — Device Dispatch Panel */}
          <div className="lg:col-span-5 relative flex items-start justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl border border-slate-200 p-5 shadow-xl bg-white text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 text-xs font-bold text-slate-400">
                <span className="uppercase tracking-wider">Active Device Shipments</span>
                <span className="text-[var(--primary)] bg-[var(--primary)]/10 px-2.5 py-0.5 rounded-full text-[10px]">4 Orders</span>
              </div>
              <div className="space-y-3">
                {devices.map((d) => (
                  <div key={d.name} className="flex items-center gap-3 border border-slate-100 rounded-xl px-3.5 py-3 bg-slate-50/50">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${d.color}`}>
                      <Laptop className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-bold text-slate-800">{d.name}</p>
                      <p className="text-[9px] text-slate-400">{d.spec} · {d.dest}</p>
                    </div>
                    <span className={`text-[8px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                      d.status === "Delivered" ? "bg-emerald-100 text-emerald-700" :
                      d.status === "In Transit" ? "bg-blue-100 text-blue-700" :
                      d.status === "Configuring" ? "bg-amber-100 text-amber-700" :
                      "bg-slate-100 text-slate-600"
                    }`}>{d.status}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[10px] text-slate-400 font-medium">Avg. delivery: 3-5 business days</span>
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
            Equip your global team from day one
          </h2>
          <p className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            We handle device procurement, configuration, customs, and delivery — you just onboard the developer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[var(--primary)] font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg"
          >
            Request Hardware Setup <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </main>
  );
}
