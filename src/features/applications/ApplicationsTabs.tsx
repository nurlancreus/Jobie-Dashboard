import { useGetApplicationStatuses } from "./useGetApplicationStatuses";
import FilterTabs from "@/shared/FilterTabs";
import Loader from "@/shared/Loader";

export default function ApplicationsTabs() {
  const { applications, isLoading } = useGetApplicationStatuses();

  if (isLoading) return <Loader />;

  const tabOptions = applications.reduce(
    (acc, curr) => {
      if (!acc.map((tab) => tab.value).includes(curr.status)) {
        return [...acc, { value: curr.status, label: curr.status }];
      } else return acc;
    },
    [{ value: "all", label: "All" }] as { value: string; label: string }[],
  );

  return <FilterTabs filterField="status" options={tabOptions} />;
}
