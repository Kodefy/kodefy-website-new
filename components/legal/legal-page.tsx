import { readFile } from "node:fs/promises";
import path from "node:path";
import { isValidElement, type ReactNode } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { Footer } from "@/components/site/footer";
import type { Locale, RouteId } from "@/lib/routes";

function getNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getNodeText).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }

  return "";
}

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
      <main className="bg-white text-black">
        <div className="mx-auto max-w-360 px-6 pt-32 pb-20 sm:px-8 lg:px-12 lg:pt-40 lg:pb-28">
          <article className="legal-content max-w-4xl">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="max-w-4xl text-5xl leading-none font-light tracking-tight sm:text-6xl lg:text-7xl">
                    <RevealHeadline
                      revealBy="character"
                      text={getNodeText(children)}
                    />
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-16 border-t border-black/15 pt-6 text-3xl leading-tight font-light tracking-tight sm:text-4xl">
                    <RevealHeadline
                      revealBy="character"
                      text={getNodeText(children)}
                    />
                  </h2>
                ),
                h3: ({ children }) => (
                  <FadeIn className="mt-10">
                    <h3 className="text-xl leading-tight font-medium tracking-tight sm:text-2xl">
                      {children}
                    </h3>
                  </FadeIn>
                ),
                p: ({ children }) => (
                  <FadeInText
                    className="mt-5 text-base leading-7 text-black/65 sm:text-lg sm:leading-8"
                    text={getNodeText(children)}
                  >
                    {children}
                  </FadeInText>
                ),
                li: ({ children }) => (
                  <FadeInText
                    as="li"
                    className="text-base leading-7 text-black/65 sm:text-lg sm:leading-8"
                    text={getNodeText(children)}
                  >
                    {children}
                  </FadeInText>
                ),
              }}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer locale={locale} routeId={routeId} />
    </>
  );
}
