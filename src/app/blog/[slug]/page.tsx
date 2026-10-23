import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";
import { getWhatsAppLink } from "@/data/company";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  MessageCircle, 
  ArrowRight
} from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | 3C Ceylon Tours`,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} | 3C Ceylon Tours`,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      images: [{ url: post.image }],
    },
  };
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedArticles = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));

  // JSON-LD Structured Data for BlogPosting
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://3cceylontours.com${post.image}`,
    "datePublished": post.publishedDate,
    "dateModified": post.updatedDate,
    "author": {
      "@type": "Organization",
      "name": post.author.name,
      "url": "https://3cceylontours.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "3C Ceylon Tours",
      "logo": {
        "@type": "ImageObject",
        "url": "https://3cceylontours.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://3cceylontours.com/blog/${post.slug}`
    }
  };

  return (
    <div className="bg-transparent min-h-screen pt-24 pb-24 text-white relative z-10">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-white/50">
          <Link href="/" className="hover:text-[#0BFF01] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#0BFF01] transition-colors">Travel Guide</Link>
          <span>/</span>
          <span className="text-[#0BFF01] font-medium truncate max-w-xs">{post.title}</span>
        </div>
      </div>

      {/* Article Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 mb-10">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0BFF01] text-black shadow-[0_0_15px_rgba(11,255,1,0.4)]">
            {post.category}
          </span>
          <span className="text-xs text-white/60 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-[#0BFF01]" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author & Date Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-white/80">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-[#0023DD] border border-[#0023DD]/50 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,35,221,0.4)]">
              3C
            </div>
            <div>
              <p className="font-bold text-white">{post.author.name}</p>
              <p className="text-[11px] text-white/50">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-white/50">
            <span>Published: {post.publishedDate}</span>
            <span>•</span>
            <span>Updated: {post.updatedDate}</span>
          </div>
        </div>
      </div>

      {/* Hero Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-[340px] sm:h-[460px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 bg-black">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            quality={88}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div className="bg-white/[0.04] backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 space-y-3">
            <h3 className="font-sans text-base sm:text-lg font-extrabold text-[#18E600] uppercase tracking-wider flex items-center space-x-2">
              <Bookmark className="w-4 h-4 text-[#18E600]" />
              <span>In This Travel Guide:</span>
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-white/80">
              {post.tableOfContents.map((toc, i) => (
                <li key={i} className="flex items-start space-x-2 rtl:space-x-reverse">
                  <span className="text-[#18E600] font-bold">•</span>
                  <span>{toc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Narrative Sections */}
        <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 space-y-8 text-white">
          {post.sections.map((sec, i) => (
            <div key={i} className="space-y-3">
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {sec.heading}
              </h2>
              {sec.subheading && (
                <h3 className="font-bold text-base sm:text-lg text-[#18E600]">
                  {sec.subheading}
                </h3>
              )}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                {sec.content}
              </p>
            </div>
          ))}

          {/* Internal Planning Callout Box inside Article */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-black via-[#051138] to-black border border-[#0023DD]/50 space-y-3 shadow-[0_0_30px_rgba(0,35,221,0.2)]">
            <h4 className="font-sans text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Plan Your Trip with 3C Ceylon Tours
            </h4>
            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed">
              Want to incorporate these destinations into your personalized travel itinerary? Our senior travel designers handle all hotels, private chauffeur drivers, train tickets, and wildlife passes.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-[#18E600] hover:bg-[#15c400] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(24,230,0,0.35)]"
              >
                Plan a Custom Itinerary
              </Link>
              <a
                href={getWhatsAppLink(undefined, post.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#18E600] border border-[#18E600]/40 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="pt-8 space-y-6">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Related Travel Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 hover:border-[#18E600]/40 transition-all flex space-x-4 rtl:space-x-reverse"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-black border border-white/10">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      quality={88}
                      sizes="96px"
                      className="object-cover object-center group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#18E600]">
                      {rel.category}
                    </span>
                    <h4 className="font-sans text-sm sm:text-base font-extrabold text-white group-hover:text-[#18E600] line-clamp-2 tracking-tight">
                      {rel.title}
                    </h4>
                    <span className="text-[11px] text-white/50 block">
                      {rel.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
