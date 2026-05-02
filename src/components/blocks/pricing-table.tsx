"use client";

import React, { useState } from "react";

import { Check, ChevronsUpDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface PricingPlan {
  name: string;
  button: {
    text: string;
    variant: "outline" | "default" | "secondary" | "ghost" | "link";
    href: string;
  };
}

interface FeatureSection {
  category: string;
  features: {
    name: string;
    free: true | false | null | string;
    startup: true | false | null | string;
    enterprise: true | false | null | string;
  }[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    button: {
      text: "Konsultasi",
      variant: "outline" as const,
      href: "https://wa.me/6283843653251?text=Halo%20Admin!%20Saya%20tertarik%20dengan%20Paket%20Starter%20(100rb).%20Saya%20sudah%20lihat%20katalognya%20dan%20ingin%20pakai%20Kode%20Desain%3A%20%5BIsi%20Kode%5D.%20Apa%20saja%20data%20yang%20perlu%20saya%20siapkan%3F",
    },
  },
  {
    name: "Growth",
    button: {
      text: "Konsultasi",
      variant: "outline" as const,
      href: "https://wa.me/6283843653251?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20Paket%20Growth%20(Mulai%20250rb).%20Saya%20butuh%20fitur%20halaman%20studi%20kasus%20dan%20copywriting.%20Bisa%20bantu%20jelaskan%20prosedurnya%3F",
    },
  },
  {
    name: "Scale",
    button: {
      text: "Jadwalkan Meeting",
      variant: "outline" as const,
      href: "https://wa.me/6283843653251?text=Halo!%20Saya%20ingin%20mendiskusikan%20kebutuhan%20website%20portofolio%20skala%20besar%20(Paket%20Scale).%20Saya%20butuh%20hosting%20berbayar%20dan%20fitur%20CMS.%20Kapan%20ada%20waktu%20untuk%20jadwal%20diskusi%20lebih%20lanjut%3F",
    },
  },
];

const comparisonFeatures: FeatureSection[] = [
  {
    category: "Kapasitas Proyek",
    features: [
      {
        name: "Jumlah halaman website",
        free: "Hingga 5",
        startup: "Hingga 10",
        enterprise: "Custom",
      },
      {
        name: "Jumlah proyek/karya ditampilkan",
        free: "Hingga 6",
        startup: "Hingga 20",
        enterprise: "Unlimited",
      },
      {
        name: "Halaman studi kasus",
        free: false,
        startup: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Fitur Utama",
    features: [
      {
        name: "Desain UI kustom",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Optimasi SEO dasar",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Integrasi form leads",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Integrasi formulir lead",
        free: null,
        startup: true,
        enterprise: true,
      },
      {
        name: "Panel manajemen konten",
        free: null,
        startup: true,
        enterprise: true,
      },
      {
        name: "Copywriting halaman",
        free: null,
        startup: false,
        enterprise: true,
      },
      {
        name: "Integrasi booking meeting",
        free: null,
        startup: false,
        enterprise: true,
      },
      {
        name: "Hosting & Domain",
        free: "Gratis (Vercel/Netlify)",
        startup: "Gratis (Vercel/Netlify)",
        enterprise: "Premium & Berbayar",
      },
    ],
  },
  {
    category: "Dukungan",
    features: [
      {
        name: "Masa support",
        free: "14 hari",
        startup: "30 hari",
        enterprise: "90 hari",
      },
      {
        name: "Pelatihan penggunaan",
        free: true,
        startup: true,
        enterprise: true,
      },
      {
        name: "Technical account manager",
        free: null,
        startup: null,
        enterprise: true,
      },
      {
        name: "SLA prioritas",
        free: null,
        startup: null,
        enterprise: true,
      },
    ],
  },
];

const renderFeatureValue = (value: true | false | null | string) => {
  if (value === true) {
    return <Check className="mx-auto size-5 text-[#A67C52]" />;
  }
  if (value === false) {
    return <X className="mx-auto size-5 text-gray-300 dark:text-zinc-600" />;
  }
  if (value === null) {
    return null;
  }
  // String value
  return (
    <div className="flex items-center justify-center gap-2">
      <Check className="size-4 text-[#A67C52]" />
      <span className="text-sm font-semibold text-gray-900 dark:text-zinc-100">{value}</span>
    </div>
  );
};

export const PricingTable = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden transition-colors duration-500">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#A67C52 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16 space-y-4">
          <h2 className="font-display text-2xl tracking-tight text-gray-900 dark:text-zinc-100 md:text-4xl lg:text-5xl">
            Bandingkan Paket Portofolio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-zinc-400 font-sans">
            Pilih paket yang paling sesuai dengan kebutuhan branding dan kapasitas proyek Anda.
          </p>
        </div>
        
        <div className="container">
          <PlanHeaders
            selectedPlan={selectedPlan}
            onPlanChange={setSelectedPlan}
          />
          <FeatureSections selectedPlan={selectedPlan} />
        </div>
      </div>
    </section>
  );
};

const PlanHeaders = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile View */}
      <div className="md:hidden">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <div className="flex items-center justify-between border-b dark:border-zinc-800 py-4">
            <CollapsibleTrigger className="flex items-center gap-2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-zinc-100">
                {pricingPlans[selectedPlan].name}
              </h3>
              <ChevronsUpDown
                className={`size-5 transition-transform text-gray-500 ${isOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <Button
              asChild
              variant={pricingPlans[selectedPlan].button.variant}
              className="w-fit"
            >
              <a href={pricingPlans[selectedPlan].button.href} target="_blank" rel="noopener noreferrer">
                {pricingPlans[selectedPlan].button.text}
              </a>
            </Button>
          </div>
          <CollapsibleContent className="flex flex-col space-y-2 p-2 bg-gray-50 dark:bg-zinc-900/50 rounded-b-xl">
            {pricingPlans.map(
              (plan, index) =>
                index !== selectedPlan && (
                  <Button
                    size="lg"
                    variant="secondary"
                    key={index}
                    onClick={() => {
                      onPlanChange(index);
                      setIsOpen(false);
                    }}
                    className="dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                  >
                    {plan.name}
                  </Button>
                ),
            )}
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Desktop View */}
      <div className="grid grid-cols-4 gap-4 max-md:hidden border-b dark:border-zinc-800 pb-8">
        <div className="col-span-1 max-md:hidden"></div>

        {pricingPlans.map((plan, index) => (
          <div key={index} className="text-center">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-zinc-100">{plan.name}</h3>
            <Button asChild className="w-full bg-[#A67C52] hover:bg-[#8B5E3C] text-white shadow-sm transition-all duration-300 active:scale-95">
              <a href={plan.button.href} target="_blank" rel="noopener noreferrer">
                {plan.button.text}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSections = ({ selectedPlan }: { selectedPlan: number }) => (
  <>
    {comparisonFeatures.map((section, sectionIndex) => (
      <div key={sectionIndex} className="">
        <div className="border-b border-gray-200 dark:border-zinc-800 py-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-100">{section.category}</h3>
        </div>
        {section.features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            className="text-foreground grid grid-cols-2 font-medium max-md:border-b max-md:border-gray-100 dark:max-md:border-zinc-900 md:grid-cols-4 hover:bg-gray-50/50 dark:hover:bg-zinc-900/30 transition-colors px-2"
          >
            <span className="inline-flex items-center py-4 text-gray-600 dark:text-zinc-400">
              {feature.name}
            </span>
            {/* Mobile View - Only Selected Plan */}
            <div className="md:hidden">
              <div className="flex items-center gap-1 py-4">
                {renderFeatureValue(
                  [feature.free, feature.startup, feature.enterprise][
                    selectedPlan
                  ],
                )}
              </div>
            </div>
            {/* Desktop View - All Plans */}
            <div className="hidden md:col-span-3 md:grid md:grid-cols-3 md:gap-4">
              {[feature.free, feature.startup, feature.enterprise].map(
                (value, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 border-b border-gray-100 dark:border-zinc-900 py-4"
                  >
                    {renderFeatureValue(value)}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    ))}
  </>
);
