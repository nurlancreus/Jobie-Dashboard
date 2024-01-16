import { PaginationArrow } from "@/assets/icons";
import usePaginationParams from "@/hooks/usePaginationParams";
import { ReactNode, useMemo } from "react";

type PaginationProps = {
  total: number;
  variant: "vacancies" | "companies" | "applications";
};

export default function Pagination({ total = 160, variant }: PaginationProps) {
  const { currentPage, handlePagination, pageSize } =
    usePaginationParams(variant);
  const numOfPages = Math.ceil(total / pageSize);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numOfPages;

  const pages = useMemo(() => {
    return Array.from({ length: numOfPages }, (_, index) => {
      const page = index + 1;

      return (
        <li key={index}>
          <button
            disabled={page === currentPage}
            className="bg-primary-300 text-primary transition font-medium text-lg
             w-[62px] h-[62px] rounded-full grid place-content-center
              hover:text-white hover:bg-primary
               disabled:text-white disabled:bg-primary disabled:cursor-not-allowed"
            onClick={() => handlePagination(page)}
          >
            {page}
          </button>
        </li>
      );
    }).slice(currentPage - 1, currentPage + 3);
  }, [currentPage, handlePagination, numOfPages]);

  return (
    <div className="flex items-center justify-between">
      <div className="text-base font-medium text-zinc-900">
        Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{" "}
        <span>
          {currentPage === numOfPages ? total : currentPage * pageSize}
        </span>{" "}
        of <span>{total}</span> results
      </div>
      <nav className="flex items-center gap-4">
        <PaginationButton variant="prev" disabled={isFirstPage}>
          Previous
        </PaginationButton>

        <ul className="flex items-center rounded-[62px] overflow-hidden bg-primary-300">
          {pages}
        </ul>

        <PaginationButton variant="next" disabled={isLastPage}>
          Next
        </PaginationButton>
      </nav>
    </div>
  );
}

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
