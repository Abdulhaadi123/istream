import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

const posts: Record<string, {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  accent: string;
  image: string;
  content: { heading?: string; body: string }[];
}> = {
  "how-to-hire-senior-engineers-remotely": {
    slug: "how-to-hire-senior-engineers-remotely",
    category: "Hiring Guides",
    title: "How to Hire Senior Engineers Remotely Without Slowing Down Your Sprint",
    excerpt: "Sourcing senior engineers across time zones requires a fundamentally different approach than local hiring.",
    readTime: "6 min read",
    date: "Jul 15, 2026",
    accent: "#4f46e5",
    image: "/blog-remote-hiring.jpg",
    content: [
      {
        body: "Hiring senior engineers remotely is one of the hardest and most high-leverage things an engineering org can do. A single bad hire at the senior level costs 6–18 months of lost velocity. Get it right, and you compound every junior engineer around them.",
      },
      {
        heading: "Why Traditional Pipelines Break at Senior Level",
        body: "Most companies try to apply the same process they use for mid-level roles to senior searches — job boards, a recruiter screen, a take-home test, and a final interview. This fails for senior talent because senior engineers aren't actively looking. They're heads-down in production. The best ones aren't on LinkedIn refreshing job alerts.",
      },
      {
        heading: "The 4-Step Pipeline We Use at iStream",
        body: "Step 1 — Signal Mapping: Before we post a single req, we identify where your ideal candidate is already operating. GitHub contributions, conference talks, specific OSS projects, and niche communities. Step 2 — Direct Sourcing: We reach out directly with a personalized message that references their actual work, not a generic template. Response rates jump 4x when outreach is specific. Step 3 — Async Assessment: Senior candidates don't have time for 5-round interview marathons. We use a focused async technical exercise — 90 minutes maximum — designed around real production problems from your stack. Step 4 — Overlap-Aware Scheduling: We pre-filter for timezone overlap with your core team. A 3-hour overlap window is the minimum for a senior engineer to be effective in daily standups and async review cycles.",
      },
      {
        heading: "The Metric That Matters: Time-to-Merge",
        body: "Most companies track time-to-hire. We track time-to-first-meaningful-merge — how quickly a placed engineer ships their first real production change. For our top placements, this averages 8 days from start date. That's the real signal of a successful remote senior hire.",
      },
    ],
  },
  "staff-augmentation-vs-direct-hire": {
    slug: "staff-augmentation-vs-direct-hire",
    category: "Talent Strategy",
    title: "Staff Augmentation vs. Direct Hire: Which Model Fits Your Growth Stage?",
    excerpt: "Both engagement models solve different problems. Here's a practical framework for CTOs and VP Engs.",
    readTime: "5 min read",
    date: "Jul 8, 2026",
    accent: "#0ea5e9",
    image: "/blog-staff-aug.jpg",
    content: [
      {
        body: "The staff augmentation vs. direct hire debate is one of the most common conversations we have with engineering leaders. The answer is almost always: it depends on your stage, your runway, and what problem you're actually trying to solve.",
      },
      {
        heading: "When Staff Augmentation Wins",
        body: "Staff augmentation is the right model when you have a defined scope of work with a finite timeline, when you need to scale quickly without long-term headcount commitments, or when you're bridging a specific skills gap on an existing team. It's also ideal for early-stage companies that can't yet offer competitive equity packages to attract full-time senior talent.",
      },
      {
        heading: "When Direct Hire is the Right Call",
        body: "Direct hire makes sense when you're building a core team that will own a product long-term, when culture fit and institutional knowledge are critical, and when you have the budget to compete for full-time talent. Senior roles in product engineering, architecture, and team leads almost always call for direct placement.",
      },
      {
        heading: "The Hybrid Approach",
        body: "The most successful engineering orgs we work with use a hybrid model: a stable core of direct hires who own the architecture and product direction, augmented by a flexible ring of contract resources who scale up for specific sprint cycles or project phases. This gives you speed without sacrificing quality at the center.",
      },
    ],
  },
  "vetting-process-technical-talent": {
    slug: "vetting-process-technical-talent",
    category: "Vetting & Quality",
    title: "Inside iStream's 4-Stage Technical Vetting Process",
    excerpt: "We reject over 90% of applicants. Here's exactly what our vetting pipeline looks like.",
    readTime: "8 min read",
    date: "Jun 30, 2026",
    accent: "#10b981",
    image: "/blog-vetting.jpg",
    content: [
      {
        body: "We receive hundreds of applications for every role we fill. Our placement retention rate — the percentage of engineers still active with a client after 12 months — is 97%. That number is not an accident. It's the direct result of a vetting process that most firms consider too expensive to run.",
      },
      {
        heading: "Stage 1 — Portfolio & Background Review (Pass Rate: 30%)",
        body: "The first filter is a structured review of work history, GitHub activity, and prior project complexity. We look for evidence of real production ownership — not just tutorial projects or agency work on thin specs. Candidates who can't demonstrate they've shipped something real to real users don't advance.",
      },
      {
        heading: "Stage 2 — Technical Screen (Pass Rate: 40% of Stage 1)",
        body: "A 45-minute live technical call with one of our senior engineers. We don't use LeetCode-style algorithm puzzles. Instead, we run through system design problems scaled to the candidate's claimed seniority, and we ask them to walk through a complex bug they've personally debugged in production.",
      },
      {
        heading: "Stage 3 — Async Coding Assessment (Pass Rate: 60% of Stage 2)",
        body: "A focused 90-minute async exercise tied to a real-world problem type relevant to the client engagement. We evaluate code quality, documentation habits, test coverage decisions, and — critically — how the candidate communicates trade-offs in their solution write-up.",
      },
      {
        heading: "Stage 4 — Culture & Collaboration Fit (Pass Rate: 75% of Stage 3)",
        body: "The final stage assesses remote work maturity: async communication habits, documentation practices, self-management, and timezone overlap viability. We've seen technically brilliant engineers fail this stage because they're wired for office environments and struggle in distributed settings.",
      },
    ],
  },
  "global-payroll-remote-teams": {
    slug: "global-payroll-remote-teams",
    category: "Operations",
    title: "Managing Global Payroll for Remote Engineering Teams: A Practical Guide",
    excerpt: "Multi-currency payroll, compliance across jurisdictions, and contractor vs. employee classification.",
    readTime: "7 min read",
    date: "Jun 22, 2026",
    accent: "#f59e0b",
    image: "/blog-payroll.jpg",
    content: [
      {
        body: "If you're running a distributed engineering team across multiple countries, payroll is the operational layer that breaks most companies. Get it wrong, and you're exposed to tax liabilities, employment law violations, and contractor misclassification penalties that can dwarf the cost of your entire engineering budget.",
      },
      {
        heading: "The Contractor vs. Employee Classification Risk",
        body: "Most early-stage companies pay international engineers as independent contractors to avoid the complexity of local employment law. This works — until it doesn't. Countries like Germany, France, and Brazil have strict tests for when a contractor relationship qualifies as employment. If your remote engineers work exclusively for you on an ongoing basis, you're likely misclassifying them.",
      },
      {
        heading: "Multi-Currency Payroll Without the Overhead",
        body: "Running payroll across 10 currencies manually is a full-time finance job. The operational model we recommend: consolidate to a single monthly invoice per region, denominated in the local currency, with FX locked at the start of each contract period. This gives your finance team predictability and your engineers certainty.",
      },
      {
        heading: "How iStream Handles This for Clients",
        body: "We operate as the employer of record or agent of record depending on jurisdiction. We handle contract generation, KYC verification, tax documentation, and monthly disbursements. Your team gets one consolidated invoice. Your engineers get paid on time, in their currency, with compliant contracts.",
      },
    ],
  },
  "timezone-aligned-teams-productivity": {
    slug: "timezone-aligned-teams-productivity",
    category: "Remote Operations",
    title: "Why Timezone Alignment is the Hidden Driver of Remote Team Productivity",
    excerpt: "Async-first works — until it doesn't. Design for meaningful overlap windows.",
    readTime: "5 min read",
    date: "Jun 14, 2026",
    accent: "#ec4899",
    image: "/blog-timezone.jpg",
    content: [
      {
        body: "The remote work movement overcorrected. In the rush to prove that distributed teams could work, the community went all-in on async-first principles and began treating synchronous communication as a failure mode. The result: distributed teams that are technically async-enabled but operationally broken.",
      },
      {
        heading: "The 3-Hour Overlap Minimum",
        body: "Our data across 300+ remote placements shows that teams with fewer than 3 hours of real-time overlap per day see measurably slower PR review cycles, more context-switching due to async blocking, and lower engineer satisfaction scores. Three hours isn't much — but it's the floor below which distributed collaboration degrades.",
      },
      {
        heading: "Designing Your Overlap Architecture",
        body: "For US-based engineering orgs, we recommend sourcing in the EST±3 or PST±4 bands. For European companies, Eastern European and Central Asian talent pools offer excellent overlap with CET core hours at a significant cost advantage. The key is being deliberate: define your required overlap window before you start sourcing, not after.",
      },
      {
        heading: "Async Is a Feature, Not a Replacement for Sync",
        body: "The highest-performing distributed teams we've observed treat async documentation as the foundation and synchronous time as the accelerant. They write everything down — decisions, context, trade-offs — and use their overlap window for the high-bandwidth conversations that async genuinely can't support: architecture reviews, incident retrospectives, career conversations.",
      },
    ],
  },
  "it-recruitment-red-flags": {
    slug: "it-recruitment-red-flags",
    category: "Hiring Guides",
    title: "7 Red Flags to Watch for When Evaluating an IT Recruitment Partner",
    excerpt: "Not all staffing agencies deliver the same quality. Here are the patterns that separate great from mediocre.",
    readTime: "4 min read",
    date: "Jun 5, 2026",
    accent: "#ef4444",
    image: "/blog-recruitment.jpg",
    content: [
      {
        body: "After placing 800+ engineers globally, we've seen what good recruitment looks like — and what it doesn't. If you're evaluating a staffing partner for your engineering org, here are the signals that should give you pause.",
      },
      {
        heading: "1. They Can't Explain Their Vetting Process",
        body: "If a recruiter can't tell you exactly what technical validation they do beyond a resume review, your candidates aren't being vetted — they're being forwarded. Ask for a detailed breakdown of their technical screen and assessment methodology.",
      },
      {
        heading: "2. They Measure Success by Volume, Not Retention",
        body: "Agencies optimizing for placement volume have misaligned incentives. Ask them for their 12-month retention rate. Industry average hovers around 70-75%. Anything below that is a red flag.",
      },
      {
        heading: "3. They Don't Ask About Your Stack",
        body: "A recruiter who doesn't ask about your specific tech stack, team structure, and delivery process in the first conversation isn't sourcing for fit — they're sending CVs and hoping something sticks.",
      },
      {
        heading: "4. No Replacement Guarantee",
        body: "Reputable agencies stand behind their placements with a replacement guarantee — typically 30 to 90 days. If a partner won't offer this, they're not confident in their own vetting.",
      },
      {
        heading: "5. They Can't Provide References from Similar Companies",
        body: "Ask for references from clients at a similar stage, with similar stack requirements, in a similar geography. Generic testimonials mean nothing. Specific, verifiable references from relevant clients are the standard.",
      },
      {
        heading: "6. Time-to-First-Submission is Over 5 Days",
        body: "Senior talent moves fast. If your recruitment partner is taking more than 5 business days to get you the first qualified profiles, their sourcing pipeline isn't built for speed.",
      },
      {
        heading: "7. They Can't Handle Compliance",
        body: "If you're hiring internationally and your recruitment partner can't advise on contractor vs. employment classification, tax implications, or contract structure — they're not equipped for global talent operations.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — iStream Solution Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const otherPosts = Object.values(posts).filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute top-0 left-[-15%] w-[700px] h-[700px] bg-[var(--primary)]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          All Articles
        </Link>

        <div className="grid lg:grid-cols-[1fr_320px] gap-14">

          {/* ── Main Article ── */}
          <article>
            {/* Header */}
            <div className="mb-8">
              <span
                className="inline-flex text-[11px] font-bold uppercase px-3 py-1.5 rounded-full mb-4"
                style={{ background: post.accent + "18", color: post.accent, border: `1px solid ${post.accent}25` }}
              >
                {post.category}
              </span>
              <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight mb-5">
                {post.title}
              </h1>
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
                <span className="text-slate-300">·</span>
                <span>{post.date}</span>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative h-[280px] sm:h-[380px] rounded-2xl overflow-hidden mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              {post.content.map((block, i) => (
                <div key={i} className="mb-8">
                  {block.heading && (
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-3 tracking-tight">
                      {block.heading}
                    </h2>
                  )}
                  <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-[var(--primary)]/8 to-[var(--accent)]/5">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-[var(--foreground)] mb-2">
                Ready to build your remote engineering team?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                Talk to our team about your hiring needs. First qualified profiles delivered within 5 business days.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* ── Sidebar: More Articles ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-bold text-[var(--foreground)] uppercase tracking-wider mb-5">
                More Articles
              </h4>
              <div className="space-y-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex gap-3 p-3 rounded-xl border border-[var(--card-border)] hover:border-[var(--primary)]/30 hover:bg-slate-50 transition-all"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <span
                        className="text-[9px] font-bold uppercase"
                        style={{ color: p.accent }}
                      >
                        {p.category}
                      </span>
                      <p className="text-xs font-semibold text-[var(--foreground)] leading-snug mt-0.5 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        {p.title}
                      </p>
                      <p className="text-[10px] text-[var(--text-secondary)] mt-1">{p.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
