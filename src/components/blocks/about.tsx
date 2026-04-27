import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn, withBasePath } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Kolaborasi tim pengembang" },
            { src: "/about/2.webp", alt: "Workshop strategi produk" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Tim Kami"
          paragraphs={[
            "My Portofolio berawal dari kebutuhan para freelancer, kreator, dan bisnis jasa yang ingin punya website portofolio profesional tanpa proses yang rumit.",
            "Kami adalah tim kecil yang solid berisi strategist, UI designer, dan developer yang fokus membangun website portofolio yang rapi dan menjual.",
            "Setiap proyek kami kerjakan dengan komunikasi terbuka, milestone jelas, dan standar kualitas teknis yang rapi agar produk kamu siap dipakai jangka panjang.",
          ]}
          ctaButton={{
            href: "/contact",
            text: "Diskusikan Proyek Anda",
          }}
        />
      </div>

      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "Misi kami adalah membantu kamu memiliki website portofolio yang tidak hanya menarik secara visual, tapi juga memperkuat personal branding.",
            "Mulai dari penyusunan konten sampai implementasi teknis, semua kami sesuaikan dengan target klien yang ingin kamu capai.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Desain antarmuka website portofolio" },
            { src: "/about/4.webp", alt: "Diskusi implementasi teknis" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={withBasePath(image.src)}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}

