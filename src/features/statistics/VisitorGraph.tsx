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
  return (
    <article data-stats="visitor-graph">
      <div className="flex flex-wrap items-center gap-y-3 gap-x-6 justify-between mb-2">
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
              right: 30,
              left: -30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="name" dy={10} />
            <YAxis tickLine={false} tickFormatter={() => ""} axisLine={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="left"
              iconType="circle"
              iconSize={15}
              wrapperStyle={{ marginTop: -10, marginLeft: 56 }}
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
