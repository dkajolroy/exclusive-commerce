import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  arrivals: Carousel[];
  message: string;
}

export function useArrival(url: string) {
<<<<<<< HEAD
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
=======
  try {
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
  } catch (error) {
    return {
      arrivals: [],
      isLoading: false,
      error,
    };
  }
>>>>>>> 96fd0cd1dd28a50b74d367d2dde34f801f3e5e11
}
