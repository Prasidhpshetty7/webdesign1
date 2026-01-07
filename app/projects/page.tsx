import { Metadata } from "next";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Projects | Prasidh P Shetty",
  description: "Explore my portfolio of web development projects",
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TailwindCSS. Features smooth animations and dark mode support.",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tags: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, SEO optimization, and a powerful admin panel for content management.",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, file sharing, and end-to-end encryption.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen">
      <section className="lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-zinc-700 dark:text-zinc-300 text-lg max-w-2xl transition-colors">
            Here are some of the projects I&apos;ve worked on. Each project represents my passion for creating 
            beautiful, functional, and user-friendly applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Project Image/Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{project.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white group-hover:text-purple-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs rounded-md transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-500 dark:hover:text-white transition-colors"
                  >
                    <BiLinkExternal />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-500 dark:hover:text-white transition-colors"
                  >
                    <BiLogoGithub />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
