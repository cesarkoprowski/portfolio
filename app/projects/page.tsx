import PageWrapper from "@/components/PageWrapper";
import { ProjectsDisplay } from "@/components/ProjectsDisplay";

export const metadata = {
  title: "Cesk. | Projetos",
};

export default function Projects() {
  return (
    <PageWrapper background="./projectspage_bg.png">
      <div className="flex items-center justify-center w-full">
        <ProjectsDisplay />
      </div>
    </PageWrapper>
  );
}
