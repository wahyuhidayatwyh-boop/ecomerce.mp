import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Card className="mx-auto w-full max-w-sm">
              <CardHeader className="flex flex-col items-center space-y-0">
                <Image
                  src="/logo.svg"
                  alt="My Portofolio logo"
                  width={190}
                  height={24}
                  className="mb-7 dark:invert"
                />
                <p className="mb-2 text-2xl font-bold">Selamat datang kembali</p>
                <p className="text-muted-foreground">
                  Masukkan detail akun kamu untuk lanjut.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input type="email" placeholder="Masukkan email" required />
                  <div>
                    <Input
                      type="password"
                      placeholder="Masukkan kata sandi"
                      required
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        className="border-muted-foreground"
                      />
                      <label
                        htmlFor="remember"
                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Ingat saya
                      </label>
                    </div>
                    <a href="#" className="text-primary text-sm font-medium">
                      Lupa kata sandi
                    </a>
                  </div>
                  <Button type="submit" className="mt-2 w-full">
                    Masuk
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 size-5" />
                    Masuk dengan Google
                  </Button>
                </div>
                <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                  <p>Belum punya akun?</p>
                  <Link href="/signup" className="text-primary font-medium">
                    Daftar
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

export default Login;


