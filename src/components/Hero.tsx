"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ClientLogos = () => (
  <div className="w-full mt-10">
    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-4 font-semibold text-left">
      Trusted by Teams at Global Innovators
    </p>
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80 hover:opacity-100 transition-opacity duration-300">
      {/* Google */}
      <svg className="h-5 w-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      {/* Microsoft */}
      <svg className="h-5 w-auto" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F25022" d="M0 0h11v11H0z"/><path fill="#7FBA00" d="M12 0h11v11H12z"/><path fill="#00A4EF" d="M0 12h11v11H0z"/><path fill="#FFB900" d="M12 12h11v11H12z"/>
      </svg>
      {/* Slack */}
      <svg className="h-5 w-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.523 2.52v6.313A2.528 2.528 0 0 1 8.833 24a2.528 2.528 0 0 1-2.52-2.522v-6.313z"/>
        <path fill="#36C5F0" d="M8.833 5.042a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.833 0a2.528 2.528 0 0 1 2.522 2.522v2.52H8.833zM8.833 6.313a2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.523H2.52A2.528 2.528 0 0 1 0 8.833a2.528 2.528 0 0 1 2.52-2.52h6.313z"/>
        <path fill="#2EB67D" d="M18.956 8.833a2.528 2.528 0 0 1 2.522-2.52A2.528 2.528 0 0 1 24 8.833a2.528 2.528 0 0 1-2.522 2.523h-2.522V8.833zM17.688 8.833a2.528 2.528 0 0 1-2.523 2.523 2.528 2.528 0 0 1-2.52-2.523V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.311z"/>
        <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
      {/* AWS */}
      <svg className="h-5 w-auto" viewBox="0 0 48 30" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF9900" d="M13.8 12.6c0 .5.1.9.2 1.2.2.3.4.6.7.9.1.1.1.2.1.3 0 .1-.1.2-.3.3l-.9.6c-.1.1-.2.1-.3.1-.1 0-.2-.1-.4-.2-.2-.2-.4-.4-.5-.7-.1-.2-.3-.5-.4-.8-1.1 1.3-2.4 1.9-4 1.9-1.1 0-2-.3-2.7-1-.6-.6-1-1.5-1-2.5 0-1.1.4-2 1.2-2.7.8-.7 1.9-1 3.2-1 .4 0 .9 0 1.4.1.5.1 1 .2 1.6.3v-1c0-1-.2-1.7-.6-2.1-.4-.4-1.1-.6-2-.6-.4 0-.9.1-1.4.2-.5.1-1 .3-1.5.5-.2.1-.4.2-.5.2s-.2-.1-.2-.4V5.6c0-.2 0-.3.1-.4.1-.1.2-.2.4-.2.5-.2 1.1-.4 1.7-.5.7-.2 1.4-.2 2.2-.2 1.7 0 2.9.4 3.7 1.2.8.8 1.2 2 1.2 3.6v4.5h.1zm-5.5 2c.4 0 .8-.1 1.3-.2.5-.2.9-.4 1.2-.8.2-.2.3-.5.4-.8.1-.3.1-.7.1-1.1v-.5c-.4-.1-.8-.1-1.2-.2-.4 0-.8-.1-1.2-.1-.9 0-1.5.2-1.9.5-.4.3-.6.8-.6 1.4 0 .6.1 1 .4 1.3.3.3.8.5 1.5.5zm10.5 1.4c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.5l-3.4-11.1c-.1-.3-.2-.5-.2-.6 0-.2.1-.3.3-.3h1.4c.2 0 .4 0 .5.1.1.1.2.3.3.5l2.4 9.5 2.3-9.5c.1-.3.2-.4.3-.5.1-.1.3-.1.5-.1h1.1c.2 0 .4 0 .5.1.1.1.2.3.3.5l2.3 9.6 2.5-9.6c.1-.3.2-.4.3-.5.1-.1.3-.1.5-.1H31c.2 0 .3.1.3.3 0 .1 0 .2-.1.3 0 .1-.1.2-.1.4l-3.5 11.1c-.1.3-.2.5-.3.5-.1.1-.3.1-.5.1h-1.2c-.2 0-.4 0-.5-.1-.1-.1-.2-.3-.3-.5l-2.3-9.3-2.3 9.3c-.1.3-.2.4-.3.5-.1.1-.3.1-.5.1h-1.1zm18.7.3c-.7 0-1.4-.1-2-.3-.6-.2-1.1-.4-1.4-.7-.1-.1-.2-.2-.2-.3 0-.1 0-.2.1-.4l.5-.9c.1-.2.2-.3.4-.3.1 0 .2.1.4.2.4.3.8.5 1.3.6.5.1 1 .2 1.5.2.8 0 1.4-.2 1.8-.5.4-.3.7-.7.7-1.2 0-.3-.1-.6-.3-.9-.2-.2-.6-.4-1.2-.6l-1.8-.6c-.9-.3-1.5-.7-2-1.2-.4-.5-.7-1.1-.7-1.8 0-.5.1-1 .4-1.4.3-.4.6-.8 1-.1.4-.3.9-.6 1.5-.7.5-.2 1.1-.2 1.7-.2.3 0 .6 0 .9.1.3 0 .6.1.9.2.3.1.5.2.8.3.2.1.4.2.5.3.1.1.2.2.2.3 0 .1.1.2.1.4v.8c0 .2-.1.3-.3.3-.1 0-.3-.1-.5-.2-.8-.4-1.7-.6-2.6-.6-.7 0-1.2.1-1.6.4-.4.3-.5.6-.5 1.1 0 .3.1.6.3.8.2.2.6.5 1.3.7l1.7.6c.9.3 1.5.7 1.9 1.2.4.5.6 1.1.6 1.7 0 .5-.1 1-.4 1.5-.3.4-.6.8-1.1 1.1-.4.3-1 .5-1.6.7-.6 0-1.2.1-1.8.1z"/>
        <path fill="#FF9900" d="M38.4 22.4c-4.7 3.4-11.5 5.2-17.3 5.2-8.2 0-15.5-3-21.1-8-.4-.4 0-.9.5-.6 6 3.5 13.4 5.6 21.1 5.6 5.2 0 10.9-1.1 16.1-3.3.8-.3 1.4.5.7 1.1z"/>
        <path fill="#FF9900" d="M40.3 20.2c-.6-.7-3.7-.4-5.2-.2-.4.1-.5-.3-.1-.6 2.5-1.8 6.7-1.3 7.1-.7.5.6-.1 4.8-2.5 6.8-.4.3-.7.1-.5-.2.5-1.4 1.7-4.4 1.2-5.1z"/>
      </svg>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[var(--background)]">
      {/* Background radial overlays */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 45% at 20% 15%, rgba(49, 152, 212, 0.08) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 85% 75%, rgba(26, 79, 143, 0.06) 0%, transparent 60%)
          `,
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Sourced, Vetted, Managed Banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-[var(--primary)]/8 border border-[var(--primary)]/15 rounded-full px-4 py-1.5 w-fit mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[var(--primary)]">
                Recruitment + Global Payroll + Compliance
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5 text-[var(--foreground)]"
            >
              Source Elite Engineers.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Automate Remote Ops.
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-xl"
            >
              iStream Solutions blends high-end IT headhunting with a comprehensive workforce platform. We hire top-tier developers, distribute localized contracts, deliver IT hardware, and manage international payroll compliance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-[0_8px_25px_rgba(49,152,212,0.35)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Hire Top Talent
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services/remote-operations"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[var(--primary)] border-2 border-[var(--primary)]/20 hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all duration-300 w-full sm:w-auto"
              >
                Explore Operations
              </Link>
            </motion.div>

            {/* Trust Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="border-t border-slate-200 pt-6"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-600">4.9/5 Average client review</span>
              </div>
              <span className="text-xs text-[var(--text-secondary)]">Over 800+ vetted engineers matching timezones deployed globally.</span>
            </motion.div>

            <ClientLogos />
          </div>

          {/* Right Column - Realistic Hero Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 w-full relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group">
              <Image
                src="/hero-artwork.png"
                alt="iStream Solution – Global remote tech team on a video call with live dashboards"
                width={900}
                height={600}
                priority
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e30]/30 via-transparent to-transparent" />

              {/* Live badge bottom-left */}
              <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl px-3.5 py-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-800">800+ Engineers Deployed Globally</span>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-5 right-5 z-10 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[11px] font-bold text-slate-700">48h Average Deployment</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
