import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

const LOGOS_LIST: Logo[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "react",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    alt: "aws",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    alt: "csharp",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    alt: "dotnet",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    alt: "github",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    alt: "git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    alt: "nextjs",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
    alt: "vuejs",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    alt: "python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    alt: "python",
  },
];

interface InfiniteLogoCarouselProps {
  reverse?: boolean;
}

const InfiniteLogoCarousel = ({
  reverse = false,
}: InfiniteLogoCarouselProps) => {
  const extendedLogos = [
    ...LOGOS_LIST,
    ...LOGOS_LIST,
    ...LOGOS_LIST,
    ...LOGOS_LIST,
  ];

  return (
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={cn(
          "flex w-max animate-scroll hover:[animation-play-state:paused]",
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        )}
      >
        {extendedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              draggable={false}
              className="h-16 w-auto object-contain bg-white/20 rounded-xl p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
