import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  carousel: Carousel[];
  message: string;
}

export function useCarousel(url: string) {
  const { data, error, isLoading } = useSWR<ResData>(url, fetcher);
  if (data?.success) {
    return {
      carousels: data.carousel,
      isLoading,
      error,
    };
  }
  return {
    carousels: [],
    isLoading,
    error,
  };
}
