import { useState } from "react";
import { ApplicationsIcon, ArrowIcon, MiniLoader } from "@/assets/icons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { timeAgo } from "@/utils/helpers";
import { useGetActivities } from "./useGetActivities";
import { NonNullProps } from "@/models/types";

export default function RecentActivites() {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");
  const [isListOpen, setIsListOpen] = useState(false);
  const { activities, isLoading } = useGetActivities();

  return (
    <div className="relative sm:basis-1/2 md:basis-7/12 p-4">
      <h3 className="mb-5 pt-2 text-lg font-medium text-dark">
        Recent Activites
      </h3>

      <ul
        className={`custom-scrollbar flex flex-col gap-4 transition-all duration-200 ${
          isListOpen || !isAboveLargeScreens
            ? "h-[400px] overflow-y-auto"
            : "h-[360px] overflow-hidden"
        }`}
      >
        {isLoading || !activities ? (
          <span className="flex justify-center">
            <MiniLoader />
          </span>
        ) : (
          activities.map((activity) => (
            <Activity
              key={activity.id}
              activity={activity as NonNullProps<(typeof activities)[number]>}
            />
          ))
        )}
      </ul>
      {isAboveLargeScreens && (
        <button
          className={`z-1 absolute left-0 right-0 mx-auto grid h-[60px] w-[60px] place-content-center rounded-full bg-card shadow-[0px_12px_24px_0_rgba(0,0,0,0.25)] transition-transform duration-200 dark:[&_path]:fill-neutral-200 ${
            isListOpen ? "-rotate-90" : "rotate-90"
          }`}
          onClick={() => setIsListOpen((prev) => !prev)}
        >
          <ArrowIcon />
        </button>
      )}
    </div>
  );
}

type ActivityProps = {
  activity: {
    created_at: string;
    id: number;
    activity: string;
    vacancy_count: number;
  };
};

function Activity({ activity }: ActivityProps) {
  return (
    <li
      className="grid grid-cols-[auto_1fr] items-center gap-4"
      key={activity.id}
    >
      <span className="grid h-[3.75rem] w-[3.75rem] place-content-center rounded-2xl border [&_path]:fill-primary dark:[&_path]:fill-neutral-100/50 [&_svg]:h-6 [&_svg]:w-6">
        <ApplicationsIcon />
      </span>
      <div className="text-sm">
        <p className="font-medium text-gray-600">
          {activity.activity} <strong>{activity.vacancy_count} Vacancy</strong>
        </p>
        <span className="text-gray-200">{timeAgo(activity.created_at)}</span>
      </div>
    </li>
  );
}
