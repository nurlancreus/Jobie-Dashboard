import { PaginationArrow } from "@/assets/icons";
import usePagination from "@/hooks/usePagination";
import usePaginationParams from "@/hooks/usePaginationParams";
import { ReactNode } from "react";

type PaginationProps = {
  total?: number;
  variant?: "vacancies" | "companies" | "applications";
};

export default function Pagination({ total = 160, variant }: PaginationProps) {
  const { currentPage, handlePagination, pageSize } =
    usePaginationParams(variant);
  const numOfPages = Math.ceil(total / pageSize);

  const paginationRange = usePagination({
    numOfPages,
    siblingCount: 1,
    currentPage,
  });

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numOfPages;

  return (
    <nav className="flex items-center gap-4">
      <PaginationButton variant="prev" disabled={isFirstPage}>
        Previous
      </PaginationButton>

      <ul className="flex items-center h-14 rounded-[62px] overflow-hidden bg-primary-300">
        {paginationRange?.map((page, index) => {
          if (typeof page === "string") {
            return <li className="px-1 rounded-full" key={index}>&#8230;</li>;
          }

          return (
            <li key={index}>
              <button
                disabled={page === currentPage}
                className="bg-primary-300 text-primary transition font-medium text-lg w-[62px] h-[62px]
                   rounded-full grid place-content-center hover:text-white hover:bg-primary
               disabled:text-white disabled:bg-primary disabled:cursor-not-allowed"
                onClick={() => handlePagination(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>

      <PaginationButton variant="next" disabled={isLastPage}>
        Next
      </PaginationButton>
    </nav>
  );
}

// Pagination Prev & Next button

type PaginationButtonProps = {
  variant: "prev" | "next";
  children: ReactNode;
  disabled: boolean;
};

function PaginationButton({
  children,
  variant,
  disabled,
}: PaginationButtonProps) {
  const { currentPage, handlePagination } = usePaginationParams();

  const handleClick = (page: number) => {
    if (disabled) return;

    if (variant === "prev") {
      handlePagination(page - 1);
    }

    if (variant === "next") {
      handlePagination(page + 1);
    }
  };

  return (
    <button
      disabled={disabled}
      className={`py-3 px-6 text-primary font-medium transition text-lg bg-white rounded-[62px] flex items-center gap-3 border-none outline-transparent hover:text-white hover:bg-primary [&_path]:transition [&:hover_path]:stroke-white disabled:cursor-not-allowed ${
        variant === "next" ? "flex-row-reverse [&>svg]:rotate-180" : ""
      }`}
      onClick={() => handleClick(currentPage)}
    >
      <PaginationArrow />
      {children}
    </button>
  );
}
