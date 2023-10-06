import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  subcategories: Subcategory[];
  message: string;
}

export function useSubcategories(url: string) {
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
}
