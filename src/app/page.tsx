import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { PortfolioCards } from "@/components/blocks/portfolio-cards";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "My Portofolio",
      "url": "https://myportofolio.store",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://myportofolio.store/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "My Portofolio",
      "url": "https://myportofolio.store",
      "logo": "https://myportofolio.store/favicon/favicon-96x96.png",
      "sameAs": [
        "https://www.instagram.com/myportofolio",
        "https://twitter.com/myportofolio",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Wahyudi Hidayat",
      "url": "https://myportofolio.store",
      "jobTitle": "Web Developer",
      "sameAs": [
        "https://www.linkedin.com/in/wahyuhidayatwyh",
        "https://github.com/wahyuhidayatwyh-boop",
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Background>
        <Hero />
        <Logos />
        <PortfolioCards />
        <Features />
        <ResourceAllocation />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <Pricing />
        <FAQ />
      </Background>
    </>
  );
}
