import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "@/services/apiCompanies";
import useSearchQuery from "@/hooks/useSearchQuery";
import usePaginationParams from "@/hooks/usePaginationParams";
import { useSearchParams } from "react-router-dom";

export type CompaniesPositionType =
  | "your-skill"
  | "programmer"
  | "software-engineer"
  | "photographer"
  | "digital-marketing";
export type CompaniesSortType = "newest" | "oldest";

export function useGetCompanies() {
  const [searchParams] = useSearchParams();
  const filterPositionValue = (searchParams.get("position") ??
    "your-skill") as CompaniesPositionType;

  const filterSortValue = (searchParams.get("sortCompaniesBy") ??
    "newest") as CompaniesSortType;
  const { currentPage, from, to } = usePaginationParams("companies");
  const { searchValue } = useSearchQuery();

  const paginationOptions = { currentPage, from, to };

  const filterOptions = { filterPositionValue, filterSortValue };

  const {
    data: { data: companies = [], count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "companies",
      searchValue,
      currentPage,
      filterPositionValue,
      filterSortValue,
    ],
    queryFn: () => getCompanies(paginationOptions, filterOptions, searchValue), // this fn should return the Promise
  });

  return { companies, isLoading, error, count };
}
