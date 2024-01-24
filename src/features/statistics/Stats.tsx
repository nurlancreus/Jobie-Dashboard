import {
  StatsEyeIcon,
  StatsSuitcaseIcon,
  StatsReplyIcon,
  StatsCalendarIcon,
  PhoneIcon,
} from "@/assets/icons";
import StatsChatIcon from "@/assets/icons/StatsChatIcon";

const stats = [
  {
    id: "profile-viewed",
    value: 456_000,
    icon: <StatsEyeIcon />,
    title: "Profile Viewed",
    extra: 24,
  },
  {
    id: "unread-messages",
    value: 28,
    icon: <StatsChatIcon />,
    title: "Unread Messages",
  },
  {
    id: "app-sent",
    value: 651,
    icon: <StatsSuitcaseIcon />,
    title: "Application Sent",
  },
  {
    id: "app-answered",
    value: 24,
    icon: <StatsReplyIcon />,
    title: "App. Answered",
  },
  {
    id: "interviewed",
    value: 255,
    icon: <StatsCalendarIcon />,
    title: "Interviewed",
  },
  {
    id: "hired",
    value: 72,
    icon: <PhoneIcon />,
    title: "Hired",
  },
];

export default function Stats() {
  return (
    <>
      {stats.map((stat) => (
        <Stat
          key={stat.id}
          dataStats={stat.id as StatDataType}
          icon={stat.icon}
          title={stat.title}
          value={stat.value}
          extra={stat.extra}
        />
      ))}
    </>
  );
}

import Title from "@/shared/Title";
import { formatNumbers } from "@/utils/helpers";

export type StatDataType =
  | "profile-viewed"
  | "unread-messages"
  | "app-sent"
  | "app-answered"
  | "interviewed"
  | "hired";

type StatProps = {
  dataStats: StatDataType;
  value: number;
  title: string;
  icon: JSX.Element;
  extra?: number;
};

function Stat({
  value,
  title,
  icon,
  extra,
  dataStats,
}: StatProps) {
  const isExtraLong = extra && extra > 0;

  return (
    <article
      data-stats={dataStats}
      className="stat flex flex-col justify-between h-full p-6 min-h-[180px]"
    >
      <div className="space-y-1">
        <span className="capitalize gray-700 text-base">{title}</span>
        <Title fs={28} fw="semibold">
          {formatNumbers(value, { notation: "compact" })}
        </Title>
      </div>
      <div className="flex items-center gap-4">
        <span className="[&_svg]:w-7 [&_svg]:h-7 sm:[&_svg]:w-8  sm:[&_svg]:h-8 lg:[&_svg]:w-9 lg:[&_svg]:h-9 xl:[&_svg]:w-auto xl:[&_svg]:h-auto">{icon}</span>
        {extra && (
          <div className="flex flex-col">
            <span
              className={`text-sm font-semibold ${
                isExtraLong ? "text-green-500" : "text-red-500"
              }`}
            >
              {isExtraLong ? "+" : "-"}
              {extra}%
            </span>
            <span className="lowercase text-sm font-light text-gray-300 whitespace-nowrap">
              than last month
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
