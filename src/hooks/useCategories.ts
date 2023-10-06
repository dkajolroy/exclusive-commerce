import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  categories: Category[];
  message: string;
}

export function useCategories(url: string) {
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
}
