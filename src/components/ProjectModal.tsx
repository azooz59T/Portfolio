import React from "react";
import { ExternalLink, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface Technology {
  name: string;
  color: string;
}

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    thumbnail: string;
    images?: string[];
    technologies: Technology[];
    liveUrl?: string;
    githubUrl?: string;
    challenges?: string[];
    solutions?: string[];
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart and checkout functionality.",
    longDescription:
      "This project is a comprehensive e-commerce solution built with React and Node.js. It features product listings, search functionality, user authentication, shopping cart, payment processing with Stripe, and order management. The application is fully responsive and provides an intuitive shopping experience across all devices.",
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
    ],
    technologies: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "MongoDB", color: "bg-green-700" },
      { name: "Stripe", color: "bg-purple-500" },
      { name: "Tailwind CSS", color: "bg-cyan-500" },
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    challenges: [
      "Implementing secure payment processing",
      "Building a responsive UI that works across all devices",
      "Optimizing database queries for performance",
    ],
    solutions: [
      "Integrated Stripe API with custom hooks for payment management",
      "Used Tailwind CSS with custom breakpoints for responsive design",
      "Implemented database indexing and query caching",
    ],
  },
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = project.images || [project.thumbnail];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl bg-white overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600 mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {/* Image Gallery */}
        <div className="relative mt-4 rounded-lg overflow-hidden bg-gray-100">
          <div className="aspect-video relative">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {images.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          )}

          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-2 p-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-gray-300"}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Long Description */}
        {project.longDescription && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">About this project</h3>
            <p className="text-gray-700">{project.longDescription}</p>
          </div>
        )}

        {/* Technologies */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-white text-sm ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges and Solutions */}
        {(project.challenges?.length || project.solutions?.length) && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challenges?.length && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.solutions?.length && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <DialogFooter className="mt-6 flex justify-end gap-4">
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={16} />
                View Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Globe size={16} />
                Live Demo
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
