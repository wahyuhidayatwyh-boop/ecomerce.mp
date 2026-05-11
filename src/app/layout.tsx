import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#A67C52",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://myportofolio.store"),
  title: {
    default: "My Portofolio - Jasa Website Portofolio & Web Developer Indonesia",
    template: "%s | My Portofolio",
  },
  description:
    "Jasa pembuatan website portofolio profesional untuk personal brand, freelancer, programmer, dan kreator. Website cepat, SEO friendly, dan desain premium.",
  keywords: [
    "myportofolio",
    "portofolio",
    "portfolio web developer",
    "portfolio programmer indonesia",
    "jasa website portofolio",
    "jasa bikin portofolio online",
    "website portofolio profesional",
    "jasa personal branding website",
    "portfolio website indonesia",
  ],
  authors: [{ name: "My Portofolio", url: "https://myportofolio.store" }],
  creator: "My Portofolio",
  publisher: "My Portofolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://myportofolio.store",
    title: "My Portofolio - Jasa Website Portofolio & Web Developer Indonesia",
    description:
      "Website portofolio profesional untuk menampilkan karya, layanan, dan profil bisnis kamu agar lebih dipercaya klien.",
    siteName: "My Portofolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Portofolio - Jasa Website Portofolio Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portofolio - Jasa Website Portofolio & Web Developer Indonesia",
    description:
      "Website portofolio profesional untuk menampilkan karya, layanan, dan profil bisnis kamu.",
    images: ["/og-image.jpg"],
    creator: "@myportofolio",
  },
  verification: {
    google: "google-site-verification-id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <base target="_blank"/>
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

