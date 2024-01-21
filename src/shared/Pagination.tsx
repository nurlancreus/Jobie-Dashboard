import { PaginationArrow } from "@/assets/icons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import usePagination from "@/hooks/usePagination";
import usePaginationParams from "@/hooks/usePaginationParams";
import { ReactNode } from "react";

type PaginationProps = {
  total?: number;
  variant?: "vacancies" | "companies" | "applications";
};

export default function Pagination({ total = 0, variant }: PaginationProps) {
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
    <nav className="flex items-center gap-2 lg:gap-4">
      <PaginationButton variant="prev" disabled={isFirstPage}>
        Previous
      </PaginationButton>

      <ul className="flex h-10 items-center overflow-hidden rounded-[62px] bg-primary-300 lg:h-12 xl:h-14">
        {paginationRange?.map((page, index) => {
          if (typeof page === "string") {
            return (
              <li className="rounded-full px-1" key={index}>
                &#8230;
              </li>
            );
          }

          return (
            <li key={index}>
              <button
                disabled={page === currentPage}
                className="grid h-8 w-8 place-content-center rounded-full bg-primary-300 text-lg font-medium text-primary transition hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:bg-primary disabled:text-white md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-[62px] xl:w-[62px]"
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
  const isAboveMediumScreens = useMediaQuery("(min-width: 992px)");

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
      className={`flex items-center gap-2 rounded-[62px] border-none bg-white px-3 py-2 text-lg font-medium text-primary outline-transparent transition hover:bg-primary hover:text-white disabled:cursor-not-allowed lg:gap-3 lg:px-5 xl:px-6 xl:py-3 [&:hover_path]:stroke-white [&_path]:transition ${
        variant === "next" ? "flex-row-reverse [&>svg]:rotate-180" : ""
      }`}
      onClick={() => handleClick(currentPage)}
    >
      <PaginationArrow />
      {isAboveMediumScreens && children}
    </button>
  );
}
