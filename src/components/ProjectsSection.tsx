import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  images?: string[];
  technologies: { name: string; color: string }[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  solutions?: string[];
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "A showcase of my recent work and personal projects",
  projects = [
    {
      id: "1",
      title: "Recruitment Software",
      description:
        "A Recruitment Website that allows hiring managers or agencies to view, assess and match candidates with relative job openings.",
      longDescription:
        "This Project utilizes advanced ASP.NET core API for the backend and TypeScript and React.js for the front-end to create a seamless and elegant recruitment web application that facilitates and aid hiring agents to allocate the right job to the right person. It features Jobs, Candidates and Company entities for the user to create a company and along with its corresponding job and allows to store and retrieve the CVs and Cover-letters for each candidate. The application is fully responsive and provides multiple features across all devices. (please note the view code button links to the backend repository to view the front end code please head to https://github.com/azooz59T/recruitment-project-frontend) !",
      thumbnail:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
      ],
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "TypeScript", color: "bg-green-500" },
        { name: "Microsoft SQL Server", color: "bg-green-700" },
        { name: "ASP.NET Core 7.0", color: "bg-purple-500" },
        { name: "Material UI", color: "bg-cyan-500" },
      ],
      category: ".NET",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/azooz59T/Recruitment-Project-Backend",
    },
    {
      id: "2",
      title: "Shopping list web application",
      description:
        "A Todo shopping list to keep track and manage user's items",
      longDescription:
        "A simple Laravel shopping list built using PHP Laravel, MySQL, JavaScript, Tailwind CSS, and Bootstrap that allows the user to manage and keep track of their shopping items. Basic functionality includes adding Name, Description, Quantity, Price, and Ticked (cross it off the list) attributes for each item. The user is also able to set a maximum budget for the shopping list to not exceed a fixed total price. There are other miscellaneous features such as dragging and dropping items from the list to prioritize them. And finally, the project comes with simple unit testing to help ensure code quality.",
      thumbnail:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      ],
      technologies: [
        { name: "PHP-Laravel", color: "bg-blue-500" },
        { name: "Tailwind CSS", color: "bg-yellow-500" },
        { name: "JavaScript", color: "bg-purple-600" },
        { name: "MySQL", color: "bg-blue-400" },
      ],
      category: "Laravel",
      liveUrl: "https://example.com/tasks",
      githubUrl: "https://github.com/azooz59T/Shopping-List",
    },
    {
      id: "3",
      title: "Birthday Cake Tracker",
      description:
        "A Birthday Cake Tracker designed to keep track of developer's birthdays and cake.",
      longDescription:
        "Everyone deserves to celebrate their birthday with cake, this small Larave/Vue application allows you to track developer's birthday and cakes following a set of rules such that a small cake is provided on the employee’s first working day after their birthday and all employees get their birthday off, and there is never more than one cake per day with additional rules that can be viewed in the repository's README file.",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1663839412015-a47e43df7d2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://plus.unsplash.com/premium_photo-1663839412015-a47e43df7d2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1604413191066-4dd20bedf486?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      technologies: [
        { name: "PHP-Laravel", color: "bg-yellow-400" },
        { name: "Vue.js", color: "bg-blue-300" },
        { name: "MySQL", color: "bg-pink-500" },
        { name: "Tailwind CSS", color: "bg-green-400" },
      ],
      category: "Laravel",
      liveUrl: "https://example.com/weather",
      githubUrl: "https://github.com/azooz59T/BirthdayCake",
    },
    {
      id: "4",
      title: "MvcMovie Application",
      description:
        "An IMDB like application to list and rate your favorite movies.",
      longDescription:
        "This is my first and simplest C# application to record your favorite movies with basic data such as Title, Release date, genre and more information, The Application uses the Model-View-Controller software architectural pattern and Entity Framework on Microsoft SQL Server ",
      thumbnail:
        "https://images.unsplash.com/photo-1583719444869-7e9c79d697e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1583719444869-7e9c79d697e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1694705268819-80fcf37e35ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      technologies: [
        { name: "ASP.NET Core 7.0", color: "bg-blue-500" },
        { name: "Razor", color: "bg-gray-800" },
        { name: "Microsoft SQL Server", color: "bg-yellow-500" },
      ],
      category: ".NET",
      liveUrl: "https://example.com/fitness",
      githubUrl: "https://github.com/azooz59T/MvcMovie",
    },
  ],
}: ProjectsSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Extract unique categories from projects
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on search term and active category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search input */}
            <div className="relative w-full md:w-64">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category filter */}
            <div className="w-full md:w-auto">
              <Tabs
                defaultValue="all"
                value={activeCategory}
                onValueChange={setActiveCategory}
              >
                <TabsList className="w-full md:w-auto overflow-x-auto flex whitespace-nowrap">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="capitalize"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.thumbnail}
                  technologies={project.technologies.map((tech) => tech.name)}
                  demoUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">
              No projects found matching your criteria.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("all");
              }}
            >
              <Filter className="mr-2 h-4 w-4" /> Clear Filters
            </Button>
          </div>
        )}

        {selectedProject && (
          <ProjectModal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
