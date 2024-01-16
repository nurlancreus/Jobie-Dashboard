import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/services/apiCompanies";
import useSearchQuery from "@/hooks/useSearchQuery";
import usePaginationParams from "@/hooks/usePaginationParams";

export function useGetCompanies() {
  const { currentPage, from, to } = usePaginationParams("companies");
  const { searchValue } = useSearchQuery();

  const paginationOptions = {
    currentPage,
    from,
    to,
  };

  const {
    data: { data: companies = [], count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["companies", searchValue, currentPage],
    queryFn: () => getCompanies(paginationOptions, searchValue), // this fn should return the Promise
  });

  return { companies, isLoading, error, count };
}
