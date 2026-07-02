"use client";

import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-12 w-12">
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-royal-500 to-purple-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-1 rounded-xl bg-[hsl(var(--background))]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-sm font-bold text-royal-500">
              S
            </span>
          </div>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          Loading...
        </p>
      </motion.div>
    </div>
  );
}

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--background))]">
      <PageLoader />
    </div>
  );
}
