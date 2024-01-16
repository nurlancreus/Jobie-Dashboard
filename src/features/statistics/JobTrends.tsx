import ActionButton from "@/shared/ActionButton";
import Title from "@/shared/Title";
import AdminProgress from "../dashboard/AdminProgress";

const jobTrends = [
  {
    id: 1,
    value: 0.66,
    label: "Engineer",
  },
  {
    id: 2,
    value: 0.31,
    label: "Designer",
  },
  {
    id: 3,
    value: 0.75,
    label: "Manager",
  },
  {
    id: 4,
    value: 0.62,
    label: "Programmer",
  },
];

export default function JobTrends() {
  return (
    <article data-stats="job-trends">
      <div className="flex items-center justify-between">
        <Title>Job Trends</Title>
        <ActionButton />
      </div>
      <div className="w-full flex items-center pt-5 [&>div]:gap-16">
        <AdminProgress progress={jobTrends} />
      </div>
    </article>
  );
}
