import {
  CalendarIcon,
  EmailIcon,
  SuitcaseIcon,
  UserIcon,
} from "@/assets/icons";
import { formatNumbers } from "@/utils/helpers";

const widgetsData = [
  {
    id: 1,
    icon: <CalendarIcon />,
    label: "Interviews",
    value: 86,
  },
  {
    id: 2,
    icon: <SuitcaseIcon />,
    label: "Apply",
    value: 75,
  },
  {
    id: 3,
    icon: <UserIcon />,
    label: "Profile Viewed",
    value: 45_673,
  },
  {
    id: 4,
    icon: <EmailIcon />,
    label: "Message",
    value: 93,
  },
];

export default function Widgets() {
  return (
    <>
      {widgetsData.map((widget) => (
        <Widget key={widget.id} widget={widget} />
      ))}
    </>
  );
}

type WidgetProps = {
  widget: {
    id: number;
    icon: JSX.Element;
    label: string;
    value: number;
  };
};

function Widget({ widget }: WidgetProps) {
  return (
    <article
      className={`widget-${widget.id} overflow-hidden rounded-[28px] p-[32px_24px_24px] xl:p-[36px_26px_26px] xxl:p-[40px_30px_30px]`}
    >
      <div className="flex items-center justify-between">
        <span className="grid min-h-fit min-w-fit place-content-center rounded-xl border border-solid border-primary-300 p-2 lg:p-3 [&_svg]:h-8 [&_svg]:w-8 xl:[&_svg]:h-9 xl:[&_svg]:w-9 xxl:[&_svg]:h-auto xxl:[&_svg]:w-auto">
          {widget.icon}
        </span>
        <div className="flex flex-col items-end text-white">
          <p className="whitespace-nowrap text-lg font-medium">
            {widget.label}
          </p>
          <h3 className="text-5xl font-semibold">{formatNumbers(widget.value) }</h3>
        </div>
      </div>
    </article>
  );
}
