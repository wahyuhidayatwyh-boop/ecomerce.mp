"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "Rp2.500.000",
    yearlyPrice: "Rp2.000.000",
    description: "Cocok untuk personal brand yang baru mulai",
    features: [
      "Website portofolio 1 halaman",
      "Desain responsif mobile",
      "Tombol WhatsApp & kontak",
      "Revisi minor hingga 2x",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: "Rp7.500.000",
    yearlyPrice: "Rp6.500.000",
    features: [
      "Website portofolio multi halaman",
      "Halaman studi kasus/proyek",
      "CMS sederhana untuk update konten",
      "Optimasi SEO on-page",
      "Support 30 hari",
    ],
  },
  {
    name: "Scale",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: [
      "Semua fitur paket Growth",
      "Strategi personal branding",
      "Copywriting halaman penjualan",
      "Integrasi kalender/booking",
      "Maintenance & pengembangan lanjutan",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Paket Website Portofolio
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Pilih paket sesuai kebutuhanmu, dari portofolio sederhana sampai
            website portofolio lengkap untuk scale bisnis jasa.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
                className={`${
                plan.name === "Growth"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Starter" && plan.monthlyPrice !== "Custom" && (
                        <span className="text-muted-foreground">
                          per proyek
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Starter" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle harga promo"
                      disabled={plan.monthlyPrice === "Custom"}
                    />
                    <span className="text-sm font-medium">
                      {plan.monthlyPrice === "Custom"
                        ? "Harga menyesuaikan kebutuhan"
                        : "Gunakan harga promo"}
                    </span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Growth" ? "default" : "outline"}
                >
                  Konsultasi
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
