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
    <div className="flex items-center gap-11 mt-10 ml-8">
      <h3 className="text-base font-normal text-gray-300">Suggestions</h3>
      <FilterTabs filterField="position" options={tabNavigation} />
    </div>
  );
}
