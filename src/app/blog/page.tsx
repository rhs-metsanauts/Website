import Image from "next/image";
import { ReactNode } from "react";
import FadeIn from "@/components/FadeIn";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import InstagramEmbed from "@/components/InstagramEmbed";

// ─── Content block types ────────────────────────────────────────────────────
type TextBlock      = { type: "text";      body: ReactNode };
type ImageBlock     = { type: "image";     src?: string; alt: string; caption?: string };
type InstagramBlock = { type: "instagram"; permalink: string };
type HighlightBlock = { type: "highlight"; text: ReactNode };
type HeadingBlock   = { type: "heading";   text: string };
type ContentBlock   = TextBlock | ImageBlock | InstagramBlock | HighlightBlock | HeadingBlock;

type Post = {
  id: string;
  date: string;
  tag: string;
  title: string;
  author: string;
  content: ContentBlock[];
};

// ─── Posts ───────────────────────────────────────────────────────────────────
// Add new entries to the TOP of this array so latest posts appear first.
// To add an Instagram post, use: { type: "instagram", permalink: "https://www.instagram.com/p/POST_ID/" }
// To add a real image, set src: "/images/your-photo.jpg" — otherwise it shows a placeholder.
const posts: Post[] = [
  {
    id: "4",
    date: "Mar 31, 2026",
    tag: "Team Update",
    title: "Big week for the team: TV debut, new parts, and a growing digital home",
    author: "METSAnauts",
    content: [
      {
        type: "text",
        body: "Things are moving fast around here, and we couldn't be more excited to share what's been happening.",
      },
      {
        type: "heading",
        text: "We were on TV!",
      },
      {
        type: "text",
        body: (
          <>
            Last week, we had an incredible opportunity to bring our rover in front of a wider
            audience, appearing on{" "}
            <a href="https://www.wfaa.com/article/entertainment/events/america-250/north-texas-students-land-nasa-opportunity-with-mark-cuban-boost/287-da60f3d7-d0f9-4d3e-9cf0-901892e0d88e" target="_blank" rel="noopener noreferrer" className="text-blue font-semibold underline underline-offset-2 hover:text-blue/80 transition-colors">WFAA</a> to showcase what we&apos;ve
            been building. It was a proud moment for the whole team to step into the spotlight and
            share our work with the community.
          </>
        ),
      },
      {
        type: "heading",
        text: "The fleet is growing.",
      },
      {
        type: "text",
        body: "We've been receiving parts for two new rovers. Watching the components arrive piece by piece is always an exciting reminder of how much goes into these builds. Assembly is on the horizon, and we can't wait to show you what comes together.",
      },
      {
        type: "heading",
        text: "This website is taking shape.",
      },
      {
        type: "text",
        body: "This week the team has been hard at work putting the finishing touches on this very website, our new home base for tracking progress, sharing updates, and keeping everyone in the loop. Consider this post one of many more to come as we continue to document our journey.",
      },
    ],
  },
];

// ─── Block renderer ──────────────────────────────────────────────────────────
function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "text":
      return (
        <p key={idx} className="text-text-muted leading-relaxed text-[1.04rem]">
          {block.body}
        </p>
      );

    case "heading":
      return (
        <h3 key={idx} className="text-xl font-bold text-text-bright tracking-tight pt-2">
          {block.text}
        </h3>
      );

    case "highlight":
      return (
        <blockquote
          key={idx}
          className="border-l-2 border-blue/50 pl-5 py-0.5 text-blue/90 text-[1.04rem] leading-relaxed italic"
        >
          {block.text}
        </blockquote>
      );

    case "image":
      return (
        <figure key={idx}>
          {block.src ? (
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>
          ) : (
            <ImagePlaceholder label={block.alt} aspectRatio="aspect-video" className="rounded-xl" />
          )}
          {block.caption && (
            <figcaption className="mt-2.5 text-xs text-text-muted/60 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "instagram":
      return <InstagramEmbed key={idx} permalink={block.permalink} />;
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  return (
    <div className="py-20 sm:py-28 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-blue/30" />
            <span className="tech-label">Mission Log</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-bright mb-3 tracking-tight">
            Mission Log
          </h1>
          <p className="text-text-muted mb-4 text-base max-w-xl">
            Behind-the-scenes updates on our build process, breakthroughs, and the road to FDR.
          </p>
          <div className="flex flex-wrap gap-3 mb-14">
            <span className="tech-label !text-[10px] px-2.5 py-1 rounded border border-blue/20 bg-blue-muted text-blue">
              {posts.length} {posts.length === 1 ? "Entry" : "Entries"}
            </span>
            <span className="tech-label !text-[10px] px-2.5 py-1 rounded border border-blue/20 bg-blue-muted text-blue">
              Latest: {posts[0]?.date}
            </span>
          </div>
        </FadeIn>

        {/* Feed */}
        <div className="max-w-3xl">
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 80}>
              <article className="mb-12 pb-12 border-b border-border last:border-0 last:mb-0 last:pb-0">

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="tech-label !text-[10px] px-2.5 py-1 rounded border border-blue/20 bg-blue-muted text-blue">
                    {post.tag}
                  </span>
                  <span
                    className="text-xs text-text-muted/60"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {post.date}
                  </span>
                  <span className="text-xs text-text-muted/40">·</span>
                  <span className="text-xs text-text-muted/60">{post.author}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-text-bright mb-5 tracking-tight leading-snug">
                  {post.title}
                </h2>

                {/* Content blocks */}
                <div className="space-y-5">
                  {post.content.map((block, j) => renderBlock(block, j))}
                </div>

              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
}
