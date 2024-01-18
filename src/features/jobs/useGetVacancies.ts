import { useQuery } from "@tanstack/react-query";
import { getVacancies } from "@/services/apiVacancies";
import usePaginationParams from "@/hooks/usePaginationParams";
import useSearchQuery from "@/hooks/useSearchQuery";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useGetVacancies(withPagination = false) {
  // const queryClient = useQueryClient();

  const [searchParams, setSearchParams] = useSearchParams();
  const { currentPage, pageSize, from, to } = usePaginationParams("vacancies");
  const { searchValue } = useSearchQuery();

  const paginationOptions = { withPagination, from, to };

  const {
    data: { data: vacancies = [], count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["vacancies", searchValue, currentPage],
    queryFn: () => getVacancies(paginationOptions, searchValue), // this fn should return the Promise
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
