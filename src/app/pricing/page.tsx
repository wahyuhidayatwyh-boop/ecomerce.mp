import type { Metadata } from "next";
import React from "react";

import { Background } from "@/components/background";
import { Pricing } from "@/components/blocks/pricing";
import { PricingTable } from "@/components/blocks/pricing-table";

export const metadata: Metadata = {
  title: "Paket & Harga",
  description: "Daftar paket harga jasa pembuatan website portofolio profesional yang terjangkau untuk mahasiswa, freelancer, dan profesional.",
  alternates: {
    canonical: "/pricing",
  },
};

const Page = () => {
  return (
    <Background>
      <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
      <PricingTable />
    </Background>
  );
};

export default Page;
