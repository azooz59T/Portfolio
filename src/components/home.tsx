import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section id="home">
        <HeroSection
          name="Mohamed Bayomy"
          title="Full Stack Developer"
          introduction="I build modern, responsive web applications with a focus on user experience and clean code. Passionate about creating elegant solutions to complex problems."
          backgroundImage="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          socialLinks={{
            github: "https://github.com/azooz59T",
            linkedin: "https://www.linkedin.com/in/mohamed-bayomy-9a9583222/",
          }}
        />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection
          title="My Projects"
          subtitle="A showcase of my recent work and personal projects"
        />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection
          title="Technical Skills"
          description="A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools."
        />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection
          title="About Me"
          subtitle="Software Developer & Problem Solver"
          bio="I'm a highly skilled and results-driven Software Devloper with over 4 years of experience building web applications and developing innovative solutions in C#, PHP (Laravel), and JavaScript. Proven track record in full-stack development using Magento 2, React JavaScript, and SQL Server. Skilled in optimizing workflows, enhancing debugging processes, and maintaining transparent communication with stakeholders."
          photoUrl="https://media.licdn.com/dms/image/v2/D5603AQGWCh7dGj1DFg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683582085846?e=1759363200&v=beta&t=evg2M3n6G_XnInShN6mjs9weasIkBJxVYH4yCiqGY9Q"
        />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer
        copyrightName="Mohamed Bayomy"
        socialLinks={{
          github: "https://github.com/azooz59T",
          linkedin: "https://www.linkedin.com/in/mohamed-bayomy-9a9583222",
          email: "mohamedoo1997@hotmail.com",
        }}
      />
    </div>
  );
};

export default Home;
