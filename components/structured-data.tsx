import { siteConfig, faqItems } from "@/lib/site";

// JSON-LD para rich results do Google. Renderizado no <head> via layout.
// Não é client component — é só markup estático serializado.

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  logo: `${siteConfig.url}/images/logo-allure.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: {
    "@type": "Country",
    name: siteConfig.areaServed,
  },
  knowsAbout: [
    "Energia solar",
    "Sistemas fotovoltaicos",
    "Painéis solares",
    "Energia solar residencial",
    "Energia solar empresarial",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "pt-BR",
  publisher: { "@id": `${siteConfig.url}/#business` },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function StructuredData() {
  const graph = [localBusiness, website, faqPage];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
