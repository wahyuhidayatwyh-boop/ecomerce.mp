import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { withBasePath } from "@/lib/utils";

const portfolioItems = [
  {
    title: "Website Portofolio Pribadi",
    category: "Personal Brand",
    code: "MP-01",
    image: "/about/portofolio.png",
    previewUrl: "https://wahyuhidayatwyh-boop.github.io/Personal-website/",
  },
  {
    title: "Landing Page Agensi Kreatif",
    category: "Website Portofolio Pribadi",
    code: "MP-02",
    image: "/about/portofolio2.png",
    previewUrl: "https://wahyuhidayatwyh-boop.github.io/portofolio2/",
  },
  {
    title: "Website Portofolio Pribadi",
    category: "Website Portofolio Pribadi",
    code: "MP-03",
    image: "/about/portofolio3.png",
    previewUrl: "https://wahyuhidayatwyh-boop.github.io/Portofolio3/",
  },
  {
    title: "Website Portofolio Pribadi",
    category: "Website Portofolio Pribadi ",
    code: "MP-04",
    image: "/about/portofolio5.png",
    previewUrl: "https://yuliarahmanpasaribu-8a4y8jfwz-2311102178-3240s-projects.vercel.app/",
  },
  {
    title: "Portofolio UI Designer",
    category: "Freelancer",
    code: "MP-05",
    image: "/about/portofolio4.png",
    previewUrl: "https://wahyuhidayatwyh-boop.github.io/portofolio4/",
  },
  {
    title: "Website Portofolio Teknik Industri",
    category: "Profesional",
    code: "MP-06",
    image: "/about/portofolio6.png",
    previewUrl: "https://rizkywassyifa.vercel.app/",
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
            Klik card untuk melihat preview website. Gunakan **Kode Desain** di bawah untuk melakukan pemesanan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <a
              key={item.code}
              href={item.previewUrl}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:bg-zinc-900/50 dark:border-zinc-800">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={withBasePath(item.image)}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#A67C52] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg">
                      KODE: {item.code}
                    </div>
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="text-muted-foreground text-[10px] tracking-widest uppercase font-bold">
                      {item.category}
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base leading-snug font-semibold text-gray-900 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gray-400" />
                    </div>
                    <p className="text-[#A67C52] text-sm font-bold underline underline-offset-4">
                      Lihat Preview
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
