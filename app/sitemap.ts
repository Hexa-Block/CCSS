import type { MetadataRoute } from "next";
import { getAspects } from "@/lib/ccss.service";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://ccssnavigator.com";
  return [
    { url: `${origin}/` },
    { url: `${origin}/about` },
    { url: `${origin}/privacy` },
    ...getAspects().map(({ id }) => ({
      url: `${origin}/dashboard/aspect/${encodeURIComponent(id)}`,
    })),
  ];
}
