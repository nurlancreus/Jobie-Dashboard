import Select from "@/shared/Select";
import ApplicationsTabs from "./ApplicationsTabs";
import { ReactNode } from "react";

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

export default function ApplicationsHeader({ children }: ApplicationsHeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-between gap-20 [&>*:first-child]:mr-auto">
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
