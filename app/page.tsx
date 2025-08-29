import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
  title: "Cesk.",
};

export default function Home() {
  return (
    <PageWrapper background="./gradient_bg.png">
      <div className="flex items-center min-h-[calc(100vh-var(--main-padding-y)*2)]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
          {/* Coluna de Texto */}
          <div className="w-250">
            <h1 className="flex items-center">
              <span className="text-white text-6xl pr-4">I'm</span>
              <span
                className="
                  text-6xl font-medium
                  bg-gradient-to-r from-cyan-500 via-emerald-500 to-cyan-500
                  bg-clip-text text-transparent
                  bg-[size:400%_auto]
                  animate-text-gradient
                "
              >
                Cesar Koprowski
              </span>
              <span className="text-white text-6xl">.</span>
            </h1>
            <h2 className="text-white text-4xl md:text-5xl mt-4">
              A Full-Stack Developer
            </h2>
            <div className="pt-5">
              <span className="text-white text-lg">
                A developer driven by a passion for solving complex problems. My
                background in Systems Analysis allows me to bridge the gap
                between technical requirements and intuitive user experiences
              </span>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="mt-8 md:mt-0">
            <Image
              src="./picture.png"
              alt="My Picture"
              className="w-[500px] h-[500px] object-contain [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
              width={500}
              height={500}
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
