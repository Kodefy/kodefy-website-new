import Link from "next/link";

import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  routeId,
  compact = false,
}: {
  locale: Locale;
  routeId: RouteId;
  compact?: boolean;
}) {
  return (
    <div
      aria-label={locale === "id" ? "Pilih bahasa" : "Choose language"}
      className="inline-flex rounded-full border border-black/10 bg-white p-1"
    >
      {(["id", "en"] as const).map((item) => (
        <Link
          key={item}
          href={getRoutePath(routeId, item)}
          hrefLang={item}
          lang={item}
          aria-current={locale === item ? "page" : undefined}
          className={cn(
            "rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
            locale === item
              ? "bg-black text-white"
              : "text-black/55 hover:text-black",
            compact && "px-2.5 py-1",
          )}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
