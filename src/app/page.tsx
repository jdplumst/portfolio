import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { AnimatedText } from "~/components/animated-text";
import { FadeIn } from "~/components/fade-in";
import { ProjectCard } from "~/components/project-card";
import { SkillsSection } from "~/components/skills-section";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { MobileNav } from "~/components/mobile-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-6">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between md:h-16">
          <div className="flex items-center gap-2">
            <MobileNav />
            <Link href="/" className="truncate text-lg font-bold md:text-xl">
              Jeremiah Plumstead
            </Link>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </header>

      <main className="container mx-auto space-y-24 py-12">
        {/* Hero Section */}
        <section className="flex flex-col-reverse items-center justify-between gap-8 py-24 md:flex-row">
          <div className="max-w-xl space-y-6">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                <AnimatedText text="Hi, I'm Jeremiah" />
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer with a passion for building and testing web
                applications
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/jdplumst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jeremiah-plumstead/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:jeremiah.plumstead@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80">
              <Image
                src="/me.jpeg?height=320&width=320"
                alt="Jeremiah Plumstead"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-16">
          <FadeIn>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Background</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    I&apos;m a Full Stack Developer with a strong foundation in
                    Mathematics and Computer Science, having graduated from the
                    University of Waterloo with a Bachelor&apos;s degree in
                    Mathematical Studies with a minor in Computing.
                  </p>
                  <p>
                    My journey in software development has equipped me with a
                    diverse skill set, allowing me to build complete web
                    applications from front-end interfaces to back-end systems.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Card>
                <CardHeader>
                  <CardTitle>Interests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    I&apos;m passionate and dedicated about creating intuitive
                    user experiences and solving complex problems through clean,
                    efficient code.
                  </p>
                  <p>
                    When I&apos;m not coding, I enjoy exploring new
                    technologies, contributing to open-source projects, watching
                    content on new technologies, and continuously expanding my
                    knowledge in the ever-evolving field of web development.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-16">
          <FadeIn>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Projects
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <ProjectCard
              title="PokéZoo"
              description="An application where users can collect Pokémon to earn points which they can use to collect even more Pokémon and complete the Pokédex."
              technologies={[
                "React",
                "Next.js",
                "TypeScript",
                "Drizzle",
                "PostgreSQL",
                "NextAuth.js",
                "Tailwind CSS",
                "tRPC",
                "Playwright",
                "Redis",
                "shadcn/ui",
              ]}
              githubUrl="https://github.com/jdplumst/pokezoo"
              liveUrl="https://pokezoo.vercel.app/"
              imageUrl="/pokezoo.png?height=300&width=500"
              delay={0.2}
            />
            <ProjectCard
              title="Best Animal Crossing: New Horizons Villager"
              description="An application for ranking all the Animal Crossing: New Horizons villagers based on the elo ranking system."
              technologies={[
                "React",
                "Next.js",
                "TypeScript",
                "Drizzle",
                "PostgreSQL",
                "Tailwind CSS",
                "tRPC",
              ]}
              githubUrl="https://github.com/jdplumst/best-acnh-villager"
              liveUrl="https://bestacnhvillager.vercel.app/"
              imageUrl="/acnh.png?height=300&width=500"
              delay={0.4}
            />
            <ProjectCard
              title="Budget App"
              description="An application for tracking and managing your budget across various projects."
              technologies={[
                "React",
                "Next.js",
                "TypeScript",
                "ASP.NET",
                "C#",
                "Entity Framework Core",
                "PostgreSQL",
                "Tailwind CSS",
                "Chart.js",
                "React Query",
              ]}
              githubUrl="https://github.com/jdplumst/budget-app-server"
              liveUrl="https://budget-app-coral.vercel.app/"
              imageUrl="/budget.png?height=200&width=200"
              delay={0.6}
            />
            <ProjectCard
              title="Flashcards TUI"
              description="A terminal user interface application that allows users to create, view and delete flashcards."
              technologies={["Go", "Bubble Tea"]}
              githubUrl="https://github.com/jdplumst/flashcards-tui"
              imageUrl="/flashcards.png?height=200&width=200"
              delay={0.8}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-16">
          <FadeIn>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Skills
            </h2>
          </FadeIn>
          <SkillsSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-16">
          <FadeIn>
            <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Me
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>
                    Feel free to reach out if you have any questions or would
                    like to work together.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="mailto:jeremiah.plumstead@gmail.com"
                      className="transition-colors hover:text-primary"
                    >
                      jeremiah.plumstead@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://www.linkedin.com/in/jeremiah-plumstead/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      linkedin.com/in/jeremiah-plumstead
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://github.com/jdplumst"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      github.com/jdplumst
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Card>
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                  <CardDescription>
                    Contact me to see my resume to learn more about my
                    experience and skills.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    My resume includes detailed information about my education,
                    work experience, and technical skills.
                  </p>
                  <Button className="w-full">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href="https://www.linkedin.com/in/jeremiah-plumstead/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary"
                    >
                      linkedin.com/in/jeremiah-plumstead
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Jeremiah Plumstead. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/jdplumst"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jeremiah-plumstead/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:jeremiah.plumstead@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
