import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPageTitle(title: string): string {
  if (title === "Home") {
    return "SAWARUN TECH PRIVATE LIMITED — Thoughtful Technology for Everyday Life";
  }
  return `${title} | SAWARUN TECH PRIVATE LIMITED`;
}
