import { fetcher } from "@/utils/apis";
import useSWR from "swr";

interface ResData {
  success: boolean;
  products: Product[];
  message: string;
}

export function useProducts(url: string) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 96fd0cd1dd28a50b74d367d2dde34f801f3e5e11
}
