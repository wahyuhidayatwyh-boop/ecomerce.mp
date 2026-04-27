import React from "react";

import Link from "next/link";

import { Facebook, Linkedin, Twitter } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Kantor & Domisili Tim",
    content: (
      <p className="text-muted-foreground mt-3">
        Jakarta - Bandung (Remote First)
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
          <p className="">Konsultasi Proyek</p>
          <Link
            href="mailto:hello@myportofolio.id"
            className="text-muted-foreground hover:text-foreground"
          >
            hello@myportofolio.id
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Partnership</p>
          <Link
            href="mailto:partnership@myportofolio.id"
            className="text-muted-foreground hover:text-foreground"
          >
            partnership@myportofolio.id
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "Ikuti Kami",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
        >
          <Twitter className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
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

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
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
        </div>
      </div>
    </section>
  );
}

