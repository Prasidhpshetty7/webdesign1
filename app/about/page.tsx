import { Metadata } from "next";
import { BiLogoGithub, BiLogoLinkedin, BiLogoInstagram, BiEnvelope } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Prasidh P Shetty",
  description: "Learn more about Prasidh P Shetty - Web Designer & Full-Stack Developer",
};

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
};

const experience = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building custom web applications and websites for clients worldwide.",
  },
  {
    title: "Web Developer",
    company: "Personal Projects",
    period: "2022 - Present",
    description: "Developing and maintaining various personal and open-source projects.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Profile */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 mb-6">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-zinc-900 flex items-center justify-center transition-colors overflow-hidden">
                  <Image 
                    src="/logo.png" 
                    alt="Prasidh P Shetty Logo" 
                    width={120} 
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-center lg:text-left mb-2">Prasidh P Shetty</h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-center lg:text-left mb-6 transition-colors">Web Designer & Full-Stack Developer</p>
              
              {/* Contact Links */}
              <div className="flex justify-center lg:justify-start gap-3">
                <a href="https://github.com/Prasidhpshetty7" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                  <BiLogoGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/prasidh-shetty7/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                  <BiLogoLinkedin className="text-xl" />
                </a>
                <a href="https://www.instagram.com/mr__shxtty/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                  <BiLogoInstagram className="text-xl" />
                </a>
                <a href="https://x.com/ShettyPrasidh7" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                  <FaSquareXTwitter className="text-xl" />
                </a>
                <a href="mailto:contact@prasidhshetty.com" className="p-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors shadow-sm">
                  <BiEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed mb-12 transition-colors">
              <p>
                I am Prasidh P Shetty, a Web Designer and Full-Stack Developer passionate about building 
                modern, visually engaging, and user-focused digital experiences. I specialize in creating 
                responsive websites and scalable web applications that combine clean design with solid 
                technical foundations.
              </p>
              <p>
                I work across the full development stack, from crafting intuitive frontend interfaces to 
                building robust backend systems, APIs, and database architectures. I follow industry best 
                practices such as version control, agile workflows, and CI/CD pipelines to deliver 
                high-quality, maintainable, and performant solutions.
              </p>
              <p>
                I have a strong sense of design and believe great digital products are built at the 
                intersection of aesthetics, usability, and engineering. I enjoy continuous learning, 
                solving complex problems, and transforming ideas into impactful digital solutions.
              </p>
            </div>

            {/* Experience */}
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-6 mb-12">
              {experience.map((exp, index) => (
                <div key={index} className="p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl transition-colors shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-white">{exp.title}</h4>
                    <span className="text-sm text-purple-500 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2 transition-colors">{exp.company}</p>
                  <p className="text-zinc-600 dark:text-zinc-500 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-xl transition-colors shadow-sm">
                <h3 className="text-lg font-semibold mb-4 capitalize text-zinc-800 dark:text-zinc-200 transition-colors">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-lg transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
