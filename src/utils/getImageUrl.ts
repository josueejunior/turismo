import { imageOrFallback } from "@/app/data";

export function getImageUrl(image?: string) {
  return imageOrFallback(image);
}
