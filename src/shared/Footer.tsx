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
    <footer className="flex items-center justify-between mt-12">
      <div className="text-base font-medium text-zinc-900">
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
