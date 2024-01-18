import LayoutButtons from "@/shared/LayoutButtons";
import Select from "@/shared/Select";
import SwitchBtn from "@/shared/SwitchBtn";
import Titles from "@/shared/Titles";
import { SORT_COMPANIES_ID, SWITCH_SALARY_ID } from "@/utils/constants";

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

type CompaniesBodyHeaderProps = {
  dataLength: number;
};

export default function CompaniesBodyHeader({
  dataLength,
}: CompaniesBodyHeaderProps) {
  return (
    <div className="mb-[30px] flex flex-wrap items-center justify-between gap-4 [&>*:first-child]:mr-auto">
      <Titles title={`Showing ${dataLength} search results`} />

      <SwitchBtn
        id={SWITCH_SALARY_ID}
        key={SWITCH_SALARY_ID}
        label="Salary"
        checked={true}
      />

      {/* Sort By */}
      <Select
        variant="sort"
        id={SORT_COMPANIES_ID}
        options={sortOptions}
        value={"newest"}
      />

      {/* Layout Buttons */}
      <LayoutButtons />
    </div>
  );
}
