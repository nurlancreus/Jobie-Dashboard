import { appsData } from "@/data/appsData";
import FilterTabs from "@/shared/FilterTabs";

export default function ApplicationsTabs() {
  const tabOptions = appsData.reduce(
    (acc, curr) => {
      if (!acc.map((tab) => tab.value).includes(curr.status)) {
        return [...acc, { value: curr.status, label: curr.status }];
      } else return acc;
    },
    [{ value: "all", label: "All" }] as { value: string; label: string }[],
  );

  return <FilterTabs filterField="status" options={tabOptions} />;
}
