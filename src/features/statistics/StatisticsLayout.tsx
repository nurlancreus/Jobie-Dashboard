import ProfileStrength from "./ProfileStrength";
import VisitorGraph from "./VisitorGraph";
import JobTrends from "./JobTrends";
import Stats from "./Stats";
import Network from "./Network";

export default function StatisticsLayout() {
  return (
    <section>
      <div className="grid grid-cols-1 grid-rows-[auto_auto_226px_226px_226px_226px_226px_226px_auto_auto] gap-6 sm:grid-cols-2 sm:grid-rows-[auto_auto_226px_226px_226px_auto_auto] md:grid-cols-3 md:grid-rows-[auto_auto_226px_226px_auto_auto] lg:grid-cols-4 lg:grid-rows-[226px_226px_226px_auto_auto] xl:grid-cols-6 xl:grid-rows-[226px_226px_318px_auto] xl:gap-8 xxl:gap-10 [&_article:not(.job-trends)]:p-4 lg:[&_article:not(.job-trends)]:p-6 xl:[&_article:not(.job-trends)]:p-8 [&_article]:rounded-[20px] [&_article]:bg-white [&_article]:shadow-[0px_4px_0px_0px_rgba(0,0,0,0.04)]">
        <div className="row-[1/2] sm:col-[1/-1] lg:col-[1/3] lg:row-[1/3] xl:col-[1/4] xl:row-[1/3]">
          <ProfileStrength />
        </div>

        <div className="col-[1/-1] row-[2/3] lg:col-[1/3] lg:row-[3/4] xl:col-[1/4] xl:row-[3/4]">
          <VisitorGraph />
        </div>
        <Stats />

        <div className="col-[1/-1] row-[9/10] sm:row-[6/7] md:row-[5/6] lg:col-[3/-1] lg:row-[4/5] xl:col-[4/-1] xl:row-[3/4]">
          <Network />
        </div>

        <div className="col-[1/-1] row-[10/-1] sm:row-[7/-1] md:row-[6/-1] lg:col-[3/-1] lg:row-[5/-1] xl:col-[4/-1] xl:row-[4/5]">
          <JobTrends />
        </div>
      </div>
    </section>
  );
}
