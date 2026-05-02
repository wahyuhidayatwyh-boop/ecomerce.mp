import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "Rp 100.000",
    description: "Solusi dasar untuk mulai membangun kehadiran digital Anda.",
    features: [
      "Hingga 5 Halaman Website",
      "Hingga 6 Proyek Ditampilkan",
      "Desain UI Kustom",
      "Optimasi SEO Dasar",
      "Hosting Gratis (.vercel.app / .netlify.app)",
      "Masa Support 14 Hari",
    ],
    buttonText: "Konsultasi",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "Mulai Rp 250.000",
    description: "Sempurna untuk profesional yang ingin ekspansi portofolio.",
    badge: "Terlaris",
    features: [
      "Hingga 10 Halaman Website",
      "Hingga 20 Proyek Ditampilkan",
      "Halaman Studi Kasus",
      "Integrasi Form Leads",
      "Copywriting Halaman",
      "Hosting Gratis (.vercel.app / .netlify.app)",
      "Masa Support 30 Hari",
      "Pelatihan Penggunaan",
    ],
    buttonText: "Konsultasi",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "Fitur lengkap dan dukungan prioritas untuk skala besar.",
    features: [
      "Domain Premium & Hosting Berbayar",
      "Custom Jumlah Halaman",
      "Unlimited Proyek Ditampilkan",
      "Panel Manajemen Konten (CMS)",
      "Integrasi Booking Meeting",
      "Technical Account Manager",
      "SLA Prioritas",
      "Masa Support 90 Hari",
    ],
    buttonText: "Jadwalkan Meeting",
    highlighted: false,
  },
];

export function Pricing({ className }: { className?: string }) {
  return (
    <section className={cn("py-24 sm:py-32 relative overflow-hidden transition-colors duration-500", className)}>
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#A67C52 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
            Paket Website Portofolio Profesional
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 font-sans md:text-xl">
            Solusi portofolio modern, cepat, dan responsif untuk meningkatkan personal branding Anda di hadapan klien.
          </p>
        </div>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "group relative flex flex-col justify-between rounded-[2rem] bg-white dark:bg-zinc-900/50 p-8 ring-1 ring-gray-200 dark:ring-zinc-800 xl:p-10 transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(166,124,82,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
                tier.highlighted ? "lg:z-10 ring-2 ring-[#A67C52] lg:scale-105" : "lg:mt-8"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#A67C52] text-white px-6 py-1.5 text-[10px] font-bold tracking-[0.1em] rounded-full shadow-lg">
                  {tier.badge}
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-zinc-100">
                    {tier.name}
                  </h3>
                </div>
                
                <div className="mt-4 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-[#A67C52]">
                    {tier.price}
                  </span>
                </div>
                
                <p className="mt-2 text-xs text-gray-500 dark:text-zinc-400 italic">
                  {tier.description}
                </p>

                <div className="mt-6 h-px bg-gray-100 dark:bg-zinc-800" />

                <div className="mt-6 space-y-6">
                  {/* Kapasitas Proyek */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-3">Kapasitas Proyek</h4>
                    <ul className="space-y-2 text-sm leading-6 text-gray-600 dark:text-zinc-400">
                      <li className="flex gap-x-3 items-start">
                        <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                        <span>{tier.features.find(f => f.includes("Halaman"))}</span>
                      </li>
                      <li className="flex gap-x-3 items-start">
                        <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                        <span>{tier.features.find(f => f.includes("Proyek Ditampilkan")) || tier.features.find(f => f.includes("Unlimited Proyek"))}</span>
                      </li>
                      {tier.features.includes("Halaman Studi Kasus") && (
                        <li className="flex gap-x-3 items-start">
                          <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                          <span>Halaman Studi Kasus</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Fitur Utama */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Fitur Utama</h4>
                    <ul className="space-y-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {tier.name === "Starter" && (
                        <>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>Desain UI Kustom</span>
                          </li>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>Optimasi SEO Dasar</span>
                          </li>
                        </>
                      )}
                      {tier.name === "Growth" && (
                        <>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>Integrasi Form Leads</span>
                          </li>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>Copywriting Halaman</span>
                          </li>
                        </>
                      )}
                      {tier.name === "Scale" && (
                        <>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>Panel Manajemen Konten (CMS)</span>
                          </li>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>Integrasi Booking Meeting</span>
                          </li>
                        </>
                      )}
                      <li className="flex gap-x-3 items-start">
                        <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                        <span className="font-medium text-gray-900 dark:text-zinc-100">
                          {tier.name === "Scale" ? "Domain Premium & Hosting" : "Hosting Gratis (Vercel/Netlify)"}
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Dukungan */}
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-3">Dukungan</h4>
                    <ul className="space-y-2 text-sm leading-6 text-gray-600 dark:text-zinc-400">
                      <li className="flex gap-x-3 items-start">
                        <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                        <span>Support {tier.features.find(f => f.includes("Masa Support"))?.split("Masa Support ")[1]}</span>
                      </li>
                      {tier.features.includes("Pelatihan Penggunaan") && (
                        <li className="flex gap-x-3 items-start">
                          <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                          <span>Pelatihan Penggunaan</span>
                        </li>
                      )}
                      {tier.name === "Scale" && (
                        <>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>Technical Account Manager</span>
                          </li>
                          <li className="flex gap-x-3 items-start">
                            <Check className="h-4 w-4 mt-1 text-[#A67C52] shrink-0" aria-hidden="true" />
                            <span>SLA Prioritas</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              
              <Button
                asChild
                className={cn(
                  "mt-10 w-full h-12 md:h-14 rounded-xl text-base font-bold transition-all duration-300 active:scale-95 gap-2",
                  tier.highlighted 
                    ? "bg-[#A67C52] text-white hover:bg-[#8B5E3C] shadow-[0_10px_20px_-5px_rgba(166,124,82,0.4)]" 
                    : "bg-white dark:bg-zinc-800/50 border-2 border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white shadow-sm"
                )}
              >
                <a 
                  href={
                    tier.name === "Starter" 
                      ? "https://wa.me/6283843653251?text=Halo%20Admin!%20Saya%20tertarik%20dengan%20Paket%20Starter%20(100rb).%20Saya%20sudah%20lihat%20katalognya%20dan%20ingin%20pakai%20Kode%20Desain%3A%20%5BIsi%20Kode%5D.%20Apa%20saja%20data%20yang%20perlu%20saya%20siapkan%3F"
                      : tier.name === "Growth"
                      ? "https://wa.me/6283843653251?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20Paket%20Growth%20(Mulai%20250rb).%20Saya%20butuh%20fitur%20halaman%20studi%20kasus%20dan%20copywriting.%20Bisa%20bantu%20jelaskan%20prosedurnya%3F"
                      : "https://wa.me/6283843653251?text=Halo!%20Saya%20ingin%20mendiskusikan%20kebutuhan%20website%20portofolio%20skala%20besar%20(Paket%20Scale).%20Saya%20butuh%20hosting%20berbayar%20dan%20fitur%20CMS.%20Kapan%20ada%20waktu%20untuk%20jadwal%20diskusi%20lebih%20lanjut%3F"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="size-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.632 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {tier.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
