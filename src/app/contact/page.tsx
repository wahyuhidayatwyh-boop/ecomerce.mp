import type { Metadata } from "next";
import React from "react";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi",
  description: "Hubungi My Portofolio untuk konsultasi gratis mengenai pembuatan website portofolio profesional kamu.",
  alternates: {
    canonical: "/contact",
  },
};

const Page = () => {
  return (
    <Background>
      <Contact />
    </Background>
  );
};

export default Page;
