import { useState } from "react";
import { ApplicationsIcon, ArrowIcon } from "@/assets/icons";
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
  const [isListOpen, setIsListOpen] = useState(false);
  
  const formattedActivities = recentActivities.sort(
    (a, b) => b.timestamp - a.timestamp,
  );

  return (
    <div className="p-[0_26px_26px] relative">
      <h3 className="text-lg text-dark font-medium mb-5">Recent Activites</h3>
      <ul
        className={`flex flex-col gap-4 transition-all duration-200 custom-scrollbar ${
          isListOpen ? "overflow-y-auto h-[380px]" : "overflow-hidden h-[360px]"
        }`}
      >
        {formattedActivities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </ul>
      <button
        className={`w-[60px] h-[60px] shadow-[0px_12px_24px_0_rgba(0,0,0,0.25)] transition-transform duration-200  rounded-full grid place-content-center bg-white absolute left-0 right-0 mx-auto z-1 ${
          isListOpen ? "rotate-180" : ""
        }`}
        onClick={() => setIsListOpen((prev) => !prev)}
      >
        <ArrowIcon />
      </button>
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
      <span className="grid place-content-center w-[60px] h-[60px] rounded-2xl border [&_svg_path]:fill-primary [&_svg]:w-6 [&_svg]:h-6">
        {activity.icon}
      </span>
      <div className="text-sm">
        <p className="font-medium text-gray-600">{activity.body} <strong>{activity.vacancyCount} Vacancy</strong></p>
        <span className="text-gray-200">{timeAgo(activity.timestamp)}</span>
      </div>
    </li>
  );
}
