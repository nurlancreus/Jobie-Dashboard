import { useMediaQuery } from "@/hooks/useMediaQuery";
import Select from "@/shared/Select";
import SwitchBtn from "@/shared/SwitchBtn";
import Title from "@/shared/Title";
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

const selectOptions = [
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "monthly",
    label: "Monthly",
  },
  {
    value: "yearly",
    label: "Yearly",
  },
];

const visitorGraphData = [
  {
    name: "Page A",
    views: 4000,
    hired: 2400,
  },
  {
    name: "Page B",
    views: 3000,
    hired: 1398,
  },
  {
    name: "Page C",
    views: 2000,
    hired: 9800,
  },
  {
    name: "Page D",
    views: 2780,
    hired: 3908,
  },
  {
    name: "Page E",
    views: 1890,
    hired: 4800,
  },
  {
    name: "Page F",
    views: 2390,
    hired: 3800,
  },
  {
    name: "Page G",
    views: 3490,
    hired: 4300,
  },
];

export default function VisitorGraph() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <article data-stats="visitor-graph">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <Title fs={20}>Visitor Graph</Title>
        <SwitchBtn id="graphDetails" checked={false} label="Show Details" />
        <Select
          variant="default"
          id="selectPeriod"
          options={selectOptions}
          value="weekly"
        />
      </div>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={visitorGraphData}
            margin={{
              top: 15,
              right: isAboveSmallScreens ? 30 : 0,
              left: isAboveSmallScreens ? -30 : -60,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0" stopOpacity={0.4} />
            <XAxis
              dataKey="name"
              dy={10}
              angle={isAboveSmallScreens ? 0 : -25}
              style={{
                fontSize: isAboveSmallScreens ? 16 : 12,
              }}
            />
            <YAxis tickLine={false} tickFormatter={() => ""} axisLine={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="left"
              iconType="circle"
              iconSize={15}
              wrapperStyle={{
                marginTop: -10,
                marginLeft: 56,
                fontSize: isAboveSmallScreens ? 16 : 14,
              }}
            />
            <Line
              type="monotone"
              name="View Profile"
              dataKey="views"
              stroke="#40189D"
              strokeWidth={5}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              name="Hire"
              dataKey="hired"
              stroke="#3F9AE0"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
