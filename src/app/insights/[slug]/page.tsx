import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PostCTA from "@/components/PostCTA";
import { getAllPosts, getPost } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const canonical = `https://caldrik.co/insights/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: "article",
      publishedTime: post.date,
      siteName: "Caldrik",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const canonical = `https://caldrik.co/insights/${slug}`;
  const absoluteImage = post.image.startsWith("http") ? post.image : `https://caldrik.co${post.image}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: absoluteImage,
      url: canonical,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "Caldrik", url: "https://caldrik.co" },
      publisher: {
        "@type": "Organization",
        name: "Caldrik",
        logo: { "@type": "ImageObject", url: "https://caldrik.co/logo-white.svg" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://caldrik.co" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://caldrik.co/insights" },
        { "@type": "ListItem", position: 3, name: post.title, item: canonical },
      ],
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-[#080f19]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }} />
      <Navigation />

      {/* Cover image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080f19]" />
      </div>

      <article className="mx-auto w-full max-w-2xl px-6 pb-24 -mt-16 relative z-10">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center rounded-full bg-[#5170ff]/15 border border-[#5170ff]/30 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-[#5170ff]">
            {post.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-white/[0.06] border border-white/[0.10] px-3 py-1 text-[11px] font-medium text-gray-300">
            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-snug mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-gray-400 leading-7 mb-10 border-b border-white/[0.08] pb-10">
          {post.excerpt}
        </p>

        {/* MDX content */}
        <div className="prose prose-invert prose-p:text-gray-400 prose-p:leading-7 prose-headings:text-white prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-strong:text-white prose-a:text-[#5170ff] prose-a:no-underline hover:prose-a:underline prose-li:text-gray-400 prose-li:leading-7 max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pb-24">
        <PostCTA
          category={post.category}
          ctaHeadline={post.ctaHeadline}
          ctaDescription={post.ctaDescription}
        />
      </div>

      <Footer />
    </div>
  );
}
