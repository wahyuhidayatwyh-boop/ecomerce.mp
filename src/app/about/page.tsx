import type { Metadata } from "next";
import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali My Portofolio lebih dekat. Kami adalah partner kreatif untuk membangun eksistensi digital profesional kamu.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />

        <About />
      </div>
    </Background>
  );
}
