import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { withBasePath } from "@/lib/utils";

const Signup = () => {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Card className="mx-auto w-full max-w-sm">
              <CardHeader className="flex flex-col items-center space-y-0">
                <Image
                  src={withBasePath("/logo.svg")}
                  alt="My Portofolio logo"
                  width={190}
                  height={24}
                  className="mb-7 dark:invert"
                />
                <p className="mb-2 text-2xl font-bold">Mulai sekarang</p>
                <p className="text-muted-foreground">
                  Daftar kurang dari 2 menit.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input type="text" placeholder="Masukkan nama" required />
                  <Input type="email" placeholder="Masukkan email" required />
                  <div>
                    <Input
                      type="password"
                      placeholder="Masukkan kata sandi"
                      required
                    />
                    <p className="text-muted-foreground mt-1 text-sm">
                      Minimal 8 karakter.
                    </p>
                  </div>
                  <Button type="submit" className="mt-2 w-full">
                    Buat akun
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 size-5" />
                    Daftar dengan Google
                  </Button>
                </div>
                <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                  <p>Sudah punya akun?</p>
                  <Link href="/login" className="text-primary font-medium">
                    Masuk
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Background>
  );
};

export default Signup;


