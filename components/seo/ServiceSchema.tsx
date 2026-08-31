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
  /** Schema.org type for areaServed. Defaults to Country, which is right for a
   *  national page. Geo pages pass "AdministrativeArea" or "State", because
   *  emitting {"@type":"Country","name":"Los Angeles"} is simply false.
   *  areaServed describes where a service is OFFERED, so it carries no presence
   *  claim; that is why it is permitted where LocalBusiness and PostalAddress
   *  are not. */
  areaServedType?: "Country" | "AdministrativeArea" | "State" | "Place";
};

export default function ServiceSchema({ name, serviceType, description, url, areaServed, areaServedType = "Country" }: ServiceSchemaProps) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    provider: { "@id": ORG_ID },
    ...(areaServed ? { areaServed: { "@type": areaServedType, name: areaServed } } : {}),
    url,
    description,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
