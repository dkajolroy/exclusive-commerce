import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  arrivals: Carousel[];
  message: string;
}

export function useArrival(url: string) {
  const { data, error, isLoading } = useSWR<ResData>(url, fetcher);
  if (data?.success) {
    return {
      arrivals: data.arrivals,
      isLoading,
      error,
    };
  }
  return {
    arrivals: [],
    isLoading,
    error,
  };
}
