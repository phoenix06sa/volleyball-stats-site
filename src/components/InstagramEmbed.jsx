import { useEffect, useMemo } from "react";

export default function InstagramEmbed({ url }) {
  // Normalize to https://www.instagram.com/{p|reel|tv}/{code}/
  const permalink = useMemo(() => {
    try {
      const u = new URL(url);
      const [, type, code] = u.pathname.split("/"); // ["", "reel", "DIZsGYmSisx", ""]
      if (!["p", "reel", "tv"].includes(type) || !code) return null;
      return `https://www.instagram.com/${type}/${code}/`;
    } catch {
      return null;
    }
  }, [url]);

  useEffect(() => {
    if (!permalink) return;

    const SRC = "https://www.instagram.com/embed.js";
    let script = document.querySelector(`script[src="${SRC}"]`);

    const process = () => window?.instgrm?.Embeds?.process?.();

    if (!script) {
      script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      script.onload = process;       // ensure we process AFTER it loads
      document.body.appendChild(script);
    } else {
      process();                     // already loaded → just process
    }
  }, [permalink]);

  if (!permalink) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="text-sky-600 underline">
        View on Instagram
      </a>
    );
  }

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{ background: "white", margin: 0, padding: 0, width: "100%" }}
    >
      <a href={permalink}>View on Instagram</a>
    </blockquote>
  );
}
