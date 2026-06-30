// Shared Service JSON-LD for service pages. Provider references the global
// Organization entity defined in app/layout.tsx (@id below). Note: Service is
// not a Google rich-result type, so this adds entity-graph context only.
const ORG_ID = "https://ecommwizards.com/#organization";

type ServiceSchemaProps = {
  /** Service name, e.g. "Shopify SEO Agency" */
  name: string;
  /** Concise service category, e.g. "Shopify SEO" */
  serviceType: string;
  /** Service description (reuse the page's META_DESCRIPTION) */
  description: string;
  /** The page's canonical URL */
  url: string;
  /** Optional country served, e.g. "United States" (omit for global) */
  areaServed?: string;
};

export default function ServiceSchema({ name, serviceType, description, url, areaServed }: ServiceSchemaProps) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    provider: { "@id": ORG_ID },
    ...(areaServed ? { areaServed: { "@type": "Country", name: areaServed } } : {}),
    url,
    description,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
