import Link from "next/link";
import { HiCalendar, HiClock } from "react-icons/hi";

// Static posts data
const posts = [
  {
    id: "1",
    slug: "building-modern-web-apps-nextjs-14",
    title: "Building Modern Web Applications with Next.js 14",
    description: "Explore the latest features in Next.js 14 and learn how to build performant, scalable web applications with the App Router.",
    date: "2024-01-15",
    readTime: "8 min read",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    slug: "art-of-clean-code",
    title: "The Art of Clean Code: Best Practices for Developers",
    description: "Learn essential coding practices that will make your code more readable, maintainable, and efficient.",
    date: "2024-01-10",
    readTime: "6 min read",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    slug: "mastering-tailwindcss",
    title: "Mastering TailwindCSS: Tips and Tricks",
    description: "Discover advanced TailwindCSS techniques to speed up your development workflow and create stunning designs.",
    date: "2024-01-05",
    readTime: "5 min read",
    gradient: "from-orange-500 to-red-500",
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Posts() {
  return (
    <section>
      <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
        {posts.map((post) => (
          <article key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-zinc-900/50 bg-white p-6 rounded-lg border dark:border-zinc-800 border-gray-200 group hover:border-purple-400 dark:hover:border-zinc-700 transition-all"
            >
              <div className={`relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip rounded-md bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                <span className="text-white text-lg font-medium text-center px-4">{post.title}</span>
              </div>
              <div className="max-w-lg">
                <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4 text-zinc-800 dark:text-white group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600 text-[0.95rem]">
                  {post.description}
                </p>
                <div className="flex items-center gap-x-4 mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-x-2">
                    <HiCalendar />
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <HiClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
