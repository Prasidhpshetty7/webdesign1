import Link from "next/link";

// Static featured posts data
const featuredPosts = [
  {
    id: "1",
    slug: "building-modern-web-apps-nextjs-14",
    title: "Building Modern Web Applications with Next.js 14",
    description: "Explore the latest features in Next.js 14 and learn how to build performant, scalable web applications with the App Router.",
  },
  {
    id: "2",
    slug: "art-of-clean-code",
    title: "The Art of Clean Code: Best Practices for Developers",
    description: "Learn essential coding practices that will make your code more readable, maintainable, and efficient.",
  },
];

export default function FeaturedPosts({ params }: { params?: string }) {
  return (
    <>
      {featuredPosts.map((post) => (
        <article
          key={post.id}
          className={`mb-4 ${
            post.slug === params ? "hidden" : "flex lg:flex-row flex-col"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="flex flex-col gap-4 dark:bg-zinc-900/50 bg-white p-5 rounded-lg border dark:border-zinc-800 border-gray-200 hover:border-purple-400 dark:hover:border-zinc-700 transition-all"
          >
            <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center">
              <span className="text-white text-sm font-medium text-center px-4">{post.title}</span>
            </div>
            <div className="max-w-lg">
              <h2 className="max-w-sm text-lg tracking-tight mb-4 text-zinc-800 dark:text-white">
                {post.title}
              </h2>
              <p className="dark:text-zinc-400 text-zinc-600 text-sm">
                {post.description.slice(0, 80).padEnd(83, "...")}
              </p>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
