import VacancyStatsForm from "./VacancyStatsForm";
import VacancyStatsChart from "./VacancyStatsChart";

export default function VacancyStats() {
  return (
    <div className="col-[1/-1] row-[6/7] rounded-[1.25rem] bg-card p-5 sm:row-[4/5] lg:col-[2/-1] lg:row-[2/3] lg:p-[1.5rem_1.5rem_1.75rem_1.75rem] xl:p-[1.75rem_1.75rem_2rem_2rem]">
      <VacancyStatsForm />
      <VacancyStatsChart />
    </div>
  );
}
