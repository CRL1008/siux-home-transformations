import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/siux-logo.asset.json";
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

const services = [
  {
    title: "Kitchens",
    img: heroKitchen,
    text: "Full gut renovations, custom cabinetry, islands, countertops and lighting.",
  },
  {
    title: "Bathrooms",
    img: bathImg,
    text: "Tile work, walk-in showers, vanities, plumbing and full bath conversions.",
  },
  {
    title: "Dormers & Additions",
    img: dormerImg,
    text: "Shed and doghouse dormers, second-story additions and extensions.",
  },
  {
    title: "Closets & Small Projects",
    img: closetImg,
    text: "Built-ins, custom closets, trim, doors, drywall and punch-list work.",
  },
];

const steps = [
  { n: "01", t: "Free Walkthrough", d: "We visit, measure and talk through what you want." },
  { n: "02", t: "Clear Quote", d: "Line-item pricing with no surprise change orders." },
  { n: "03", t: "We Build It", d: "One crew, clean jobsite, daily updates from Mancebo." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <img src={logoAsset.url} alt="SIUX Home Remodeling logo" className="h-10 w-auto" />
          <nav className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wider md:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#process" className="hover:text-brand">Process</a>
            <a href="#contact" className="hover:text-brand">Contact</a>
          </nav>
          <a
            href="tel:5169146100"
            className="rounded-sm bg-brand px-4 py-2 text-sm font-semibold tracking-wide text-accent-foreground transition hover:bg-brand-deep"
          >
            516-914-6100
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <img
            src={heroKitchen}
            alt="Remodeled modern kitchen with white oak cabinetry"
            width={1600}
            height={1104}
            className="h-[70vh] min-h-[440px] w-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                Copiague, NY · Serving Long Island
              </p>
              <h1 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] tracking-wide text-primary-foreground sm:text-7xl">
                Closets to kitchens. Baths to dormers.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
                SIUX Home Remodeling is a hands-on contractor handling projects of every size —
                built right, on schedule, by the same crew start to finish.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:5169146100"
                  className="rounded-sm bg-brand px-6 py-3 font-semibold tracking-wide text-accent-foreground transition hover:bg-brand-deep"
                >
                  Get a Free Estimate
                </a>
                <a
                  href="#services"
                  className="rounded-sm border border-primary-foreground/40 px-6 py-3 font-semibold tracking-wide text-primary-foreground transition hover:bg-primary-foreground/10"
                >
                  See What We Do
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl tracking-wide sm:text-5xl">What We Build</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            No job too small, no job too big. If it's part of your home, we can remodel it.
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
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">How It Works</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="border-t-2 border-brand pt-5">
                  <span className="font-display text-3xl text-brand">{s.n}</span>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl tracking-wide sm:text-5xl">Get In Touch</h2>
              <p className="mt-3 text-muted-foreground">
                Call or email Mancebo for a free, no-pressure estimate on your project.
              </p>
            </div>
            <div className="space-y-4 rounded-sm bg-card p-7" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</p>
                <a href="tel:5169146100" className="font-display text-3xl tracking-wide hover:text-brand">
                  516-914-6100
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</p>
                <a href="mailto:SIUXLLC@GMAIL.COM" className="text-lg font-medium break-all hover:text-brand">
                  SIUXLLC@GMAIL.COM
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Address</p>
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
            Cameron · Copiague, NY · 516-914-6100 · SIUXLLC@GMAIL.COM
          </p>
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} SIUX Home Remodeling LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
