import { restaurants, stays } from "@/app/data";

export async function getPlaces() {
  return {
    restaurants,
    stays
  };
}
