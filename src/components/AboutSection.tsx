import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  bio?: string;
  photoUrl?: string;
  education?: {
    degree: string;
    institution: string;
    year: string;
  }[];
  experience?: {
    position: string;
    company: string;
    duration: string;
    description: string;
  }[];
  interests?: string[];
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Software Developer & Problem Solver",
  bio = "I'm a passionate software developer with over 5 years of experience building web applications. I specialize in React, TypeScript, and Node.js, with a focus on creating intuitive user experiences and scalable backend solutions. I'm constantly learning new technologies and approaches to stay at the forefront of web development.",
  photoUrl = "https://media.licdn.com/dms/image/v2/D5603AQGWCh7dGj1DFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683582085846?e=1753315200&v=beta&t=apHPwDkmnjbruGOz7d9BqraqLg0e-G4k-4v-VeGYT3g",
  education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Aston University ",
      year: "2021",
    },
    {
      degree: "Adobe Professional Developer",
      institution: "Adobe",
      year: "2023",
    },
  ],
  experience = [
    {
      position: "Programming support officer",
      company: "Aston University",
      duration: "2024 - Present",
      description:
        "Led and enhanced OOP teaching modules at Aston University using Java and PHP, as well as providing technical support for students requiring help developing and maintaining their websites .",
    },
    {
      position: "Full Stack Developer   ",
      company: "Magic 42",
      duration: "2022 - 2023",
      description:
        "Develop and maintain Magento 2 e-commerce websites for multiple clients and Enhanced debugging processes to streamline issue resolution, resulting in improved efficiency. Maintained transparent communication with stakeholders throughout the issue investigation and resolution phases, providing timely status updates  ",
    },
  ],
  interests = [
    "Open Source Contribution",
    "Cloud Computing",
    "Machine Learning",
    "Swimming",
    "History",
  ],
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Photo and Bio */}
          <div className="md:col-span-1">
            <Card className="overflow-hidden h-full">
              <div className="aspect-square overflow-hidden">
                <img
                  src={photoUrl}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Connect With Me</h3>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/mohamed-bayomy-9a9583222/"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
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
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/azooz59T"
                    className="text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  >
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
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio, Education, Experience */}
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed">{bio}</p>
                </div>

                <Separator className="my-6" />

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="">
                        <h4 className="text-lg font-medium">{edu.degree}</h4>
                        <p className="text-muted-foreground">
                          {edu.institution} • {edu.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Work Experience
                  </h3>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <div key={index} className="">
                        <h4 className="text-lg font-medium">{exp.position}</h4>
                        <p className="text-muted-foreground mb-2">
                          {exp.company} • {exp.duration}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
