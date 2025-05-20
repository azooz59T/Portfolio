import React from "react";
import { Button } from "./ui/button";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  copyrightName?: string;
  year?: number;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const Footer = ({
  copyrightName = "John Doe",
  year = new Date().getFullYear(),
  socialLinks = {
    github: "https://github.com/azooz59T",
    linkedin: "https://www.linkedin.com/in/mohamed-bayomy-9a9583222/",
    email: "mohamedoo1997@hotmail.com",
  },
}: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-background border-t py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {year} {copyrightName}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}
          {socialLinks.email && (
            <a
              href={socialLinks.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="rounded-full"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
