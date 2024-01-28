import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVacancies } from "@/services/apiVacancies";
import { usePaginationParams } from "@/hooks/usePaginationParams";
import { useSearchQuery } from "@/hooks/useSearchQuery";

export type JobsPositionType =
  | "your-skill"
  | "programmer"
  | "software-engineer"
  | "photographer"
  | "digital-marketing";
export type JobsSortType = "newest" | "oldest";

export function useGetVacancies(withPagination = false) {
  // const queryClient = useQueryClient();

  const [searchParams, setSearchParams] = useSearchParams();
  const filterPositionValue = (searchParams.get("position") ??
    "your-skill") as JobsPositionType;

  const filterSortValue = (searchParams.get("sortJobsBy") ??
    "newest") as JobsSortType;
  const { currentPage, pageSize, from, to } = usePaginationParams("vacancies");
  const { searchValue } = useSearchQuery();

  const paginationOptions = { withPagination, from, to };
  const filterOptions = { filterPositionValue, filterSortValue };

  const {
    data: { data: vacancies = [], count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "vacancies",
      searchValue,
      currentPage,
      filterPositionValue,
      filterSortValue,
    ],
    queryFn: () => getVacancies(paginationOptions, filterOptions, searchValue), // this fn should return the Promise
  });

  // RE-PAGINATION
  // delete page items, automatically opens prev page
  useEffect(
    function () {
      if (
        count &&
        Math.ceil(count / pageSize) < currentPage &&
        currentPage > 1
      ) {
        searchParams.set("page", String(currentPage - 1));
        setSearchParams(searchParams);
      }
    },
    [count, currentPage, pageSize, searchParams, setSearchParams],
  );

  // // PRE-FETCHING
  // const pageCount = Math.ceil(count! / pageSize);

  // if (currentPage < pageCount) {
  //   queryClient.prefetchQuery({
  //     queryKey: ["vacancies", searchValue, currentPage + 1],
  //     queryFn: () =>
  //       getVacancies(
  //         { ...paginationOptions, page: currentPage + 1 },
  //         searchValue,
  //       ),
  //   });
  // }

  // if (currentPage > 1) {
  //   queryClient.prefetchQuery({
  //     queryKey: ["vacancies", searchValue, currentPage - 1],
  //     queryFn: () =>
  //       getVacancies(
  //         { ...paginationOptions, page: currentPage - 1 },
  //         searchValue,
  //       ),
  //   });
  // }

  return { vacancies, count, isLoading, error };
}
