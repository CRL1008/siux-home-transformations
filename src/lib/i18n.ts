export type Lang = "en" | "es";

export const copy = {
  en: {
    nav: { services: "Services", process: "Process", testimonials: "Reviews", contact: "Contact" },
    hero: {
      eyebrow: "Copiague, NY · Serving Long Island",
      title: "Closets to kitchens. Baths to dormers.",
      sub: "SIUX Home Remodeling is a hands-on contractor handling projects of every size — built right, on schedule, by the same crew start to finish.",
      cta: "Get a Free Estimate",
      cta2: "See What We Do",
    },
    services: {
      heading: "What We Build",
      sub: "No job too small, no job too big. If it's part of your home, we can remodel it.",
      items: [
        { title: "Kitchens", text: "Full gut renovations, custom cabinetry, islands, countertops and lighting." },
        { title: "Bathrooms", text: "Tile work, walk-in showers, vanities, plumbing and full bath conversions." },
        { title: "Dormers & Additions", text: "Shed and doghouse dormers, second-story additions and extensions." },
        { title: "Closets & Small Projects", text: "Built-ins, custom closets, trim, doors, drywall and punch-list work." },
      ],
    },
    process: {
      heading: "How It Works",
      steps: [
        { t: "Free Walkthrough", d: "We visit, measure and talk through what you want." },
        { t: "Clear Quote", d: "Line-item pricing with no surprise change orders." },
        { t: "We Build It", d: "One crew, clean jobsite, daily updates from Mancebo." },
      ],
    },
    contact: {
      heading: "Get In Touch",
      sub: "Call or email Mancebo for a free, no-pressure estimate on your project.",
      phone: "Phone",
      email: "Email",
      address: "Address",
    },
    testimonials: {
      heading: "What Homeowners Say",
      sub: "Real reviews from real clients across Long Island.",
      reviewer: "Cameron, Homeowner",
      quote: "Mancebo and his team completely renovated our first floor — new flooring throughout, updated plumbing and electrical, and a brand new kitchen. They were always on time, answered every question quickly, and made the whole process feel easy from start to finish.",
    },
    footer: { rights: "All rights reserved." },
    heroAlt: "Remodeled modern kitchen with white oak cabinetry",
  },
  es: {
    nav: { services: "Servicios", process: "Proceso", testimonials: "Opiniones", contact: "Contacto" },
    hero: {
      eyebrow: "Copiague, NY · Servimos Long Island",
      title: "De clósets a cocinas. De baños a buhardillas.",
      sub: "SIUX Home Remodeling es un contratista práctico que maneja proyectos de todo tamaño — bien hechos, a tiempo y con el mismo equipo de principio a fin.",
      cta: "Presupuesto Gratis",
      cta2: "Vea Nuestro Trabajo",
    },
    services: {
      heading: "Lo Que Construimos",
      sub: "Ningún trabajo es muy pequeño ni muy grande. Si es parte de su casa, lo remodelamos.",
      items: [
        { title: "Cocinas", text: "Remodelaciones completas, gabinetes a medida, islas, encimeras e iluminación." },
        { title: "Baños", text: "Azulejos, duchas sin bordes, tocadores, plomería y conversiones completas." },
        { title: "Buhardillas y Ampliaciones", text: "Buhardillas, segundos pisos y ampliaciones de la casa." },
        { title: "Clósets y Proyectos Pequeños", text: "Muebles empotrados, clósets a medida, molduras, puertas y sheetrock." },
      ],
    },
    process: {
      heading: "Cómo Funciona",
      steps: [
        { t: "Visita Gratis", d: "Visitamos, medimos y hablamos sobre lo que usted quiere." },
        { t: "Presupuesto Claro", d: "Precios detallados, sin cargos sorpresa." },
        { t: "Lo Construimos", d: "Un solo equipo, obra limpia y noticias diarias de Mancebo." },
      ],
    },
    contact: {
      heading: "Contáctenos",
      sub: "Llame o escriba a Mancebo para un presupuesto gratis y sin compromiso.",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección",
    },
    testimonials: {
      heading: "Lo Que Dicen los Propietarios",
      sub: "Reseñas reales de clientes reales en Long Island.",
      reviewer: "Cameron, Propietario",
      quote: "Mancebo y su equipo renovaron por completo nuestro primer piso: pisos nuevos en toda la casa, plomería y electricidad actualizadas, y una cocina completamente nueva. Siempre llegaron a tiempo, respondieron cada pregunta rápidamente y hicieron que todo el proceso fuera fácil de principio a fin.",
    },
    footer: { rights: "Todos los derechos reservados." },
    heroAlt: "Cocina moderna remodelada con gabinetes de roble blanco",
  },
} as const;
