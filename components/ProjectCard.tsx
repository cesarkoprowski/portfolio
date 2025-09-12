import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectDescription from "./ProjectDescription";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative">
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:glass-card-hover">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/0 via-blue-600/0 to-cyan-600/0 group-hover:from-cyan-600/20 group-hover:via-blue-600/20 group-hover:to-cyan-600/20 rounded-2xl blur-lg transition-all duration-700 opacity-0 group-hover:opacity-100" />

        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </div>

          <CardContent className="p-6 relative">
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-gray-100 mb-3 text-balance group-hover:text-blue-200 transition-colors duration-300">
                  {project.title}
                </h3>
                <ProjectDescription
                  text={project.description}
                  maxLength={130}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="text-xs bg-white/20 text-gray-100 border border-white/30 hover:bg-blue-500/40 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-3">
                {project.link && (
                  <Button
                    size="sm"
                    asChild
                    disabled={project.link === "disabled"}
                    className={`
                      flex-1 rounded-md font-medium text-white text-md
                      transition-all duration-300
                      ${
                        project.link === "disabled"
                          ? "bg-gray-500 opacity-60 cursor-not-allowed hover:bg-gray-500"
                          : "cursor-pointer bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:200%_auto] hover:bg-[position:right_center]"
                      }
                    `}
                  >
                    <a
                      href={
                        project.link === "disabled" ? undefined : project.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                )}
                <Button
                  size="sm"
                  asChild
                  className={`
                    bg-white/20 hover:bg-white/30 text-gray-100 border border-white/30
                    hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-sm
                    ${!project.link ? "w-full" : ""} 
                  `}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
