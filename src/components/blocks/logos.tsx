import { 
  SiHtml5, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVercel, 
  SiNetlify, 
  SiBootstrap,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa"; // For Antigravity
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Antigravity AI", icon: FaRobot, color: "#A67C52" },
];

export const Logos = () => {
  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            Teknologi & Tools Terbaik
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Saya menggunakan ekosistem teknologi modern untuk memastikan website Anda cepat, aman, dan mudah dikelola.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center gap-8">
          {/* Subtle gradient edges for the marquee */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#FFFDF5] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#FFFDF5] to-transparent pointer-events-none" />

          <Marquee pauseOnHover speed={40} className="py-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mx-12 group transition-all duration-300"
              >
                <tech.icon 
                  className="size-8 md:size-10 text-gray-400 group-hover:text-[var(--hover-color)] transition-colors duration-300" 
                  style={{ "--hover-color": tech.color } as React.CSSProperties}
                />
                <span className="text-lg font-semibold text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
          
          <Marquee pauseOnHover speed={30} direction="right" className="py-4">
            {[...techStack].reverse().map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mx-12 group transition-all duration-300"
              >
                <tech.icon 
                  className="size-8 md:size-10 text-gray-400 group-hover:text-[var(--hover-color)] transition-colors duration-300" 
                  style={{ "--hover-color": tech.color } as React.CSSProperties}
                />
                <span className="text-lg font-semibold text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
