import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Layanan",
    questions: [
      {
        question: "Layanan apa saja yang bisa dikerjakan My Portofolio?",
        answer:
          "Kami fokus pada pembuatan website portofolio untuk personal brand, freelancer, kreator, agensi, dan bisnis jasa.",
      },
      {
        question: "Apakah bisa request desain dan fitur custom?",
        answer:
          "Bisa. Setiap proyek dimulai dari diskusi kebutuhan, lalu kami susun scope, timeline, dan estimasi biaya yang transparan.",
      },
      {
        question: "Berapa lama proses pengerjaan?",
        answer:
          "Tergantung kompleksitas. Umumnya 7-14 hari untuk paket Starter, dan 2-4 minggu untuk paket Growth/Scale.",
      },
    ],
  },
  {
    title: "Harga & Pembayaran",
    questions: [
      {
        question: "Apakah ada paket harga tetap?",
        answer:
          "Ada. Kamu bisa mulai dari paket Starter atau Growth. Untuk kebutuhan enterprise, kami siapkan penawaran custom.",
      },
      {
        question: "Bagaimana sistem pembayarannya?",
        answer:
          "Umumnya pembayaran dilakukan bertahap: DP saat proyek dimulai, pembayaran kedua saat development, dan pelunasan saat serah terima.",
      },
    ],
  },
  {
    title: "Teknis",
    questions: [
      {
        question: "Apakah website bisa di-update sendiri?",
        answer:
          "Bisa. Kami dapat menambahkan panel admin/CMS agar kamu bisa mengubah konten tanpa perlu coding.",
      },
      {
        question: "Apakah termasuk hosting dan domain?",
        answer:
          "Bisa termasuk atau terpisah, sesuai paket yang kamu pilih. Kami juga bantu setup deployment ke Vercel atau server lain.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Pertanyaan yang Sering Ditanyakan
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Pertanyaan yang Sering Ditanyakan
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Jika pertanyaanmu belum ada di sini, langsung{" "}
              <Link href="/contact" className="underline underline-offset-4">
                hubungi kami
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

