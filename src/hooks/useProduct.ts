import { fetcher } from "@/utils/apis";
import useSWR from "swr";

export async function useProduct(limit: number, page_number: number) {
  var pathname = `/api/products?limit=${limit}&page_number=${page_number}`;
  const { data, error, isLoading } = useSWR(pathname, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    products: data,
    isLoading,
    error,
  };
}
