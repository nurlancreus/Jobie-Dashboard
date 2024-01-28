import { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSortParams } from "@/hooks/useSortParams";
import { useSwitchParams } from "@/hooks/useSwitchParams";
import {
  SELECT_PERIOD_ID,
  SWITCH_APPLICATIONS_ID,
  SWITCH_INTERVIEWS_ID,
  SWITCH_REJECTED_ID,
} from "@/utils/constants";

export default function VacancyStatsChart() {
  const isScreenSmall = useMediaQuery("(max-width: 992px)");
  const { paramsValue: selectBy } = useSortParams(SELECT_PERIOD_ID, "year");

  const { switchOn: showApplication } = useSwitchParams(
    SWITCH_APPLICATIONS_ID,
    true,
  );
  const { switchOn: showInterviews } = useSwitchParams(
    SWITCH_INTERVIEWS_ID,
    true,
  );
  const { switchOn: showRejected } = useSwitchParams(SWITCH_REJECTED_ID, true);

  const tickState = {
    unit: "",
    tickCount: 0,
  };

  switch (selectBy) {
    case "year":
      tickState.unit = "Mon";
      tickState.tickCount = 12;
      break;
    case "month":
      tickState.unit = "Week";
      tickState.tickCount = 5;
      break;
    case "week":
      tickState.unit = "Day";
      tickState.tickCount = 7;
      break;
    default:
      throw Error();
  }

  const data = useMemo(() => {
    return Array.from({ length: tickState.tickCount }, (_, i) => {
      const totalApps = Math.floor(Math.random() * 80 + 1);
      const interviews = Math.floor(Math.random() * totalApps + 1);
      const rejected = totalApps - interviews;

      return {
        name: i < 9 ? `0${i + 1}` : i + 1,
        application: totalApps,
        interviews,
        rejected,
      };
    });
  }, [tickState.tickCount]);

  return (
    <div className="mt-6 lg:mt-10">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: isScreenSmall ? 0 : 30,
            left: isScreenSmall ? -20 : 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            dy={16}
            angle={isScreenSmall ? -25 : 0}
            style={{
              fontSize: isScreenSmall ? 12 : 16,
              fill: "var(--gray-600)",
            }}
            tickFormatter={(d) => `${tickState.unit} ${d}`}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            dx={-10}
            style={{
              fontSize: isScreenSmall ? 12 : 16,
              fill: "var(--gray-600)",
            }}
          />
          <Tooltip />
          <Legend
            iconType="circle"
            wrapperStyle={{
              paddingTop: 24,
              textTransform: "capitalize",
              fontSize: isScreenSmall ? 14 : 16,
            }}
          />

          <Line
            type="monotone"
            dataKey="application"
            stroke="#4E36E2"
            dot={false}
            strokeWidth={5}
            display={showApplication ? "block" : "none"}
          />
          <Line
            type="monotone"
            dataKey="interviews"
            stroke="#1BD084"
            dot={false}
            strokeWidth={5}
            display={showInterviews ? "block" : "none"}
          />
          <Line
            type="monotone"
            dataKey="rejected"
            stroke="#FF424D"
            dot={false}
            strokeWidth={5}
            display={showRejected ? "block" : "none"}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
