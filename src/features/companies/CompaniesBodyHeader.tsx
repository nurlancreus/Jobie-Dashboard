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
    <div className="flex items-center justify-between mb-[30px]">
      <Titles title={`Showing ${dataLength} search results`} />
      <div className="flex items-center gap-10">
        <div className="flex items-center">
          <SwitchBtn id={SWITCH_SALARY_ID} key={SWITCH_SALARY_ID} label="Salary" checked={true} />
        </div>
        <div className="flex items-center gap-8">
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
      </div>
    </div>
  );
}
