import { Metadata } from "next";
import Link from "next/link";
import { HiCalendar, HiClock } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Blog | Prasidh P Shetty",
  description: "Read my thoughts on web development, design, and technology",
};

const posts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 14",
    description: "Explore the latest features in Next.js 14 and learn how to build performant, scalable web applications with the App Router.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    slug: "building-modern-web-apps-nextjs-14",
  },
  {
    id: 2,
    title: "The Art of Clean Code: Best Practices for Developers",
    description: "Learn essential coding practices that will make your code more readable, maintainable, and efficient.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Clean Code", "Best Practices"],
    slug: "art-of-clean-code",
  },
  {
    id: 3,
    title: "Mastering TailwindCSS: Tips and Tricks",
    description: "Discover advanced TailwindCSS techniques to speed up your development workflow and create stunning designs.",
    date: "2024-01-05",
    readTime: "5 min read",
    tags: ["TailwindCSS", "CSS", "Design"],
    slug: "mastering-tailwindcss",
  },
  {
    id: 4,
    title: "Introduction to TypeScript for JavaScript Developers",
    description: "A comprehensive guide to getting started with TypeScript and understanding its benefits for large-scale applications.",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["TypeScript", "JavaScript"],
    slug: "intro-to-typescript",
  },
  {
    id: 5,
    title: "Building RESTful APIs with Node.js and Express",
    description: "Learn how to design and build robust RESTful APIs using Node.js, Express, and best practices for API development.",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Node.js", "Express", "API"],
    slug: "building-restful-apis",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <main className="min-h-screen">
      <section className="lg:max-w-6xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-zinc-700 dark:text-zinc-300 text-lg max-w-2xl transition-colors">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group p-6 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-purple-400 dark:hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-4">
                  <h2 className="text-xl lg:text-2xl font-semibold text-zinc-800 dark:text-white group-hover:text-purple-500 transition-colors flex-1">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <HiCalendar />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiClock />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2 transition-colors">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-lg transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="mt-16 text-center p-8 bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-2xl transition-colors shadow-sm">
          <p className="text-zinc-600 dark:text-zinc-400 transition-colors">
            More articles coming soon! Stay tuned for updates on web development, design patterns, and tech insights.
          </p>
        </div>
      </section>
    </main>
  );
}
