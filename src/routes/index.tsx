import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { copy, type Lang } from "@/lib/i18n";
import logo from "@/assets/siux-logo.png";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import bathImg from "@/assets/bath.jpg";
import dormerImg from "@/assets/dormer.jpg";
import closetImg from "@/assets/closet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIUX Home Remodeling | Kitchens, Baths & Dormers on Long Island" },
      {
        name: "description",
        content:
          "SIUX Home Remodeling in Copiague, NY. Licensed contractor for kitchens, bathrooms, closets, dormers and full home renovations. Call 516-914-6100 for a free estimate.",
      },
      { property: "og:title", content: "SIUX Home Remodeling | Long Island Contractor" },
      {
        property: "og:description",
        content:
          "From closets and bathrooms to kitchens and dormers — quality remodeling across Long Island. Free estimates: 516-914-6100.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "SIUX Home Remodeling",
          telephone: "+1-516-914-6100",
          email: "SIUXLLC@GMAIL.COM",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Copiague",
            addressRegion: "NY",
            postalCode: "11726",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("siux-lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  const t = copy[lang];
  const services = t.services.items.map((item, i) => ({
    ...item,
    img: [heroKitchen, bathImg, dormerImg, closetImg][i],
  }));

  const switchLang = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem("siux-lang", next);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <img src={logo} alt="SIUX Home Remodeling logo" className="h-10 w-auto" />
          <nav className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wider md:flex">
            <a href="#services" className="hover:text-brand">{t.nav.services}</a>
            <a href="#process" className="hover:text-brand">{t.nav.process}</a>
            <a href="#testimonials" className="hover:text-brand">{t.nav.testimonials}</a>
            <a href="#contact" className="hover:text-brand">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
          <div className="flex items-center overflow-hidden rounded-sm border border-border text-xs font-semibold uppercase tracking-wider">
            {(["en", "es"] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => switchLang(code)}
                aria-pressed={lang === code}
                aria-label={code === "en" ? "Switch to English" : "Cambiar a Español"}
                className={
                  "px-2.5 py-1.5 transition " +
                  (lang === code
                    ? "bg-brand text-accent-foreground"
                    : "text-muted-foreground hover:text-brand")
                }
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href="tel:5169146100"
            className="rounded-sm bg-brand px-4 py-2 text-sm font-semibold tracking-wide text-accent-foreground transition hover:bg-brand-deep"
          >
            516-914-6100
          </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <img
            src={heroKitchen}
            alt={t.heroAlt}
            width={1600}
            height={1104}
            className="h-[70vh] min-h-[440px] w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] tracking-wide text-primary-foreground sm:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
                {t.hero.sub}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:5169146100"
                  className="rounded-sm bg-brand px-6 py-3 font-semibold tracking-wide text-accent-foreground transition hover:bg-brand-deep"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#services"
                  className="rounded-sm border border-primary-foreground/40 px-6 py-3 font-semibold tracking-wide text-primary-foreground transition hover:bg-primary-foreground/10"
                >
                  {t.hero.cta2}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl tracking-wide sm:text-5xl">{t.services.heading}</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            {t.services.sub}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="overflow-hidden rounded-sm bg-card"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section id="process" className="bg-secondary py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">{t.process.heading}</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {t.process.steps.map((s, i) => (
                <div key={s.t} className="border-t-2 border-brand pt-5">
                  <span className="font-display text-3xl text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-secondary py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">{t.testimonials.heading}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              {t.testimonials.sub}
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="rounded-sm bg-card p-7" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="flex gap-1 text-brand" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.918 1.452L12 18.863l-4.669 2.894c-.954.581-2.189-.316-1.918-1.452l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                  “{t.testimonials.quote}”
                </blockquote>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  — {t.testimonials.reviewer}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl tracking-wide sm:text-5xl">{t.contact.heading}</h2>
              <p className="mt-3 text-muted-foreground">
                {t.contact.sub}
              </p>
            </div>
            <div className="space-y-4 rounded-sm bg-card p-7" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.phone}</p>
                <a href="tel:5169146100" className="font-display text-3xl tracking-wide hover:text-brand">
                  516-914-6100
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.email}</p>
                <a href="mailto:SIUXLLC@GMAIL.COM" className="text-lg font-medium break-all hover:text-brand">
                  SIUXLLC@GMAIL.COM
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.contact.address}</p>
                <address className="text-lg not-italic">Copiague, NY 11726</address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <p className="font-display text-2xl tracking-wide">SIUX Home Remodeling</p>
          <p className="text-sm text-primary-foreground/70">
            Mancebo · Copiague, NY · 516-914-6100 · SIUXLLC@GMAIL.COM
          </p>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} SIUX Home Remodeling LLC. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
