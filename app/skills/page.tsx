import PageWrapper from "@/components/PageWrapper";
import InfiniteLogoCarousel from "@/components/InfiniteLogoCarousel";

export const metadata = {
  title: "My Skills.",
};

export default function Skills() {
  return (
    <PageWrapper background="./skillspage_bg.png">
      <div className="items-center flex justify-center mb-10 sm:mb-15 md:mb-20 lg:mb-25">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4">
          My Tech Skills
        </h1>
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
        <InfiniteLogoCarousel />
        <InfiniteLogoCarousel reverse={true} />
      </div>
    </PageWrapper>
  );
}
