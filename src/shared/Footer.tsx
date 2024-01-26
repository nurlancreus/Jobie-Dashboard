import usePaginationParams from "@/hooks/usePaginationParams";
import { cloneElement, isValidElement } from "react";

type PaginationProps = {
  total: number;
  variant: "vacancies" | "companies" | "applications";
  children: React.ReactElement<{ variant: string; total: number }>; // Explicitly type children
};

export default function Footer({
  total = 160,
  variant,
  children,
}: PaginationProps) {
  const { currentPage, pageSize } = usePaginationParams(variant);
  const numOfPages = Math.ceil(total / pageSize);

  return (
    <footer className="mt-12 flex flex-wrap items-center justify-between gap-5 lg:items-start">
      <div className="whitespace-nowrap text-base font-medium text-dark">
        Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{" "}
        <span>
          {currentPage === numOfPages ? total : currentPage * pageSize}
        </span>{" "}
        of <span>{total}</span> results
      </div>
      {isValidElement(children) && cloneElement(children, { variant, total })}
    </footer>
  );
}
