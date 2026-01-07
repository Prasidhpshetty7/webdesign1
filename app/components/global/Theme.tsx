"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50">
        <div className="w-5 h-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <HiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <HiMoon className="w-5 h-5 text-zinc-600" />
      )}
    </button>
  );
}
