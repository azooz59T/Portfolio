import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing the key features and technologies used.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  demoUrl = "#",
  githubUrl = "#",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <Card
      className="w-full h-full overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg bg-white"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 gap-2">
        {demoUrl && (
          <Button
            variant="default"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              window.open(demoUrl, "_blank");
            }}
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Live Demo
          </Button>
        )}

        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, "_blank");
            }}
          >
            <Github className="mr-1 h-4 w-4" />
            Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
