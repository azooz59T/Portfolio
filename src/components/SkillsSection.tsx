import React from "react";
import { Progress } from "./ui/progress";

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
  title?: string;
  description?: string;
}

const SkillsSection = ({
  skills = [
    { name: "React", proficiency: 70, category: "Frontend" },
    { name: "TypeScript", proficiency: 85, category: "Frontend" },
    { name: "PHP Laravel", proficiency: 80, category: "Backend" },
    { name: "C# .NET", proficiency: 75, category: "Backend" },
    { name: "MYSQL", proficiency: 70, category: "Database" },
    { name: "Microsoft SQL Server", proficiency: 65, category: "Database" },
    { name: "GraphQL", proficiency: 60, category: "API" },
    { name: "Docker", proficiency: 75, category: "DevOps" },
    { name: "AWS", proficiency: 35, category: "Cloud" },
    { name: "Git", proficiency: 85, category: "Tools" },
    { name: "Tailwind CSS", proficiency: 80, category: "Frontend" },
    { name: "REST", proficiency: 75, category: "API" },
  ],
  title = "Technical Skills",
  description = "A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.",
}: SkillsSectionProps) => {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {},
  );

  // Get unique categories
  const categories = Object.keys(skillsByCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-6">
                {skillsByCategory[category].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
