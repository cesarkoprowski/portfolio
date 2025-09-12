import { ProjectCard, Project } from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "ZooMind",
    description:
      "The proposal focuses on frontend development, with an emphasis on applying backend logic using JavaScript and data flow from a decision tree structure.",
    image: "./zoomind_logo.png",
    tags: ["Javascript", "HTML", "CSS"],
    link: "https://cesarkoprowski.github.io/decision-tree/",
    github: "https://github.com/cesarkoprowski/decision-tree",
  },
  {
    id: 2,
    title: "Linux Controller",
    description:
      "A Python-based project that provides an intuitive graphical interface to simplify the execution of Linux commands.",
    image: "./linuxcontroller_sample.png",
    tags: ["Python", "Linux"],
    github: "https://github.com/cesarkoprowski/linux-controller",
  },
  {
    id: 3,
    title: "POQG",
    description:
      "A simple e-commerce platform for buying and selling Pokémon TCG cards. Built with PokeAPI for real-time card data.",
    image: "./poqg_logo.png",
    tags: ["Vue.js", "TypeScript", "Python", "MySQL"],
    link: "disabled",
    github: "https://github.com/bytecortex/pokemon-tcg",
  },
];

function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export function ProjectsDisplay() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <ProjectsGrid />
    </div>
  );
}
