import { DashedLine } from "@/components/dashed-line";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative z-10 flex max-w-5xl flex-col justify-between gap-12 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Tentang Kami
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            myportofolio.store: <span className="text-primary">Bikin Karier Mahasiswa</span> Dimulai dari Sini
          </h1>

          <p className="text-muted-foreground mt-8 text-xl md:text-2xl leading-relaxed max-w-2xl">
            Dunia perkuliahan itu seru, tapi dunia kerja? Itu tantangan beda lagi. Kami percaya kalau mahasiswa nggak boleh cuma bermodal IPK tinggi.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cerita Kami</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dibentuk tepat pada 1 Mei 2026 oleh Wahyu Hidayat, myportofolio.store lahir dari sebuah keresahan simpel: banyak mahasiswa berbakat yang bingung mau pamer karya di mana selain di CV yang ngebosenin. Wahyu ingin setiap mahasiswa punya "rumah digital" yang bikin rekruter atau klien langsung bilang, "Wah, ini dia orangnya!"
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col justify-center pt-10 lg:pt-0 lg:pl-10">
          <div className="relative aspect-square w-full max-w-[400px] mx-auto">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-6 scale-95 border border-primary/10"></div>
            <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-3 scale-95 border border-primary/10"></div>
            <div className="relative h-full w-full bg-background rounded-3xl border border-border p-8 flex flex-col justify-center items-center text-center shadow-2xl shadow-primary/10">
               <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="M2 12h20"/><path d="m4.93 19.07 14.14-14.14"/></svg>
               </div>
               <h3 className="text-2xl font-bold mb-2">Level Up Your Profile</h3>
               <p className="text-muted-foreground">Start your career with a professional portfolio that stands out.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


