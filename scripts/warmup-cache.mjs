// scripts/warmup-cache.mjs
// Pre-warms the Next.js / Vercel CDN image cache for critical LCP hero images

const CRITICAL_IMAGES = [
  // Home LCP Hero
  { url: "/images/hero/triumphant-overlook-above-misty-valley.png", widths: [750, 1080, 1920], q: 88 },
  // Secondary common carousel slides
  { url: "/images/hero/three-elephants-in-lush-wetland.png", widths: [750, 1080, 1920], q: 88 },
  { url: "/images/hero/jungle-curve-blue-train-adventure.png", widths: [750, 1080, 1920], q: 88 },
  { url: "/images/hero/embracing-freedom-by-the-sea.png", widths: [750, 1080, 1920], q: 88 },
  // Page LCP Heroes
  { url: "/images/packages-hero.png", widths: [750, 1080, 1920], q: 88 },
  { url: "/images/destinations-hero.png", widths: [750, 1080, 1920], q: 88 },
  { url: "/images/experiences-hero.png", widths: [750, 1080, 1920], q: 88 },
  { url: "/images/about-hero.png", widths: [750, 1080, 1920], q: 88 },
  { url: "/images/blog-hero.png", widths: [750, 1080, 1920], q: 88 },
  { url: "/images/contact-hero.png", widths: [750, 1080, 1920], q: 88 },
  // Brand Logo
  { url: "/images/logo.png", widths: [128], q: 88 }
];

const targetHost = (
  process.env.WARMUP_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.argv[2] ||
  "http://localhost:3000"
).replace(/\/$/, "");

async function warmup() {
  console.log(`🔥 Starting Image Cache Pre-warm on: ${targetHost}`);
  let successCount = 0;
  let hitCount = 0;
  let missCount = 0;

  for (const item of CRITICAL_IMAGES) {
    for (const w of item.widths) {
      const target = `${targetHost}/_next/image?url=${encodeURIComponent(item.url)}&w=${w}&q=${item.q}`;
      try {
        const start = Date.now();
        const res = await fetch(target, {
          headers: {
            Accept: "image/avif,image/webp,*/*"
          }
        });
        const duration = Date.now() - start;
        const vercelCache = res.headers.get("x-vercel-cache") || res.headers.get("cf-cache-status") || "N/A";
        if (vercelCache.toUpperCase().includes("HIT")) hitCount++;
        else if (vercelCache.toUpperCase().includes("MISS")) missCount++;

        if (res.ok) {
          successCount++;
          console.log(`  ✓ [${res.status}] (${duration}ms | Cache: ${vercelCache}): ${item.url} (w=${w})`);
        } else {
          console.warn(`  ⚠ Warning [${res.status}]: ${target}`);
        }
      } catch (err) {
        console.warn(`  ✕ Network error for ${target}: ${err.message}`);
      }
      // Gentle throttle to avoid rate limiting
      await new Promise(r => setTimeout(r, 60));
    }
  }

  console.log(`✨ Warm-up run completed! Total: ${successCount} requests (CDN Hits: ${hitCount}, Misses/Primed: ${missCount})`);
  console.log(`   Note: Global CDN edge nodes cache locally per edge POP upon incoming visits.`);
}

warmup();
