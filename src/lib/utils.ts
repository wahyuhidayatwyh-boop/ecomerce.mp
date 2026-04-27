import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBasePath(path: string) {
  const basePath = process.env.NODE_ENV === "production" ? "/ecomerce.mp" : "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
