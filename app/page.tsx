import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
  title: "Cesk.",
};

export default function Home() {
  return (
    <PageWrapper background="./homepage_bg.png">
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto max-h-100 text-center md:text-left">
        {/* Coluna de Texto */}
        <div className="w-full md:w-auto lg:pl-3">
          <h1 className="flex flex-row items-center justify-center md:justify-start text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            <span className="text-white pr-2">I&apos;m</span>
            <span
              className="
                  font-medium
                  bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500
                  bg-clip-text text-transparent
                  bg-[size:400%_auto]
                  animate-text-gradient
                "
            >
              Cesar Koprowski
            </span>
            <span className="text-white">.</span>
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-4">
            A Full-Stack Developer
          </h2>
          <div className="pt-5 px-4 md:px-0 md:pr-4">
            <span className="text-white text-base lg:text-lg">
              A developer driven by a passion for solving complex problems. My
              background in Systems Analysis allows me to bridge the gap between
              technical requirements and intuitive user experiences
            </span>
          </div>

          <div className="pt-5">
            <Button
              asChild
              className="
                  w-30 h-10 
                  text-white text-lg 
                  cursor-pointer
                  font-medium
                  rounded-md 
                  transition-all duration-500 ease-in-out
                  bg-gradient-to-r from-emerald-500 to-cyan-500 
                  bg-[length:200%_auto] 
                  hover:bg-[position:right_center]
                "
            >
              <Link href="/cv-en.pdf" download="cv-en.pdf" target="_blank">
                Resume
              </Link>
            </Button>
          </div>
        </div>

        {/* Coluna da Imagem */}
        <div className="mt-8 md:mt-0">
          <Image
            src="./picture.png"
            alt="My Picture"
            className="
                w-[300px] h-[300px] 
                md:w-[400px] md:h-[400px] 
                lg:w-[500px] lg:h-[500px] 
                object-contain [mask-image:linear-gradient(to_bottom,black_30%,transparent)]
              "
            width={500}
            height={500}
            draggable={false}
            priority
          />
        </div>
      </div>
    </PageWrapper>
  );
}
