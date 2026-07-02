"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[hsl(var(--border))]/50 bg-[hsl(var(--background))]/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav
        className="container-wide flex h-16 items-center justify-between lg:h-20"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2 rounded-lg"
          aria-label={`${COMPANY.name} — Home`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal-500 to-purple-accent text-sm font-bold text-white shadow-md">
            S
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-sm font-bold tracking-tight text-[hsl(var(--foreground))]">
              SAWARUN TECH
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-royal-500/10 text-royal-600 dark:text-royal-300"
                  : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]",
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/50 text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500"
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--border))] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur-lg md:hidden"
          >
            <div className="container-wide flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-royal-500/10 text-royal-600 dark:text-royal-300"
                      : "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
