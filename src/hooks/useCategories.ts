import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  categories: Category[];
  message: string;
}

export function useCategories(url: string) {
<<<<<<< HEAD
  const { data, error, isLoading } = useSWR<ResData>(url, fetcher);
  if (data?.success) {
    return {
      categories: data.categories,
      isLoading,
      error,
    };
  }
  return {
    categories: [],
    isLoading,
    error,
  };
=======
  try {
    const { data, error, isLoading } = useSWR<ResData>(url, fetcher);
    if (data?.success) {
      return {
        categories: data.categories,
        isLoading,
        error,
      };
    }
    return {
      categories: [],
      isLoading,
      error,
    };
  } catch (error) {
    return {
      categories: [],
      isLoading: false,
      error,
    };
  }
>>>>>>> 96fd0cd1dd28a50b74d367d2dde34f801f3e5e11
}
