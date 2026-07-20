"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Briefcase,
  Settings,
  ShieldCheck,
  CreditCard,
  Truck,
} from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
  desc: string;
  icon: React.ComponentType<any>;
}

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Talent Solutions",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Direct Hire Recruiting", href: "/services/direct-hire", desc: "Permanent headhunting & technical search", icon: Briefcase },
      { name: "On-Demand Squads", href: "/services/on-demand-teams", desc: "Timezone-aligned dedicated developer teams", icon: Users },
      { name: "Staff Augmentation", href: "/services/staff-augmentation", desc: "Pre-vetted hourly/monthly tech resources", icon: Settings },
    ]
  },
  {
    name: "Global Operations",
    href: "/services/remote-operations",
    hasDropdown: true,
    dropdownItems: [
      { name: "Payroll & Invoicing", href: "/services/payroll-invoicing", desc: "Automated multi-currency global payroll", icon: CreditCard },
      { name: "Localized Compliance", href: "/services/localized-compliance", desc: "Risk-free contracting & local labor laws", icon: ShieldCheck },
      { name: "Hardware & Logistics", href: "/services/hardware-logistics", desc: "Global IT device delivery & setup", icon: Truck },
    ]
  },
  { name: "How We Vet", href: "/how-we-vet" },
  { name: "Why iStream", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-white/85 backdrop-blur-md border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-[62px] lg:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-200 relative shadow-sm">
              <Image
                src="/logo.jpg"
                alt="iStream Solutions Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-[1.1rem] font-bold text-[var(--foreground)] tracking-tight">
              iStream<span className="text-[var(--accent)]"> Solutions</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-[60px] px-5 py-1.5 shadow-sm">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-150 ${
                      pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href))
                        ? "bg-[var(--primary)] text-white"
                        : "text-slate-600 hover:text-[var(--primary)] hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.hasDropdown && link.dropdownItems && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50"
                        >
                          {link.dropdownItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-start gap-3.5 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/8 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/15 transition-all">
                                  <Icon className="w-5 h-5 text-[var(--primary)]" />
                                </div>
                                <div className="text-left">
                                  <span className="block text-sm font-semibold text-slate-800 group-hover:text-[var(--primary)] transition-colors">
                                    {item.name}
                                  </span>
                                  <span className="block text-[11px] text-slate-400 mt-0.5 leading-snug">
                                    {item.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_4px_20px_rgba(49,152,212,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="max-w-[1400px] mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <Link
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      pathname === link.href
                        ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="pl-4 border-l border-slate-100 ml-4 space-y-0.5">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-[var(--primary)] hover:bg-slate-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3">
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
