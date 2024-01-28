import AdminProgress from "../dashboard/AdminProgress";
import ActionButton from "@/shared/ActionButton";
import Title from "@/shared/Title";

const jobTrends = [
  {
    id: 1,
    vacancyNumber: 3_500,
    label: "Engineer",
  },
  {
    id: 2,
    vacancyNumber: 7_525,
    label: "Designer",
  },
  {
    id: 3,
    vacancyNumber: 1821,
    label: "Manager",
  },
  {
    id: 4,
    vacancyNumber: 5_962,
    label: "Programmer",
  },
];

const totalVacancies = jobTrends.reduce((acc, curr) => acc + curr.vacancyNumber, 0);
const trendProgress = jobTrends.map((trend) => {
  const value = +(trend.vacancyNumber / totalVacancies).toFixed(2);
  return { ...trend, value };
});

export default function JobTrends() {
  return (
    <article data-stats="job-trends" className="job-trends">
      <div className="mb-1 flex items-center justify-between">
        <Title fs={20}>Job Trends</Title>
        <ActionButton />
      </div>
      <div className="flex w-full items-center pt-5">
        <AdminProgress progress={trendProgress} variant="trends" />
      </div>
    </article>
  );
}
