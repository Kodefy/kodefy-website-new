import { readFile } from "node:fs/promises";
import path from "node:path";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Footer } from "@/components/site/footer";
import type { Locale, RouteId } from "@/lib/routes";

export async function LegalPage({
  locale,
  routeId,
}: {
  locale: Locale;
  routeId: Extract<RouteId, "terms" | "privacy">;
}) {
  const fileName = `${routeId}.${locale}.md`;
  const markdown = await readFile(
    path.join(process.cwd(), "content", "legal", fileName),
    "utf8",
  );

  return (
    <>
      <main className="bg-[#f8f7f3]">
        <div className="mx-auto max-w-4xl px-5 pt-32 pb-16 sm:px-8 lg:pt-36 lg:pb-24">
          <article className="legal-content rounded-[1.5rem] border border-black/10 bg-white px-6 py-9 shadow-sm sm:px-10 sm:py-12 lg:px-14">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer locale={locale} routeId={routeId} />
    </>
  );
}
