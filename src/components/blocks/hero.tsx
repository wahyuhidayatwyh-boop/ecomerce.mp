import Image from "next/image";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Desain Portofolio Premium",
    description: "Tampilan modern yang rapi untuk menaikkan kesan profesional.",
    icon: CircleDot,
  },
  {
    title: "Susunan Konten Menjual",
    description: "Profil, layanan, studi kasus, dan CTA disusun untuk konversi.",
    icon: Blend,
  },
  {
    title: "Optimasi Mobile & SEO",
    description: "Website cepat, responsif, dan mudah ditemukan di Google.",
    icon: Diamond,
  },
  {
    title: "Mudah Diupdate",
    description: "Struktur konten dibuat simpel agar portofolio gampang dikelola.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            My Portofolio, Website yang Menjual Karya Kamu
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Fokus kami adalah membangun website portofolio profesional untuk
            personal brand, freelancer, kreator, dan bisnis jasa agar lebih
            dipercaya dan lebih mudah closing klien.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">Konsultasi Gratis</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/pricing"
                target="_self"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Lihat Paket & Harga
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 md:mt-20 lg:container lg:mt-24">
        <div className="bg-muted/30 relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/hero.png"
            alt="Tampilan website portofolio My Portofolio"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
};

