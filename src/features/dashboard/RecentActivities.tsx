import { useState } from "react";
import { ApplicationsIcon, ArrowIcon } from "@/assets/icons";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { timeAgo } from "@/utils/helpers";

const recentActivities = [
  {
    id: 1,
    body: "Your application has accepted in",
    vacancyCount: 5,
    icon: <ApplicationsIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 2,
    body: "Your application has accepted in",
    vacancyCount: 3,
    icon: <ApplicationsIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 3,
    body: "Your application has accepted in",
    vacancyCount: 2,
    icon: <ApplicationsIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 4,
    body: "Your application has accepted in",
    vacancyCount: 1,
    icon: <ApplicationsIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 5,
    body: "Your application has accepted in",
    vacancyCount: 4,
    icon: <ApplicationsIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 6,
    body: "Your application has accepted in",
    vacancyCount: 7,
    icon: <ApplicationsIcon />,
    timestamp: new Date(12, 8, 2023).getTime(),
  },
  {
    id: 7,
    body: "Your application has accepted in",
    vacancyCount: 2,
    icon: <ApplicationsIcon />,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).getTime(),
  },
  {
    id: 8,
    body: "Your application has accepted in",
    vacancyCount: 2,
    icon: <ApplicationsIcon />,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).getTime(),
  },
  {
    id: 9,
    body: "Your application has accepted in",
    vacancyCount: 3,
    icon: <ApplicationsIcon />,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).getTime(),
  },
  {
    id: 10,
    body: "Your application has accepted in",
    vacancyCount: 5,
    icon: <ApplicationsIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
];

export default function RecentActivites() {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");
  const [isListOpen, setIsListOpen] = useState(false);

  const formattedActivities = recentActivities.sort(
    (a, b) => b.timestamp - a.timestamp,
  );

  return (
    <div className="relative basis-7/12 p-4">
      <h3 className="mb-5 pt-2 text-lg font-medium text-dark">Recent Activites</h3>
      <ul
        className={`custom-scrollbar flex flex-col gap-4 transition-all duration-200 ${
          isListOpen || !isAboveLargeScreens
            ? "h-[400px] overflow-y-auto"
            : "h-[360px] overflow-hidden"
        }`}
      >
        {formattedActivities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </ul>
      {isAboveLargeScreens && (
        <button
          className={`z-1 absolute left-0 right-0 mx-auto grid h-[60px] w-[60px] place-content-center rounded-full bg-card dark:[&_path]:fill-neutral-200 shadow-[0px_12px_24px_0_rgba(0,0,0,0.25)] transition-transform duration-200 ${
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
    id: number;
    body: string;
    icon: JSX.Element;
    timestamp: number;
    vacancyCount: number;
  };
};

function Activity({ activity }: ActivityProps) {
  return (
    <li
      className="grid grid-cols-[auto_1fr] items-center gap-4"
      key={activity.id}
    >
      <span className="grid h-[3.75rem] w-[3.75rem] place-content-center rounded-2xl border [&_svg]:h-6 [&_svg]:w-6 [&_path]:fill-primary dark:[&_path]:fill-neutral-100/50">
        {activity.icon}
      </span>
      <div className="text-sm">
        <p className="font-medium text-gray-600">
          {activity.body} <strong>{activity.vacancyCount} Vacancy</strong>
        </p>
        <span className="text-gray-200">{timeAgo(activity.timestamp)}</span>
      </div>
    </li>
  );
}
