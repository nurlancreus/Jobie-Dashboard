import { useQuery } from "@tanstack/react-query";
import { getApplications } from "@/services/apiApplications";
import usePaginationParams from "@/hooks/usePaginationParams";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useGetApplications() {
  // const queryClient = useQueryClient();

  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatusValue = searchParams.get("status") ?? "all";

  const filterSortValue = (searchParams.get("sortAppsBy") ?? "newest") as
    | "newest"
    | "oldest";

  const { currentPage, pageSize, from, to } =
    usePaginationParams("applications");

  const paginationOptions = {
    currentPage,
    from,
    to,
  };

  const {
    data: { data: applications = [], count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["applications", currentPage, filterStatusValue],
    queryFn: () =>
      getApplications(paginationOptions, filterStatusValue, filterSortValue), // this fn should return the Promise
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
  //     queryKey: ["applications", searchValue, currentPage + 1],
  //     queryFn: () =>
  //       getapplications(
  //         { ...paginationOptions, page: currentPage + 1 },
  //         searchValue,
  //       ),
  //   });
  // }

  // if (currentPage > 1) {
  //   queryClient.prefetchQuery({
  //     queryKey: ["applications", searchValue, currentPage - 1],
  //     queryFn: () =>
  //       getapplications(
  //         { ...paginationOptions, page: currentPage - 1 },
  //         searchValue,
  //       ),
  //   });
  // }

  return { applications, count, isLoading, error };
}
