import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  products: Product[];
  message: string;
}

export function useProducts(url: string) {
  try {
    const { data, error, isLoading } = useSWR<ResData>(url, fetcher);
    if (data?.success) {
      return {
        products: data.products,
        isLoading,
        error,
      };
    }
    return {
      products: [],
      isLoading,
      error,
    };
  } catch (error) {
    return {
      products: [],
      isLoading: false,
      error,
    };
  }
}
