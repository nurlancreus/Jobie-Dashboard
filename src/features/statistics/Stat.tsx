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

export default function Stat({
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
