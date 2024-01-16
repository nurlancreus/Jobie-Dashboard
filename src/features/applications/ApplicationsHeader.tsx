import useParams from "@/hooks/useSortParams";
import Select from "@/shared/Select";
import Titles from "@/shared/Titles";
import ApplicationsTabs from "./ApplicationsTabs";

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

export default function ApplicationsHeader() {
  const { paramsValue, handleParams } = useParams("sortAppsBy", "newest");

  return (
    <header>
      <div className="flex items-center justify-between">
        <div className="flex gap-20">
          <Titles title="Showing 45 Applicants" />
          <ApplicationsTabs />
        </div>
        <Select
          variant="sort"
          id="sortAppsBy"
          options={sortOptions}
          value={paramsValue}
          handleSelect={handleParams}
        />
      </div>
    </header>
  );
}
