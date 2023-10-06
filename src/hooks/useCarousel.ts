import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  carousel: Carousel[];
  message: string;
}

export function useCarousel(url: string) {
<<<<<<< HEAD
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
=======
  try {
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
  } catch (error) {
    return {
      carousels: [],
      isLoading: false,
      error,
    };
  }
>>>>>>> 96fd0cd1dd28a50b74d367d2dde34f801f3e5e11
}
