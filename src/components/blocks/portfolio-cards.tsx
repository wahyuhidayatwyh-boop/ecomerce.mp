import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { withBasePath } from "@/lib/utils";

const portfolioItems = [
  {
    title: "Website Portofolio Pribadi",
    category: "Personal Brand",
    image: "/about/portofolio.png",
    previewUrl: "https://wahyuhidayatwyh-boop.github.io/Personal-website/",
  },
  {
    title: "Landing Page Agensi Kreatif",
    category: "Bisnis Jasa",
    image: "/about/2.webp",
    previewUrl: "https://landing-agensi.vercel.app",
  },
  {
    title: "Portofolio Fotografer",
    category: "Kreator",
    image: "/about/3.webp",
    previewUrl: "https://portfolio-fotografer.vercel.app",
  },
  {
    title: "Website Portofolio Interior",
    category: "Studio",
    image: "/about/4.webp",
    previewUrl: "https://portfolio-interior.vercel.app",
  },
  {
    title: "Portofolio UI Designer",
    category: "Freelancer",
    image: "/resource-allocation/templates.webp",
    previewUrl: "https://portfolio-ui-designer.vercel.app",
  },
  {
    title: "Website Portofolio Konsultan",
    category: "Profesional",
    image: "/resource-allocation/graveyard.webp",
    previewUrl: "https://portfolio-konsultan.vercel.app",
  },
];

export function PortfolioCards() {
  return (
    <section id="portfolio" className="pb-28 lg:pb-32">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Katalog Portofolio
          </h2>
          <p className="text-muted-foreground mt-4 leading-snug">
            Klik card atau tulisan Preview untuk membuka website portofolio.
            Ganti link pada data card dengan URL website kamu yang sudah deploy.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <a
              key={item.title}
              href={item.previewUrl}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={withBasePath(item.image)}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="text-muted-foreground text-xs tracking-wide uppercase">
                      {item.category}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base leading-snug font-semibold">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-primary text-sm font-medium underline underline-offset-4">
                      Preview
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
