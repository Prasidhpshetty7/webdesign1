import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";
import { HiCalendar, HiClock } from "react-icons/hi";

type Props = {
  params: {
    post: string;
  };
};

// Static blog posts data
const posts: Record<string, {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "building-modern-web-apps-nextjs-14": {
    title: "Building Modern Web Applications with Next.js 14",
    description: "Explore the latest features in Next.js 14 and learn how to build performant, scalable web applications with the App Router.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    content: `
      Next.js 14 brings exciting new features that make building web applications faster and more efficient than ever before.

      ## The App Router

      The App Router is a new paradigm for building React applications. It leverages React Server Components by default, allowing you to render components on the server and send minimal JavaScript to the client.

      ## Server Actions

      Server Actions allow you to define server-side functions that can be called directly from your components. This eliminates the need for separate API routes for simple data mutations.

      ## Improved Performance

      With features like partial prerendering and improved caching strategies, Next.js 14 delivers exceptional performance out of the box.

      ## Getting Started

      To create a new Next.js 14 project, simply run:
      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      This will set you up with the latest features and best practices for modern web development.
    `,
  },
  "art-of-clean-code": {
    title: "The Art of Clean Code: Best Practices for Developers",
    description: "Learn essential coding practices that will make your code more readable, maintainable, and efficient.",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["Clean Code", "Best Practices"],
    content: `
      Writing clean code is an essential skill for every developer. It's not just about making code work—it's about making code that others (and your future self) can understand and maintain.

      ## Meaningful Names

      Choose descriptive names for variables, functions, and classes. A good name should reveal intent and make the code self-documenting.

      ## Small Functions

      Functions should do one thing and do it well. If a function is doing multiple things, consider breaking it into smaller, more focused functions.

      ## Comments

      Good code is self-explanatory. Use comments sparingly and only when necessary to explain "why" something is done, not "what" is being done.

      ## Consistent Formatting

      Maintain consistent indentation, spacing, and code organization throughout your project. Use tools like Prettier and ESLint to automate this.

      ## DRY Principle

      Don't Repeat Yourself. If you find yourself copying and pasting code, it's time to refactor into reusable functions or components.
    `,
  },
  "mastering-tailwindcss": {
    title: "Mastering TailwindCSS: Tips and Tricks",
    description: "Discover advanced TailwindCSS techniques to speed up your development workflow and create stunning designs.",
    date: "2024-01-05",
    readTime: "5 min read",
    tags: ["TailwindCSS", "CSS", "Design"],
    content: `
      TailwindCSS has revolutionized the way we write CSS. Here are some tips and tricks to help you master this utility-first framework.

      ## Custom Configuration

      Extend Tailwind's default theme to match your brand colors, fonts, and spacing. The tailwind.config.js file is your best friend.

      ## Component Extraction

      While utility classes are great, don't be afraid to extract common patterns into reusable components using @apply or component libraries.

      ## Responsive Design

      Tailwind's responsive prefixes (sm:, md:, lg:, xl:) make building responsive layouts intuitive and straightforward.

      ## Dark Mode

      Implementing dark mode is as simple as adding the dark: prefix to your classes and configuring the darkMode option.

      ## Performance

      Use PurgeCSS (built into Tailwind) to remove unused styles in production, keeping your CSS bundle small and fast.
    `,
  },
  "intro-to-typescript": {
    title: "Introduction to TypeScript for JavaScript Developers",
    description: "A comprehensive guide to getting started with TypeScript and understanding its benefits for large-scale applications.",
    date: "2023-12-28",
    readTime: "10 min read",
    tags: ["TypeScript", "JavaScript"],
    content: `
      TypeScript adds static typing to JavaScript, helping you catch errors early and write more maintainable code.

      ## Why TypeScript?

      TypeScript provides type safety, better IDE support, and improved code documentation. It's especially valuable for large codebases and team projects.

      ## Basic Types

      TypeScript includes primitive types like string, number, boolean, as well as complex types like arrays, objects, and custom interfaces.

      ## Interfaces and Types

      Define the shape of your data using interfaces and type aliases. This makes your code more predictable and easier to understand.

      ## Generics

      Generics allow you to write reusable, type-safe code that works with multiple types while maintaining type information.

      ## Migration Strategy

      You can gradually adopt TypeScript in existing JavaScript projects. Start by renaming .js files to .ts and adding types incrementally.
    `,
  },
  "building-restful-apis": {
    title: "Building RESTful APIs with Node.js and Express",
    description: "Learn how to design and build robust RESTful APIs using Node.js, Express, and best practices for API development.",
    date: "2023-12-20",
    readTime: "12 min read",
    tags: ["Node.js", "Express", "API"],
    content: `
      Building RESTful APIs is a fundamental skill for full-stack developers. Let's explore how to create robust APIs with Node.js and Express.

      ## REST Principles

      REST (Representational State Transfer) is an architectural style that uses HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on resources.

      ## Express Setup

      Express is a minimal and flexible Node.js framework that provides a robust set of features for building APIs.

      ## Route Organization

      Organize your routes logically, grouping related endpoints together. Use Express Router to modularize your route definitions.

      ## Error Handling

      Implement consistent error handling with proper HTTP status codes and meaningful error messages.

      ## Authentication

      Secure your API with authentication mechanisms like JWT (JSON Web Tokens) or OAuth 2.0.

      ## Documentation

      Document your API using tools like Swagger/OpenAPI to make it easy for other developers to understand and use your endpoints.
    `,
  },
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    post: slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.post];

  if (!post) {
    return {
      title: "Post Not Found | Prasidh P Shetty",
    };
  }

  return {
    title: `${post.title} | Prasidh P Shetty`,
    description: post.description,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Post({ params }: Props) {
  const post = posts[params.post];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <article className="lg:max-w-4xl mx-auto max-w-3xl md:px-16 px-6 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-x-2 border-b border-gray-200 dark:border-zinc-800 pb-8 mb-8 transition-colors">
          <Link
            href="/blog"
            className="text-zinc-600 dark:text-zinc-400 hover:text-purple-500 dark:hover:text-white text-sm transition-colors"
          >
            ← Back to Blog
          </Link>
          <BiChevronRight className="text-zinc-400" />
          <p className="text-zinc-500 dark:text-zinc-500 text-sm truncate">{post.title}</p>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-zinc-800 dark:text-white mb-4 transition-colors">
            {post.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 transition-colors">
            {post.description}
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 transition-colors">
            <span className="flex items-center gap-2">
              <HiCalendar />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <HiClock />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm rounded-lg transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line transition-colors">
            {post.content}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800 transition-colors">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">Written by</p>
              <p className="font-semibold text-zinc-800 dark:text-white transition-colors">Prasidh P Shetty</p>
            </div>
            <Link
              href="/blog"
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
