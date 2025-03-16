"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "~/components/ui/button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      className="relative h-9 w-16 rounded-full border p-0"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Container with fixed width */}
      <div className="absolute inset-0 rounded-full bg-muted">
        {/* Fixed positioned icons */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-2.5">
          <Sun
            className={`h-4 w-4 ${isDark ? "text-muted-foreground" : "text-yellow-500"}`}
          />
          <Moon
            className={`h-4 w-4 ${isDark ? "text-blue-500" : "text-muted-foreground"}`}
          />
        </div>
      </div>

      {/* Thumb that moves */}
      <motion.div
        className="absolute top-[4px] z-10 h-7 w-7 rounded-full border bg-background/40 shadow-sm backdrop-blur-[2px]"
        initial={{ left: 4 }}
        animate={{
          left: isDark ? "calc(100% - 32px)" : "4px",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </Button>
  );
}
