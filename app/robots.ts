import type { MetadataRoute } from "next";

import { productionOrigin } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${productionOrigin}/sitemap.xml`,
    host: productionOrigin,
  };
}
