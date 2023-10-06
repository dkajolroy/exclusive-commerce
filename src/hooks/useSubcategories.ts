import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  subcategories: Subcategory[];
  message: string;
}

export function useSubcategories(url: string) {
<<<<<<< HEAD
  const { data, error, isLoading } = useSWR<ResData>(url, fetcher);
  if (data?.success) {
    return {
      subcategories: data.subcategories,
      isLoading,
      error,
    };
  }
  return {
    subcategories: [],
    isLoading,
    error,
  };
=======
  try {
    const { data, error, isLoading } = useSWR<ResData>(url, fetcher);
    if (data?.success) {
      return {
        subcategories: data.subcategories,
        isLoading,
        error,
      };
    }
    return {
      subcategories: [],
      isLoading,
      error,
    };
  } catch (error) {
    return {
      subcategories: [],
      isLoading: false,
      error,
    };
  }
>>>>>>> 96fd0cd1dd28a50b74d367d2dde34f801f3e5e11
}
