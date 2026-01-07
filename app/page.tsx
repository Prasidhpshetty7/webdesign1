import { Metadata } from "next";
import { BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiLogoInstagram, BiLogoDiscord } from "react-icons/bi";
import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prasidh P Shetty | Web Designing Project 1",
  description: "I am Prasidh P Shetty, a Web Designer and Full-Stack Developer passionate about building modern, visually engaging, and user-focused digital experiences.",
};

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Prasidhpshetty7", icon: BiLogoGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/prasidh-shetty7/", icon: BiLogoLinkedin },
  { name: "Instagram", url: "https://www.instagram.com/mr__shxtty/", icon: BiLogoInstagram },
  { name: "X", url: "https://x.com/ShettyPrasidh7", icon: FaSquareXTwitter },
  { name: "Discord", url: "https://discord.com/users/prasidhshetty", icon: BiLogoDiscord },
  { name: "Telegram", url: "https://t.me/FINALSKULL", icon: FaTelegram },
];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", 
  "MongoDB", "PostgreSQL", "Git", "REST APIs", "GraphQL"
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image - Using the existing logo */}
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center transition-colors duration-300 overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Prasidh P Shetty Logo" 
                  width={200} 
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Prasidh P Shetty
              </span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 mb-6 transition-colors">
              Web Designer & Full-Stack Developer
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 max-w-2xl transition-colors">
              I build modern, visually engaging, and user-focused digital experiences. 
              I specialize in creating responsive websites and scalable web applications 
              that combine clean design with solid technical foundations.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-700/50 border border-gray-300 dark:border-zinc-700/50 hover:border-purple-400 dark:hover:border-zinc-600 transition-all duration-300 hover:scale-110 shadow-sm"
                  title={link.name}
                >
                  <link.icon className="text-xl text-zinc-700 dark:text-zinc-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="mailto:contact@prasidhshetty.com"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg"
              >
                <BiEnvelope className="text-lg" />
                Contact Me
              </a>
              <Link
                href="/projects"
                className="px-6 py-3 bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 border border-gray-300 dark:border-zinc-700 text-zinc-800 dark:text-white rounded-xl font-semibold transition-colors shadow-sm"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          About <span className="text-purple-500">Me</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed transition-colors">
            <p>
              I am Prasidh P Shetty, a Web Designer and Full-Stack Developer passionate 
              about building modern, visually engaging, and user-focused digital experiences.
            </p>
            <p>
              I work across the full development stack, from crafting intuitive frontend 
              interfaces to building robust backend systems, APIs, and database architectures. 
              I follow industry best practices such as version control, agile workflows, and 
              CI/CD pipelines to deliver high-quality, maintainable, and performant solutions.
            </p>
            <p>
              I have a strong sense of design and believe great digital products are built 
              at the intersection of aesthetics, usability, and engineering. I enjoy continuous 
              learning, solving complex problems, and transforming ideas into impactful digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200 transition-colors">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-zinc-800/50 border border-gray-300 dark:border-zinc-700/50 rounded-lg text-zinc-800 dark:text-zinc-200 text-sm hover:border-purple-500/50 transition-colors shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <Link href="/projects" className="text-zinc-600 dark:text-zinc-400 hover:text-purple-500 dark:hover:text-white transition-colors">
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group p-6 bg-white dark:bg-zinc-800/30 border border-gray-200 dark:border-zinc-700/50 rounded-2xl hover:border-purple-400 dark:hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="w-full h-40 bg-gradient-to-br from-gray-100 dark:from-zinc-700 to-gray-200 dark:to-zinc-800 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-zinc-500 dark:text-zinc-400 text-sm">Project {i}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-800 dark:text-white group-hover:text-purple-500 transition-colors">
                Project Title {i}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                A brief description of this amazing project and the technologies used.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let&apos;s <span className="text-pink-500">Connect</span>
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-8 max-w-xl mx-auto transition-colors">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:contact@prasidhshetty.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            <BiEnvelope className="text-xl" />
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
