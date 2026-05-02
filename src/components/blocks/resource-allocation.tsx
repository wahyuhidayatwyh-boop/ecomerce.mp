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
    <section className="py-24 overflow-hidden bg-[#FFFDF5]">
      <div className="container px-4 mx-auto">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-16">
          5 Langkah Mudah Miliki Website Portofolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 border border-dashed border-gray-300 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-sm">
          {/* Top Row: 2 items with 3:2 ratio */}
          {topItems.map((item, i) => (
            <Item key={`top-${i}`} item={item} isLast={i === topItems.length - 1 && bottomItems.length === 0} />
          ))}

          {/* Bottom Row: 3 items equally spaced */}
          {bottomItems.map((item, i) => (
            <Item 
              key={`bottom-${i}`} 
              item={item} 
              isLast={i === bottomItems.length - 1} 
              className="md:col-span-1 border-t border-dashed border-gray-300 md:border-t-0 lg:border-t"
            />
          ))}
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
        "relative flex flex-col p-8 md:p-10 border-b border-dashed border-gray-300 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
        className,
        item.className,
      )}
    >
      <div className="mb-8 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-auto relative flex items-center justify-center min-h-[160px]">
        {item.images.map((image, j) => (
          <div key={j} className="relative group transition-transform duration-500 hover:scale-105">
            <Image
              src={withBasePath(image.src)}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={cn(
                "object-contain max-h-[180px] w-auto drop-shadow-xl rounded-lg border border-gray-100 bg-white p-1",
                item.title.includes("Submit") ? "max-h-[100px]" : ""
              )}
            />
            {item.fade.includes("bottom") && (
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
