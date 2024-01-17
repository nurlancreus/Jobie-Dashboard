import UserActivities from "./AdminActivities";
import FeaturedCompanies from "./FeaturedCompanies";
import RecomendedJobs from "./RecomendedJobs";
import VacancyStats from "./VacancyStats";
import Widgets from "./Widgets";

export default function DashboardLayout() {
  return (
    <section>
      <div className="grid grid-cols-1 grid-rows-[170px_170px_170px_170px_auto_auto_auto_auto] gap-6 sm:grid-cols-2 sm:grid-rows-[170px_170px_auto_auto_auto_auto] lg:grid-cols-4 lg:grid-rows-[170px_480px_auto_auto] xl:gap-8 xxl:gap-10">
        <Widgets />
        <UserActivities />
        <VacancyStats />
        <RecomendedJobs />
        <FeaturedCompanies />
      </div>
    </section>
  );
}
