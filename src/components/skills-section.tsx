"use client";

import { FadeIn } from "~/components/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
}

export function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vue",
        "Svelte",
        "Astro",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Go",
        "C#",
        "Python",
        "Next.js",
        "Express",
        "Fastify",
        "Gin",
        "Chi",
        "ASP.NET Core",
        "Django",
      ],
    },
    {
      name: "Database",
      skills: [
        "PostgreSQL",
        "SQLite",
        "MongoDB",
        "MySQL",
        "LibSQL",
        "Drizzle",
        "Prisma",
        "EF Core",
        "Turso",
        "Supabase",
        "Planetscale",
        "Redis",
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Vercel",
        "Netlify",
        "Playwright",
        "Cypress",
        "Selenium",
        "VS Code",
        "Cursor",
        "Windsurf",
        "Neovim",
        "MacOS",
        "Windows",
        "Linux",
      ],
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <FadeIn key={category.name} delay={0.2 * index}>
          <Card>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
