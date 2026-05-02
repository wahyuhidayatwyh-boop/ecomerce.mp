import Image from "next/image";
import { DashedLine } from "../dashed-line";
import { cn, withBasePath } from "@/lib/utils";

const topItems = [
  {
    title: "Mulai Pendaftaran",
    description:
      "Klik tombol Isi Formulir di halaman kontak untuk memulai proses pesanan Anda.",
    images: [
      {
        src: "/resource-allocation/templates.png",
        alt: "Antarmuka template proyek",
        width: 495,
        height: 186,
      },
    ],
    className: "md:col-span-3",
    fade: [""],
  },
  {
    title: "Isi Data Form",
    description:
      "Pilih paket (Starter/Growth/Scale) dan isi detail profil serta karya yang ingin ditampilkan.",
    images: [
      {
        src: "/resource-allocation/pendaftaran.png",
        alt: "Tampilan portofolio digital",
        width: 305,
        height: 280,
      },
    ],
    className: "md:col-span-2",
    fade: ["bottom"],
  },
];

const bottomItems = [
  {
    title: "Selesaikan Pembayaran",
    description:
      "Lakukan transfer sesuai harga paket melalui BRI atau QRIS DANA yang tersedia di akhir form.",
    images: [
      {
        src: "/resource-allocation/pembayaran.png",
        alt: "Tampilan portofolio digital",
        width: 305,
        height: 280,
      },
    ],
    className: "",
    fade: ["bottom"],
  },
  {
    title: "Submit & Simpan Bukti",
    description:
      "Setelah kirim form, Anda akan menerima pesan konfirmasi bahwa data telah masuk ke sistem kami.",
    images: [
      {
        src: "/resource-allocation/submit.png",
        alt: "Tampilan diskusi proyek",
        width: 320,
        height: 103,
      },
    ],
    className: "",
    fade: [""],
  },
  {
    title: "Konfirmasi ke WhatsApp",
    description:
      "Klik link WhatsApp di halaman akhir untuk chat admin agar pesanan Anda langsung diprioritaskan.",
    images: [
      {
        src: "/resource-allocation/konfirmasi.png",
        alt: "Tampilan notifikasi sistem",
        width: 305,
        height: 280,
      },
    ],
    className: "",
    fade: ["bottom"],
  },
];

export const ResourceAllocation = () => {
  return (
    <section className="py-24 overflow-hidden bg-[#FFFEFA] dark:bg-transparent transition-colors duration-500">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-5xl md:text-6xl mb-20">
          5 Langkah Mudah Miliki Website Portofolio
        </h2>

        <div className="border border-dashed border-gray-300 dark:border-zinc-800 rounded-3xl overflow-hidden backdrop-blur-sm">
          {/* Top Row: 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {topItems.map((item, i) => (
              <Item 
                key={`top-${i}`} 
                item={item} 
                isLast={i === topItems.length - 1} 
                className={cn(i === 0 ? "md:border-r" : "")}
              />
            ))}
          </div>

          {/* Bottom Row: 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-dashed border-gray-300 dark:border-zinc-800">
            {bottomItems.map((item, i) => (
              <Item 
                key={`bottom-${i}`} 
                item={item} 
                isLast={i === bottomItems.length - 1} 
                className={cn(i < 2 ? "md:border-r" : "")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col p-10 md:p-12 border-b border-dashed border-gray-300 dark:border-zinc-800 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 transition-colors",
        className,
        item.className,
      )}
    >
      <div className="mb-10 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">{item.title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed lg:text-lg">
          {item.description}
        </p>
      </div>

      <div className="mt-auto relative flex items-center justify-center min-h-[220px]">
        {item.images.map((image, j) => (
          <div key={j} className="relative group transition-transform duration-500 hover:scale-105">
            <Image
              src={withBasePath(image.src)}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={cn(
                "object-contain max-h-[260px] w-auto drop-shadow-2xl rounded-xl border border-gray-100 dark:border-zinc-800 p-2 transition-colors duration-500",
                item.title.includes("Submit") ? "max-h-[140px]" : ""
              )}
            />
            {item.fade.includes("bottom") && (
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-zinc-950/20 to-transparent pointer-events-none" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
