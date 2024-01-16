import UserActivities from "./AdminActivities";
import FeaturedCompanies from "./FeaturedCompanies";
import RecomendedJobs from "./RecomendedJobs";
import VacancyStats from "./VacancyStats";
import Widgets from "./Widgets";

export default function DashboardLayout() {
  return (
    <section>
      <div className="grid grid-cols-4 grid-rows-[170px_480px_auto_auto] gap-10">
        <Widgets />
        <UserActivities />
        <VacancyStats />
        <RecomendedJobs />
        <FeaturedCompanies />
      </div>
    </section>
  );
}
