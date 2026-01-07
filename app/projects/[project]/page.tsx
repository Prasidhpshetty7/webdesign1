import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BiChevronRight, BiLinkExternal, BiLogoGithub } from "react-icons/bi";

type Props = {
  params: {
    project: string;
  };
};

// Static projects data
const projects: Record<string, {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}> = {
  "e-commerce-platform": {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    fullDescription: `
      A comprehensive e-commerce platform built from the ground up with modern technologies and best practices.

      ## Features
      - User authentication and authorization with JWT
      - Product catalog with search and filtering
      - Shopping cart with persistent storage
      - Secure payment integration with Stripe
      - Order management and tracking
      - Admin dashboard for inventory management
      - Responsive design for all devices

      ## Technical Stack
      - Frontend: React with Redux for state management
      - Backend: Node.js with Express
      - Database: MongoDB with Mongoose ODM
      - Payment: Stripe API integration
      - Authentication: JWT with refresh tokens

      ## Challenges & Solutions
      Building this platform taught me valuable lessons about handling complex state management, implementing secure payment flows, and optimizing database queries for performance.
    `,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-blue-500 to-cyan-500",
  },
  "task-management-app": {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    fullDescription: `
      A powerful task management solution designed for teams to collaborate effectively in real-time.

      ## Features
      - Real-time updates with WebSocket connections
      - Drag-and-drop task organization
      - Team collaboration with role-based access
      - Task assignments and due dates
      - Progress tracking and analytics
      - Notification system for updates

      ## Technical Stack
      - Frontend: Next.js with TypeScript
      - Backend: Node.js with Socket.io
      - Database: PostgreSQL with Prisma ORM
      - Real-time: Socket.io for live updates

      ## Key Learnings
      This project deepened my understanding of real-time web applications and the complexities of maintaining synchronized state across multiple clients.
    `,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-purple-500 to-pink-500",
  },
  "portfolio-website": {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TailwindCSS.",
    fullDescription: `
      A sleek and modern portfolio website showcasing my work and skills as a developer.

      ## Features
      - Smooth page transitions and animations
      - Dark/Light mode toggle
      - Responsive design for all screen sizes
      - SEO optimized with meta tags
      - Fast loading with Next.js optimization
      - Contact form integration

      ## Technical Stack
      - Framework: Next.js 14 with App Router
      - Styling: TailwindCSS
      - Animations: Framer Motion
      - Deployment: Vercel

      ## Design Philosophy
      The design focuses on clean aesthetics, smooth interactions, and excellent user experience across all devices.
    `,
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-orange-500 to-red-500",
  },
  "weather-dashboard": {
    title: "Weather Dashboard",
    description: "A beautiful weather application with location-based forecasts.",
    fullDescription: `
      An intuitive weather dashboard providing comprehensive weather information with beautiful visualizations.

      ## Features
      - Location-based weather detection
      - 7-day weather forecast
      - Interactive weather maps
      - Detailed weather analytics with charts
      - Multiple location support
      - Weather alerts and notifications

      ## Technical Stack
      - Frontend: React with hooks
      - API: OpenWeather API
      - Charts: Chart.js for visualizations
      - Maps: Leaflet for interactive maps

      ## Highlights
      This project showcases my ability to work with external APIs and create engaging data visualizations.
    `,
    tags: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-green-500 to-teal-500",
  },
  "blog-platform": {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support and SEO optimization.",
    fullDescription: `
      A modern blogging platform built for content creators who want full control over their content.

      ## Features
      - Markdown and MDX support
      - SEO optimization built-in
      - Powerful admin panel
      - Comment system
      - Newsletter integration
      - Analytics dashboard

      ## Technical Stack
      - Framework: Next.js with MDX
      - Database: PostgreSQL with Prisma
      - Authentication: NextAuth.js
      - Styling: TailwindCSS

      ## Purpose
      Built to provide a seamless writing and reading experience with all the modern features bloggers need.
    `,
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-indigo-500 to-purple-500",
  },
  "chat-application": {
    title: "Chat Application",
    description: "Real-time chat application with private messaging and group chats.",
    fullDescription: `
      A feature-rich chat application enabling real-time communication with security in mind.

      ## Features
      - Private one-on-one messaging
      - Group chat rooms
      - File and image sharing
      - Message encryption
      - Online status indicators
      - Message read receipts

      ## Technical Stack
      - Frontend: React with context API
      - Backend: Node.js with Express
      - Real-time: Socket.io
      - Cache: Redis for session management

      ## Security Focus
      Special attention was given to implementing secure communication channels and protecting user data.
    `,
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/Prasidhpshetty7",
    gradient: "from-pink-500 to-rose-500",
  },
};

// Generate static params for all projects
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    project: slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects[params.project];

  if (!project) {
    return {
      title: "Project Not Found | Prasidh P Shetty",
    };
  }

  return {
    title: `${project.title} | Prasidh P Shetty`,
    description: project.description,
  };
}

export default function Project({ params }: Props) {
  const project = projects[params.project];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <article className="lg:max-w-4xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-x-2 border-b border-gray-200 dark:border-zinc-800 pb-8 mb-8 transition-colors">
          <Link
            href="/projects"
            className="text-zinc-600 dark:text-zinc-400 hover:text-purple-500 dark:hover:text-white text-sm transition-colors"
          >
            ← Back to Projects
          </Link>
          <BiChevronRight className="text-zinc-400" />
          <p className="text-zinc-500 dark:text-zinc-500 text-sm truncate">{project.title}</p>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-zinc-800 dark:text-white mb-4 transition-colors">
            {project.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 transition-colors">
            {project.description}
          </p>
        </header>

        {/* Project Image/Gradient */}
        <div className={`h-64 rounded-2xl bg-gradient-to-br ${project.gradient} mb-8 flex items-center justify-center`}>
          <span className="text-white text-2xl font-bold">{project.title}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-lg transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            <BiLinkExternal />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            <BiLogoGithub />
            View Source
          </a>
        </div>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line transition-colors">
            {project.fullDescription}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800 transition-colors">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-purple-500 rounded-lg transition-colors"
          >
            ← View All Projects
          </Link>
        </footer>
      </article>
    </main>
  );
}
