import { CircularProgressbar } from "react-circular-progressbar";
import { CircularProgressbarStyles } from "react-circular-progressbar/dist/types";
import { formatNumbers } from "@/utils/helpers";

const progressBarStyles = {
  // Customize the root svg element
  root: {
    width: "100%"
  },
  // Customize the path, i.e. the "completed progress"
  path: {
    // Path color
    stroke: `#FF8E26`,
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",
    // Customize transition animation
    transition: "stroke-dashoffset 0.5s ease 0s",
    // Rotate the path
    transform: "rotate(-0.75turn)",
    transformOrigin: "center center",
    strokeWidth: 12,
  },
  // Customize the circle behind the path, i.e. the "total progress"
  trail: {
    // Trail color
    stroke: "#f0f0f0",
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",
    // Rotate the trail
    transform: "rotate(0.25turn)",
    transformOrigin: "center center",
  },
  // Customize the text
  text: {
    // Text color
    fill: "var(--dark-clr)",
    // Text size
    fontSize: "18px",
    fontWeight: 600,
    translate: "-18px 8px",
  },
  // Customize background - only used when the `background` prop is true
  background: {
    fill: "#3e98c7",
  },
} as CircularProgressbarStyles;

type AdminProgressProps = {
  progress: Array<{
    id: number;
    value: number;
    label: string;
    vacancyNumber?: number;
  }>;
  variant?: "default" | "trends";
};

export default function AdminProgress({
  progress,
  variant = "default",
}: AdminProgressProps) {
  const isJobTrends = variant === "trends";

  return (
    <div
      className={`w-full ${isJobTrends ? "grid gap-4 grid-cols-1 grid-rows-2 place-content-center justify-items-center xs:grid-cols-[8rem_8rem] sm:grid-cols-4 sm:grid-rows-1 lg:grid-cols-[10rem_10rem] lg:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1" : "flex items-center justify-between"} `}
    >
      {progress.map((data) => {
        let color: string;

        switch (data.label) {
          case "React":
            color = "#3EA834";
            break;
          case "Ts":
            color = "#22AC93";
            break;
          case "Js":
            color = "#FF8E26";
            break;
          default:
            color = "#40189D";
            break;
        }
        return (
          <div
            className={`relative ${isJobTrends ? "col-span-1 max-w-[15rem] px-12 xs:px-0" : "h-fit max-h-24 w-fit max-w-24 flex-1"} p-2`}
            key={data.id}
          >
            <CircularProgressbar
              value={data.value}
              maxValue={1}
              text={`${data.value * 100}%`}
              styles={{
                ...progressBarStyles,
                root: {
                  ...progressBarStyles.root,
                  maxWidth: isJobTrends ? 110 : "auto",
                },
                path: { ...progressBarStyles.path, stroke: color },
              }}
            />
            <div
              className={`${isJobTrends ? "" : "absolute bottom-[-1.25rem] left-0 right-0"} text-center`}
            >
              <p
                className={`${isJobTrends ? "text-lg font-medium" : "text-sm"}`}
              >
                {data.label}
              </p>
              {data.vacancyNumber && (
                <p className="whitespace-nowrap text-center text-sm text-dark">
                  {formatNumbers(data.vacancyNumber)} Vacancy
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
