import { fetcher } from "@/utils/apis";
import useSWR from "swr";

export async function useProduct() {
  const { data, error, isLoading } = useSWR("", fetcher, {
    revalidateOnFocus: false,
  });

  return {
    products: data,
    isLoading,
    error,
  };
}
