import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "ecomerce.mp";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  // output: "export", // Hapus atau comment baris ini untuk Netlify agar Server Actions bisa jalan
};
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
