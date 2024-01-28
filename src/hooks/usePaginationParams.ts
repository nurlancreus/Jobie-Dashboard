import { useSearchParams } from "react-router-dom";

export function usePaginationParams(
  variant?: "vacancies" | "companies" | "applications",
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") ?? 1);

  let pageSize: number = 0;

  switch (variant) {
    case "applications":
      pageSize = 6;
      break;
    case "vacancies":
      pageSize = 9;
      break;
    case "companies":
      pageSize = 12;
      break;
    default:
      break;
    //throw Error("Set Correct Pagination variant");
  }

  const from = (currentPage - 1) * pageSize;
  const to = from + pageSize - 1;

  const handlePagination = (page: number) => {
    searchParams.set("page", page.toString());

    setSearchParams(searchParams);
  };

  return { currentPage, from, to, pageSize, handlePagination };
}
