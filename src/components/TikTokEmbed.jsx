import { useEffect, useMemo } from "react";

export default function TikTokEmbed({ url, size = "md" }) {
  // Map sizes to sensible widths (TikTok iframes don't like being too tiny)
  const dims = {
    sm: { max: 320, min: 300 },
    md: { max: 360, min: 325 },
    lg: { max: 480, min: 325 },
  };
  const { max, min } = dims[size] ?? dims.md;

  const id = useMemo(() => (url.match(/\/video\/(\d+)/) || [])[1], [url]);

  useEffect(() => {
    if (!id) return;
    const SRC = "https://www.tiktok.com/embed.js";
    const existing = document.querySelector(`script[src="${SRC}"]`);
    const kick = () => {
      // re-process embeds when URL/size changes
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      document.body.appendChild(s);
    };
    if (!existing) {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      s.onload = kick;
      document.body.appendChild(s);
    } else {
      kick();
    }
  }, [id, size]);

  if (!id) return <a href={url}>View on TikTok</a>;

  return (
    <div style={{ width: "100%", maxWidth: max }}>
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={id}
        style={{ maxWidth: max, minWidth: min }}
      >
        <section>
          <a href={url} target="_blank" rel="noreferrer">Watch on TikTok</a>
        </section>
      </blockquote>
    </div>
  );
}
