import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="mb-2 text-8xl font-bold text-royal-500/20 dark:text-royal-500/30">
        404
      </p>
      <h1 className="heading-display mb-4">Page not found</h1>
      <p className="text-body mb-8 max-w-md">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="/" icon={Home} iconPosition="left">
          Go Home
        </Button>
        <Button href="/contact/" variant="outline" icon={ArrowLeft} iconPosition="left">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
