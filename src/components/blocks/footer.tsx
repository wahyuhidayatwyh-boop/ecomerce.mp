import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Layanan", href: "/#feature-modern-teams" },
    { name: "Tentang", href: "/about" },
    { name: "Harga", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontak", href: "/contact" },
  ];

  const social = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [{ name: "Kebijakan Privasi", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Siap Punya Website Portofolio Profesional?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Kami bantu kamu menampilkan karya, layanan, dan value bisnis dalam
          website portofolio yang lebih meyakinkan.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/contact">Mulai Konsultasi</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Copyright {new Date().getFullYear()} My Portofolio. Seluruh hak cipta
          dilindungi.
        </p>
      </nav>
      
    </footer>
  );
}

