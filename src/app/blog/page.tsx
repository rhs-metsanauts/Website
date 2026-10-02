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
type YouTubeBlock   = { type: "youtube";   videoId: string; title: string; caption?: string };
type ContentBlock   = TextBlock | ImageBlock | InstagramBlock | HighlightBlock | HeadingBlock | YouTubeBlock;

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
// To add a YouTube video, use: { type: "youtube", videoId: "VIDEO_ID", title: "Video title" }
// To add an Instagram post, use: { type: "instagram", permalink: "https://www.instagram.com/p/POST_ID/" }
// To add a real image, set src: "/images/your-photo.jpg" — otherwise it shows a placeholder.
const posts: Post[] = [
  {
    id: "5",
    date: "May 20, 2026",
    tag: "Team Update",
    title: "We presented at Johnson Space Center — and the room was full of astronauts.",
    author: "METSAnauts",
    content: [
      {
        type: "text",
        body: "Things have been moving at full speed, and this one deserves its own post.",
      },
      {
        type: "heading",
        text: "Houston, we have a presentation.",
      },
      {
        type: "text",
        body: "Last week, the METSAnauts traveled to NASA's Johnson Space Center in Houston to present our project to some of the brightest minds in space exploration. We walked engineers, executives, and current and training astronauts through everything we've built — the rover, the systems behind it, and the mission that drives us. Hearing their feedback and fielding their questions in that room was something we won't forget.",
      },
      {
        type: "heading",
        text: "The interviews.",
      },
      {
        type: "text",
        body: "We were pulled aside throughout the day for one-on-one conversations with NASA engineers and leadership. Each one pushed us to think deeper about our work — from the technical details of our rover design to the bigger picture of what analog missions mean for the future of space exploration.",
      },
      {
        type: "heading",
        text: "We made the news — statewide.",
      },
      {
        type: "text",
        body: (
          <>
            Before heading to Houston, we were featured on{" "}
            <a
              href="https://www.nbcdfw.com/news/local/carter-in-the-classroom/ranchview-high-school-students-nasa-design-space-travel/4015090/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue font-semibold underline underline-offset-2 hover:text-blue/80 transition-colors"
            >
              NBC 5 DFW
            </a>{" "}
            as part of their <em>Carter in the Classroom</em> segment — putting our team on the local Dallas-Fort Worth radar. Then the Houston trip picked up state-wide coverage, taking us from a locally covered team to one recognized across the state of Texas. It&apos;s a proud moment for the whole team and our mentors.
          </>
        ),
      },
      {
        type: "heading",
        text: "What's next.",
      },
      {
        type: "text",
        body: "We're proud to share that we've been selected to present exclusively to the MEA — the Martian Exploration Analog team — in the coming weeks. This is a significant opportunity for us, and we're heads-down preparing to make the most of it.",
      },
      {
        type: "text",
        body: "More updates soon. Ad astra.\n\n— METSAnauts",
      },
    ],
  },
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
  {
    id: "mark-cuban-grant",
    date: "Mar 12, 2026",
    tag: "Funding",
    title: "We emailed Mark Cuban. Two hours later, we had $5,000.",
    author: "METSAnauts",
    content: [
      {
        type: "text",
        body: "We'll be honest: building a fleet of rovers as a high school team is expensive. Every prototype needs sensors, metal frames, cameras, and batteries, and every trip to show our work costs money too. We had big plans and a small budget. So we decided to take a shot. We wrote an email straight to Mark Cuban, told him what we were building, and asked if he'd help.",
      },
      {
        type: "highlight",
        text: "We figured we might never hear back. About two hours later, we had an answer: Mark Cuban Companies would back the METSAnauts with $5,000.",
      },
      {
        type: "image",
        src: "/images/cuban/team-with-check.jpg",
        alt: "The METSAnauts team holding the check from Mark Cuban Companies, with a rover and robotic claw",
        caption: "The METSAnauts with the check, a rover, and our sample-collection claw. Photo: Carrollton-Farmers Branch ISD",
      },
      {
        type: "heading",
        text: "Check, please.",
      },
      {
        type: "text",
        body: "Getting the email was one thing. Then representatives from Mark Cuban Companies came to Ranchview High School to hand us the check in person, with our rover and claw on the table in front of us. Standing up there as five students who started with one cold email, it finally felt real. It's a moment none of us will forget.",
      },
      {
        type: "image",
        src: "/images/cuban/check-presentation.jpg",
        alt: "The METSAnauts team with teachers, district staff, and guests at the check presentation",
        caption: "The team with teachers, staff, and guests at the check presentation. Photo: Carrollton-Farmers Branch ISD",
      },
      {
        type: "heading",
        text: "Where the money goes.",
      },
      {
        type: "text",
        body: "Every dollar goes back into the project we care about: an AI-powered rover swarm for NASA's Human Exploration Research Analog (HERA) and future Mars missions. For us, that means parts for more rover prototypes, materials to build out our BothScape lunar and Martian terrain, and the travel it takes to bring our work to NASA. Things we used to put on a wish list are now on our build list.",
      },
      {
        type: "heading",
        text: "In the news.",
      },
      {
        type: "text",
        body: (
          <>
            We never expected anyone outside our school to notice. Our story was shared by{" "}
            <a href="https://www.cfbisd.edu/about-us/news/story/~board/all-district-news/post/ranchview-students-land-5000-from-mark-cuban-to-power-nasa-robotics-project" target="_blank" rel="noopener noreferrer" className="text-blue font-semibold underline underline-offset-2 hover:text-blue/80 transition-colors">Carrollton-Farmers Branch ISD</a>{" "}
            and covered by{" "}
            <a href="https://www.wfaa.com/article/entertainment/events/america-250/north-texas-students-land-nasa-opportunity-with-mark-cuban-boost/287-da60f3d7-d0f9-4d3e-9cf0-901892e0d88e" target="_blank" rel="noopener noreferrer" className="text-blue font-semibold underline underline-offset-2 hover:text-blue/80 transition-colors">WFAA</a>.
          </>
        ),
      },
      {
        type: "youtube",
        videoId: "-kX58EAIgJM",
        title: "Red, White & You: Mark Cuban helping Irving HS students shape the future of space exploration",
        caption: "Our interview with WFAA: \"Red, White & You: Mark Cuban helping Irving HS students shape the future of space exploration.\"",
      },
      {
        type: "text",
        body: "To Mark Cuban and Mark Cuban Companies: thank you for taking a chance on five students and an email. And to our CTE engineering teacher, Mr. David Berry: thank you for pushing us, backing us, and being there every step of the way. We're going to make this count.",
      },
      {
        type: "text",
        body: "Ad astra. — METSAnauts",
      },
    ],
  },
];

// ─── Block renderer ──────────────────────────────────────────────────────────
// On wide screens, photos and videos sit in the empty right margin beside the text.
const marginFigure = "xl:float-right xl:clear-right xl:w-[460px] xl:-mr-[500px] xl:!mt-0 xl:mb-6";

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
          className="border-l-2 border-blue/50 pl-5 py-1 bg-blue-soft rounded-r-lg text-blue/90 text-[1.04rem] leading-relaxed italic"
        >
          {block.text}
        </blockquote>
      );

    case "image":
      return (
        <figure key={idx} className={marginFigure}>
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

    case "youtube":
      return (
        <figure key={idx} className={marginFigure}>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${block.videoId}`}
              title={block.title}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2.5 text-xs text-text-muted/60 text-center">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  return (
    <div className="py-14 sm:py-20 px-3">
      <div className="max-w-[1400px] mx-auto">

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
            <FadeIn key={post.id} delay={i * 80} className="block mb-24 pb-24 border-b border-border last:border-0 last:mb-0 last:pb-0">
              <article id={`post-${post.id}`} className="scroll-mt-24">

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
                <div className="space-y-5 flow-root">
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
