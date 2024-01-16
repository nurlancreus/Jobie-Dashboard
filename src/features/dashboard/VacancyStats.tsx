import VacancyStatsForm from "./VacancyStatsForm";
import VacancyStatsChart from "./VacancyStatsChart";

export default function VacancyStats() {
  return (
    <div className="p-[26px_26px_30px_30px] rounded-[20px] bg-white col-[2/-1] row-[2/3]">
      <VacancyStatsForm />
      <VacancyStatsChart />
    </div>
  );
}
