"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-wide flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-royal-500">
        Error
      </p>
      <h1 className="heading-display mb-4">Something went wrong</h1>
      <p className="text-body mb-8 max-w-md">
        We encountered an unexpected error. Please try again or return to the
        homepage.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button onClick={reset} icon={RefreshCw} iconPosition="left">
          Try Again
        </Button>
        <Button href="/" variant="outline" icon={Home} iconPosition="left">
          Go Home
        </Button>
      </div>
    </div>
  );
}
