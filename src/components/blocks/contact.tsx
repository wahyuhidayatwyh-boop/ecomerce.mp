import React from "react";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Kantor & Domisili Tim",
    content: (
      <p className="text-muted-foreground mt-3">
        Purwokerto, Banyumas, Jawa Tengah
        <br />
        Siap melayani seluruh Indonesia
      </p>
    ),
  },
  {
    title: "Email Kami",
    content: (
      <div className="mt-3">
        <div>
          <p className="text-sm font-medium">Konsultasi Proyek</p>
          <Link
            href="mailto:hellomyportofolio@gmail.com"
            className="text-muted-foreground hover:text-foreground"
          >
            hellomyportofolio@gmail.com
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Hubungi Kami",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link 
          href="https://instagram.com/my_portofolio.id" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#E4405F] transition-colors flex flex-col items-center gap-1"
        >
          <Instagram className="size-6" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Instagram</span>
        </Link>
        <Link
          href="https://wa.me/6283843653251?text=Halo%20Admin%20MyPortofolio!%20%F0%9F%91%8B%20Saya%20baru%20saja%20melihat%20website%20kakak%20dan%20tertarik%20ingin%20buat%20portofolio%20juga.%20Boleh%20tanya-tanya%20dulu%20soal%20prosedurnya%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-[#25D366] transition-colors flex flex-col items-center gap-1"
        >
          <MessageCircle className="size-6" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">WhatsApp</span>
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Hubungi Kami
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Ceritakan kebutuhan website portofolio kamu, tim kami bantu susun
          konsep, desain, dan implementasinya.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Konsultasi Proyek</h2>
          <ContactForm />
          
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4 w-full">
              <div className="h-px flex-1 bg-border" />
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Atau Hubungi Langsung</p>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <Button asChild className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold gap-2 shadow-lg shadow-green-500/20">
              <Link
                href="https://wa.me/6283843653251?text=Halo%20Admin%20MyPortofolio!%20%F0%9F%91%8B%20Saya%20baru%20saja%20melihat%20website%20kakak%20dan%20tertarik%20ingin%20buat%20portofolio%20juga.%20Boleh%20tanya-tanya%20dulu%20soal%20prosedurnya%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Konsultasi dengan Admin via WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
