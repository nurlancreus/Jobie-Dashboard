import { CircularProgressbar } from "react-circular-progressbar";
import { CircularProgressbarStyles } from "react-circular-progressbar/dist/types";

const progressBarStyles = {
  // Customize the root svg element
  root: {},
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
    fill: "#000",
    // Text size
    fontSize: "22px",
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
  }>;
};

export default function AdminProgress({ progress }: AdminProgressProps) {
  return (
    <div className="flex w-full items-center justify-between">
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
            className={`relative h-fit max-h-24 w-fit max-w-24 flex-1 p-2`}
            key={data.id}
          >
            <div className="absolute bottom-[-20px] left-0 right-0 text-center">
              {data.label}
            </div>
            <CircularProgressbar
              value={data.value}
              maxValue={1}
              text={`${data.value * 100}%`}
              styles={{
                ...progressBarStyles,
                path: { ...progressBarStyles.path, stroke: color },
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
