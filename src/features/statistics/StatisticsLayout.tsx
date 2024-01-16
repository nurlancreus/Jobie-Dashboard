import ProfileStrength from "./ProfileStrength";
import VisitorGraph from "./VisitorGraph";
import JobTrends from "./JobTrends";
import Stats from "./Stats";
import Network from "./Network";

export default function StatisticsLayout() {
  return (
    <section>
      <div className="grid grid-cols-6 grid-rows-[226px_226px_318px_318px] gap-10 [&_article]:bg-white [&_article]:rounded-[20px] [&_article:not(.stat)]:p-8 [&_article]:shadow-[0px_4px_0px_0px_rgba(0,0,0,0.04)]">
        <div className="col-[1/4] row-[1/3] min-h-screen">
          <ProfileStrength />
        </div>

        <div className="col-[1/4] row-[3/4]">
          <VisitorGraph />
        </div>
        <Stats />

        <div className="col-[4/-1] row-[3/4]">
          <Network />
        </div>

        <div className="col-[4/-1] row-[4/5]">
          <JobTrends />
        </div>
      </div>
    </section>
  );
}
