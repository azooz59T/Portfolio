import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  backgroundImage?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
  };
  onViewProjects?: () => void;
}

const HeroSection = ({
  name = "Mohamed Bayomy",
  title = "Full Stack Developer",
  introduction = "I build modern, responsive web applications with a focus on user experience and clean code. Passionate about creating elegant solutions to complex problems.",
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
  socialLinks = {
    github: "https://github.com/azooz59T",
    linkedin: "https://www.linkedin.com/in/mohamed-bayomy-9a9583222/",
  },
  onViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-gray-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {name}
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-blue-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {introduction}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={onViewProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md"
            >
              View My Projects
            </Button>

            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onViewProjects}
          className="text-white"
        >
          <ArrowDown size={24} />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
