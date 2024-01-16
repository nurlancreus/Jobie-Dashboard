import { getCompany } from "@/services/apiCompanies";
import { useQuery } from "@tanstack/react-query";

export function useGetCompany(id: number) {
  const {
    data: company,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["companies", id],
    queryFn: () => getCompany(Number(id)),
    retry: false,
  });

  return { company, isLoading, error };
}
