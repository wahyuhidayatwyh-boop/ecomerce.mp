import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My Portofolio - Jasa Website Portofolio",
    short_name: "MyPortofolio",
    description: "Jasa pembuatan website portofolio profesional untuk personal brand dan freelancer.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#A67C52",
    icons: [
      {
        src: "/favicon/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
