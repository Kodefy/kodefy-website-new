"use client";

import { ArrowUpRight } from "lucide-react";
import { type FormEvent } from "react";

import { FadeIn } from "@/components/site/fade-in";
import { FadeInText } from "@/components/site/fade-in-text";
import { RevealHeadline } from "@/components/site/reveal-headline";
import { business, contactPageContent } from "@/content/site";
import type { Locale } from "@/lib/routes";

export function ContactForm({ locale }: { locale: Locale }) {
  const content = contactPageContent[locale].form;

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `${content.nameLabel}: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `${content.phoneLabel}: ${data.get("phone")}`,
      `${content.serviceLabel}: ${data.get("service")}`,
      "",
      `${content.messageLabel}:`,
      data.get("message"),
    ].join("\n");
    const whatsappUrl = new URL(business.whatsapp);
    whatsappUrl.searchParams.set("text", message);
    window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-white py-20 text-black sm:py-28 lg:py-28">
      <div className="mx-auto grid max-w-360 gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
        <div>
          <h2 className="max-w-lg text-5xl leading-[0.9] font-light tracking-tight sm:text-6xl lg:text-7xl">
            <RevealHeadline revealBy="character" text={content.title} />
          </h2>
          <FadeInText
            className="mt-6 max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            text={content.body}
            delay={0.15}
          />

          <div className="mt-10 grid gap-6 border-t border-black/15 pt-6 sm:grid-cols-2">
            <ContactDetail label={content.emailLabel} href={`mailto:${business.email}`} delay={0.2}>
              {business.email}
            </ContactDetail>
            <ContactDetail label={content.phoneLabel} href={business.whatsapp} external delay={0.25}>
              {business.phoneDisplay}
            </ContactDetail>
          </div>
        </div>

        <form onSubmit={sendMessage} className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <Field
            label={content.nameLabel}
            name="name"
            placeholder={content.namePlaceholder}
            required
          />
          <Field label="Email" name="email" placeholder="you@company.com" required type="email" />
          <Field label={content.phoneLabel} name="phone" placeholder={content.phoneLabel} phone />
          <Field label={content.serviceLabel} name="service" placeholder={content.servicePlaceholder} />
          <label className="block sm:col-span-2">
            <FadeInText className="text-sm text-muted-foreground" text={content.messageLabel} />
            <textarea
              name="message"
              rows={4}
              required
              placeholder={content.messagePlaceholder}
              className="mt-3 w-full resize-none border-b border-black/20 bg-transparent pb-3 text-base placeholder:text-black/40 outline-none transition-colors duration-200 focus:border-black"
            />
          </label>
          <FadeIn className="sm:w-fit" delay={0.3}>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-black px-7 text-base text-white transition-colors duration-200 hover:cursor-pointer hover:bg-zinc-800"
            >
              {content.submit}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </button>
          </FadeIn>
        </form>
      </div>
    </section>
  );
}

function ContactDetail({
  label,
  href,
  children,
  delay,
  external = false,
}: {
  label: string;
  href: string;
  children: string;
  delay: number;
  external?: boolean;
}) {
  return (
    <div>
      <FadeInText className="text-sm text-muted-foreground" text={label} delay={delay} />
      <FadeInText className="mt-2 w-fit text-base font-medium" text={children} delay={delay + 0.05}>
        <a
          className="hover:underline"
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {children}
        </a>
      </FadeInText>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
  phone = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  phone?: boolean;
}) {
  return (
    <label className="block">
      <FadeInText className="text-sm text-muted-foreground" text={label} />
      <input
        name={name}
        type={phone ? "tel" : type}
        required={required}
        placeholder={placeholder}
        inputMode={phone ? "tel" : undefined}
        className="mt-3 w-full border-b border-black/20 bg-transparent pb-3 text-base placeholder:text-black/40 outline-none transition-colors duration-200 focus:border-black"
      />
    </label>
  );
}
