import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "@/i18n/routing";
import {
  defaultLocale,
  getCanonicalLocaleRedirect,
  productionOrigin,
} from "@/lib/routes";

const handleI18nRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  const canonicalLocalePath = getCanonicalLocaleRedirect(request.nextUrl.pathname);

  if (host === "www.kodefy.id") {
    const destination = new URL(request.nextUrl.pathname, productionOrigin);
    destination.search = request.nextUrl.search;
    if (destination.pathname === "/") destination.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(destination, 308);
  }

  if (canonicalLocalePath) {
    const destination = request.nextUrl.clone();
    destination.pathname = canonicalLocalePath;
    return NextResponse.redirect(destination, 308);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
