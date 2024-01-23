import Select from "@/shared/Select";
import SwitchBtn from "@/shared/SwitchBtn";
import Titles from "@/shared/Titles";
import LayoutButtons from "@/shared/LayoutButtons";
import {
  SORT_JOBS_ID,
  SWITCH_DETAILS_ID,
  SWITCH_FREELANCE_ID,
  SWITCH_FULLTIME_ID,
  SWITCH_SALARY_ID,
} from "@/utils/constants";

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

type JobsBodyHeadeProps = {
  dataLength: number;
};

export default function JobsBodyHeader({ dataLength }: JobsBodyHeadeProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 [&>*:first-child]:mr-auto">
      <Titles title={`Showing ${dataLength} search results`} />
      <SwitchBtn
        id={SWITCH_FULLTIME_ID}
        key={SWITCH_FULLTIME_ID}
        label="FullTime"
        checked={false}
      />
      <SwitchBtn
        id={SWITCH_FREELANCE_ID}
        key={SWITCH_FREELANCE_ID}
        label="Freelance"
        checked={true}
      />

      <SwitchBtn
        id={SWITCH_DETAILS_ID}
        key={SWITCH_DETAILS_ID}
        label="Details"
        checked={false}
      />
      <SwitchBtn
        id={SWITCH_SALARY_ID}
        key={SWITCH_SALARY_ID}
        label="Salary"
        checked={true}
      />

      {/* Sort By */}
      <Select
        variant="sort"
        id={SORT_JOBS_ID}
        options={sortOptions}
        value="newest"
      />

      {/* Layout Buttons */}
      <LayoutButtons />
    </div>
  );
}
