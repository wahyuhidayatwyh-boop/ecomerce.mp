import Image from "next/image";
import { cn, withBasePath } from "@/lib/utils";
import { Sparkles, Briefcase, Zap } from "lucide-react";
import { PortfolioCards } from "@/components/blocks/portfolio-cards";

const reasons = [
  {
    title: "Aesthetic & Pro",
    description: "Nggak cuma rapi, tapi punya karakter. Desain yang memikat mata sekaligus profesional.",
    icon: Sparkles,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    title: "Siap Kerja",
    description: "Struktur yang disukai HRD dan perusahaan multinasional. Fokus pada apa yang mereka cari.",
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Nggak Ribet",
    description: "Kamu fokus belajar, biar kami yang urus teknisnya. Dari domain sampai hosting, beres!",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
];

const team = [
  {
    name: "Wahyu Hidayat",
    role: "Developer & Founder",
    description: "Wahyu adalah orang yang memastikan website portofolio kamu anti-lemot dan responsif di semua perangkat. Dia yang membangun pondasi teknis di myportofolio.store agar karya-karyamu bisa diakses kapan saja tanpa kendala.",
    image: "/about/wahyu.png",
  },
  {
    name: "Merliana C.A",
    role: "Design Lead",
    description: "Desain itu soal rasa. Merliana bertugas memastikan portofolio kamu punya visual yang 'mahasiswa banget' tapi tetep elegan. Dia yang bakal meramu warna, layout, dan tipografi supaya identitas kamu terpancar lewat layar.",
    image: "/about/merli.png",
  },
  {
    name: "Aulia Rahman Pasaribu",
    role: "Marketing & Branding",
    description: "Aulia adalah orang yang bakal kasih tahu kamu cara 'menjual' diri secara profesional. Dia memastikan setiap kata dan elemen di portofoliomu punya nilai jual (branding) yang kuat, supaya kamu nggak cuma sekadar punya website, tapi punya alat buat dapet kerjaan.",
    image: "/about/rahman.png", // Placeholder path
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-24 py-20 lg:py-32">
      {/* Why Us Section */}
      <section className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-6">Kenapa Harus di Sini?</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Kita tahu kantong mahasiswa dan kita tahu standar industri. Kami bantu kamu mengemas semua pengalaman kampus jadi portofolio yang:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300", reason.bgColor)}>
                <reason.icon className={cn("w-7 h-7", reason.color)} />
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container max-w-5xl">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">The Squad: Kakak Tingkat yang Siap Bantu Kamu</h2>
            <p className="text-muted-foreground text-lg md:text-xl">
              Di balik setiap pixel website kamu, ada tim yang sudah "makan asam garam" di bidangnya:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col gap-8 md:flex-row md:items-center",
                  index % 2 === 1 && "md:flex-row-reverse"
                )}
              >
                <div className="relative aspect-[4/5] w-full md:w-[350px] shrink-0 overflow-hidden rounded-3xl bg-muted border border-border shadow-lg">
                  {member.image.includes("aulia") ? (
                    <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/20">
                       <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                  ) : (
                    <Image
                      src={withBasePath(member.image)}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">{member.role}</span>
                    <h3 className="text-3xl font-bold">{member.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Visi Section */}
      <section className="container max-w-5xl">
        <div className="rounded-[40px] bg-foreground text-background p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold md:text-5xl mb-8">Visi Kami untuk Kamu</h2>
            <p className="text-xl md:text-2xl text-background/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              Target kami cuma satu: Melihat kamu sukses di dunia kerja. Kami ingin myportofolio.store jadi langkah pertama kamu dari seorang mahasiswa menjadi seorang profesional muda yang diperhitungkan.
            </p>
            <div className="flex flex-col items-center gap-4">
               <div className="text-2xl font-bold tracking-tight">myportofolio.store</div>
               <div className="text-primary font-medium">Level up your profile, start your career.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


