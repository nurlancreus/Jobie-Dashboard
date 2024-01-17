import VacancyStatsForm from "./VacancyStatsForm";
import VacancyStatsChart from "./VacancyStatsChart";

export default function VacancyStats() {
  return (
    <div className="col-[1/-1] row-[6/7] rounded-[20px] bg-white p-[26px_26px_30px_30px] sm:row-[4/5] lg:col-[2/-1] lg:row-[2/3]">
      <VacancyStatsForm />
      <VacancyStatsChart />
    </div>
  );
}
