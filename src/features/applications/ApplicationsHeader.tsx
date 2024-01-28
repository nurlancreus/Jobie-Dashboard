import { ReactNode } from "react";
import ApplicationsTabs from "./ApplicationsTabs";
import Select from "@/shared/Select";

const sortOptions = [
  {
    value: "newest",
    label: "Newest",
  },
  {
    value: "oldest",
    label: "Oldest",
  },
];

type ApplicationsHeaderProps = {
  children: ReactNode;
};

export default function ApplicationsHeader({
  children,
}: ApplicationsHeaderProps) {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between gap-x-20 gap-y-4 [&>*:first-child]:mr-auto">
        {children}
        <ApplicationsTabs />

        <Select
          variant="sort"
          id="sortAppsBy"
          options={sortOptions}
          value="newest"
        />
      </div>
    </header>
  );
}
