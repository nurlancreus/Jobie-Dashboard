import {
  StatsEyeIcon,
  StatsSuitcaseIcon,
  StatsReplyIcon,
  StatsCalendarIcon,
  PhoneIcon,
} from "@/assets/icons";
import StatsChatIcon from "@/assets/icons/StatsChatIcon";
import Stat, { type StatDataType } from "./Stat";

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
