import { Background } from "@/components/background";
import { PortfolioCards } from "@/components/blocks/portfolio-cards";

export default function PortfolioPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <div className="container max-w-5xl mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Katalog <span className="text-primary">Portofolio</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl">
                Pilih desain yang paling sesuai dengan karakter dan kebutuhan profesional kamu. Semua desain siap dikustomisasi.
            </p>
        </div>
        <PortfolioCards />
      </div>
    </Background>
  );
}
