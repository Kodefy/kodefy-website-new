"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FormEvent, useRef } from "react";

import Grainient from "@/components/site/grainient";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { business, homeContent } from "@/content/site";
import { getRoutePath, type Locale, type RouteId } from "@/lib/routes";

const socials = [
  "facebook",
  "instagram",
  "linkedin",
  "threads",
  "tiktok",
] as const;

export function Footer({
  locale,
  routeId,
}: {
  locale: Locale;
  routeId: RouteId;
}) {
  const content = homeContent[locale];
  const footerRef = useRef<HTMLElement>(null);
  const homePath = getRoutePath("home", locale);
  const isIndonesian = locale === "id";
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [-36, 52]);
  const detailsY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `${isIndonesian ? "Nama" : "Name"}: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `${isIndonesian ? "Nomor telepon" : "Phone number"}: ${data.get("phone")}`,
      `${isIndonesian ? "Layanan" : "Service"}: ${data.get("service")}`,
      "",
      `${isIndonesian ? "Pesan" : "Message"}:`,
      data.get("message"),
    ].join("\n");
    const whatsappUrl = new URL(business.whatsapp);
    whatsappUrl.searchParams.set("text", message);
    window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative isolate min-h-screen overflow-hidden bg-[#101010] text-white lg:h-dvh lg:max-h-screen"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-75"
      >
        <Grainient
          className="h-full w-full"
          timeSpeed={0.6}
          color1="#000000"
          color2="#000000"
          color3="#878787"
          grainAmount={0.01}
          grainScale={1.8}
          contrast={1.25}
          saturation={0}
          zoom={1}
          noiseScale={2.5}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/35"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 py-20 sm:px-8 lg:h-dvh lg:min-h-0 lg:px-12 lg:py-16">
        <motion.div
          style={{ y: headingY }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <h2 className="max-w-xl whitespace-pre-line text-[clamp(4rem,8vw,8.5rem)] leading-[0.88] font-light tracking-tight">
            {"Let’s\ntalk"}
          </h2>
          <p className="max-w-xl text-lg leading-8 text-white/75 lg:justify-self-end">
            {isIndonesian
              ? "Ceritakan kebutuhan bisnis Anda. Kami akan membantu menentukan langkah digital yang paling masuk akal untuk dimulai."
              : "Tell us what your business needs. We will help identify the most sensible digital step to start with."}
          </p>
        </motion.div>

        <motion.div
          style={{ y: detailsY }}
          className="mt-12 grid gap-10 border-t border-white/15 pt-10 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-10"
        >
          <div>
            <div className="border-b border-white/15 pb-8">
              <p className="text-base font-medium">
                {isIndonesian ? "Kontak" : "Contact"}
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <ContactLink label="Email" href={`mailto:${business.email}`}>
                  {business.email}
                </ContactLink>
                <ContactLink
                  label={isIndonesian ? "Nomor telepon" : "Phone number"}
                  href={business.whatsapp}
                >
                  {business.phoneDisplay}
                </ContactLink>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-white/75">
                {isIndonesian ? "Ikuti kami di" : "Follow us on"}
              </p>
              <div className="flex items-center gap-5">
                {socials.map((social) => (
                  <button
                    key={social}
                    type="button"
                    aria-label={social}
                    className="transition-opacity duration-200 hover:cursor-pointer hover:opacity-60"
                  >
                    <img
                      src={`/assets/social/${social}.svg`}
                      alt=""
                      aria-hidden="true"
                      className="size-4 invert"
                    />
                  </button>
                ))}
              </div>
            </div>
            <Link
              href={homePath}
              className="mt-12 block w-fit text-2xl tracking-[0.45em] transition-opacity duration-200 hover:cursor-pointer hover:opacity-60 sm:text-3xl"
            >
              KODEFY
            </Link>
          </div>

          <form
            onSubmit={sendMessage}
            className="grid gap-x-8 gap-y-7 sm:grid-cols-2"
          >
            <Field
              label={isIndonesian ? "Nama lengkap" : "Full name"}
              name="name"
              placeholder={isIndonesian ? "Nama Anda" : "Your full name"}
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
            <Field
              label={isIndonesian ? "Nomor telepon" : "Phone number"}
              name="phone"
              placeholder={isIndonesian ? "Nomor telepon Anda" : "Your phone number"}
              phone
            />
            <Field
              label={isIndonesian ? "Layanan" : "Service"}
              name="service"
              placeholder={
                isIndonesian ? "Website, SEO, analitik..." : "Website, SEO, analytics..."
              }
            />
            <label className="block sm:col-span-2">
              <span className="text-sm text-white/70">
                {isIndonesian ? "Pesan" : "Message"}
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder={
                  isIndonesian
                    ? "Ceritakan kebutuhan proyek Anda..."
                    : "Tell us about your project..."
                }
                className="mt-3 w-full resize-none border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder:text-white/40 outline-none transition-colors duration-200 focus:border-white"
              />
            </label>
            <button
              type="submit"
              className="relative -top-5 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-base text-black transition-colors duration-200 hover:cursor-pointer hover:bg-zinc-300 sm:w-fit"
            >
              {isIndonesian ? "Kirim pesan" : "Send message"}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </button>
          </form>
        </motion.div>

        <div className="mt-auto flex flex-col gap-5 border-t border-white/15 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Kodefy. {content.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={getRoutePath("terms", locale)}
              className="transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              {content.footer.terms}
            </Link>
            <Link
              href={getRoutePath("privacy", locale)}
              className="transition-colors duration-200 hover:cursor-pointer hover:text-white"
            >
              {content.footer.privacy}
            </Link>
            <LanguageSwitcher locale={locale} routeId={routeId} compact />
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-sm text-white/55">{label}</p>
      <a
        href={href}
        className="mt-2 block w-fit text-base transition-opacity duration-200 hover:cursor-pointer hover:opacity-60"
      >
        {children}
      </a>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
  phone = false,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  phone?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm text-white/70">{label}</span>
      <input
        name={name}
        type={phone ? "tel" : type}
        required={required}
        placeholder={placeholder}
        inputMode={phone ? "tel" : undefined}
        pattern={phone ? "[0-9+()\\-\\s]{7,20}" : undefined}
        title={
          phone
            ? "Use 7 to 20 digits and standard phone-number characters only."
            : undefined
        }
        onInput={
          phone
            ? (event) => {
                event.currentTarget.value = event.currentTarget.value.replace(
                  /[^0-9+()\-\s]/g,
                  "",
                );
              }
            : undefined
        }
        className="mt-3 w-full border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder:text-white/40 outline-none transition-colors duration-200 focus:border-white"
      />
    </label>
  );
}
