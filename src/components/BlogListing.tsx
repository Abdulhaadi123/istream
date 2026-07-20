"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";

interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  accent: string;
  image: string;
}

interface BlogListingProps {
  posts: Post[];
  categories: string[];
}

export default function BlogListing({ posts, categories }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  // The first post in the filtered list is the featured one, the rest go to the grid
  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <div>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              selectedCategory === cat
                ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                : "border-slate-200 text-[var(--text-secondary)] hover:border-[var(--primary)]/40 hover:text-[var(--primary)] bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="h-px bg-gradient-to-r from-[var(--primary)]/40 via-slate-200 to-transparent mb-16" />

      {/* ── Featured Post ── */}
      {featured ? (
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-6 block font-semibold">
            Featured
          </span>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-0 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden hover:border-[var(--primary)]/30 hover:shadow-xl transition-all duration-300"
          >
            {/* Left: image */}
            <div className="relative min-h-[280px] lg:min-h-[380px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Category badge bottom-left */}
              <div className="absolute bottom-6 left-6">
                <span
                  className="inline-flex text-[10px] font-bold uppercase px-3 py-1.5 rounded-full"
                  style={{ background: featured.accent + "cc", color: "#fff" }}
                >
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Right: content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>{featured.readTime}</span>
                <span className="text-slate-300">·</span>
                <span>{featured.date}</span>
              </div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-extrabold text-[var(--foreground)] tracking-tight leading-tight mb-4 group-hover:text-[var(--primary)] transition-colors">
                {featured.title}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          No articles found in this category.
        </div>
      )}

      {/* ── Post Grid ── */}
      {rest.length > 0 && (
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-8 block font-semibold">
            Latest Articles
          </span>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden hover:border-[var(--primary)]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span
                    className="absolute bottom-3 left-3 inline-flex text-[10px] font-bold uppercase px-2.5 py-1 rounded-full"
                    style={{ background: post.accent + "cc", color: "#fff" }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-[var(--foreground)] tracking-tight leading-snug mb-3 group-hover:text-[var(--primary)] transition-colors flex-1">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[var(--card-border)]">
                    <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                      <span className="text-slate-300">·</span>
                      <span>{post.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
