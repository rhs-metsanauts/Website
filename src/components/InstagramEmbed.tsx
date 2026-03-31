"use client";

import Script from "next/script";

export default function InstagramEmbed({ permalink }: { permalink: string }) {
  return (
    <div className="flex justify-center my-2">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
        style={{
          maxWidth: 540,
          minWidth: 326,
          width: "100%",
          border: "1px solid var(--color-border)",
          borderRadius: 12,
          background: "var(--color-surface)",
        }}
      />
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
