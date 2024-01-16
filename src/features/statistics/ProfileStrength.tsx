import ActionButton from "@/shared/ActionButton";
import Title from "@/shared/Title";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  DefaultLegendContentProps,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

const profileStrengthData = [
  {
    name: "Sun",
    hired: 4000,
    "app-answered": 2400,
    "app-sent": 2400,
  },
  {
    name: "Mon",
    hired: 3000,
    "app-answered": 1398,
    "app-sent": 2210,
  },
  {
    name: "Tue",
    hired: 2000,
    "app-answered": 9800,
    "app-sent": 2290,
  },
  {
    name: "Wed",
    hired: 2780,
    "app-answered": 3908,
    "app-sent": 2000,
  },
  {
    name: "Thu",
    hired: 1890,
    "app-answered": 4800,
    "app-sent": 2181,
  },
  {
    name: "Fri",
    hired: 2390,
    "app-answered": 3800,
    "app-sent": 2500,
  },
  {
    name: "Sat",
    hired: 3490,
    "app-answered": 4300,
    "app-sent": 2100,
  },
];

interface ProfileStrengthData {
  [index: string]: string | number;
  name: string;
  hired: number;
  "app-answered": number;
  "app-sent": number;
}

// Calculate totals
const totalHired = profileStrengthData.reduce((sum, day) => sum + day.hired, 0);
const totalAppAnswered = profileStrengthData.reduce(
  (sum, day) => sum + day["app-answered"],
  0,
);
const totalAppSent = profileStrengthData.reduce(
  (sum, day) => sum + day["app-sent"],
  0,
);

// Calculate percentages
const profileStrengthWithPercentages: ProfileStrengthData[] =
  profileStrengthData.map((day) => ({
    name: day.name,
    hired: (day.hired / totalHired) * 100,
    "app-answered": (day["app-answered"] / totalAppAnswered) * 100,
    "app-sent": (day["app-sent"] / totalAppSent) * 100,
  }));

interface CustomPayload extends Payload {
  dataKey: string;
}
const renderLegend = (props: DefaultLegendContentProps) => {
  const { payload } = props as { payload: Array<CustomPayload> };

  return (
    <ul className="flex flex-col gap-4 pl-6">
      {payload?.map((entry, index) => {

        const percentage = profileStrengthWithPercentages[0][
          entry.dataKey
        ] as number;

        return (
          <li key={`item-${index}`} className="flex items-center gap-4">
            <span
              className={`rounded-xl w-8 h-6 custom-legend-${entry.dataKey}`}
            />

            <p className="text-lg font-medium text-black capitalize">
              {percentage.toFixed(0)}%
            </p>
            <p className="text-sm font-medium text-gray-900 capitalize">
              {entry.value}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default function ProfileStrength() {
  return (
    <article data-stats="profile-strength">
      <div className="flex items-center justify-between">
        <Title>Profile Strength</Title>
        <ActionButton />
      </div>
      <div>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart
            width={500}
            height={300}
            data={profileStrengthData}
            margin={{
              top: -20,
              right: 30,
              left: -30,
              bottom: 5,
            }}
            barCategoryGap={14}
          >
            <XAxis dataKey="name" dy={5} axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tick={false} tickLine={false} />
            <Tooltip />
            <Legend
              content={renderLegend}
              iconType="circle"
              iconSize={15}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <Bar
              name="application Answered"
              dataKey="app-answered"
              stackId="a"
              fill="#2BC155"
              radius={[0, 0, 10, 10]}
            />
            <Bar name="hired" dataKey="hired" stackId="a" fill="#FF9B52" />
            <Bar
              name="application Sent"
              dataKey="app-sent"
              stackId="a"
              fill="#3F9AE0"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
