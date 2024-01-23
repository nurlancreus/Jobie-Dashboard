import FilterTabs from "@/shared/FilterTabs";

const tabNavigation = [
  {
    label: "Your Skill",
    value: "your-skill",
  },
  {
    label: "Programmer",
    value: "programmer",
  },
  {
    label: "Software Engineer",
    value: "software-engineer",
  },
  {
    label: "Photographer",
    value: "photographer",
  },
  {
    label: "Digital Marketing",
    value: "digital-arketing",
  },
];

export default function JobTabs() {
  return (
    <div className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:ml-4 lg:ml-6 lg:gap-6 xl:ml-8 xl:gap-9 xxl:gap-11">
      <h3 className="text-base font-normal text-gray-300">Suggestions</h3>
      <FilterTabs filterField="position" options={tabNavigation} />
    </div>
  );
}
