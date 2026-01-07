import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Prasidh P Shetty",
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
