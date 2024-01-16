import {
  CalendarIcon,
  EmailIcon,
  SuitcaseIcon,
  UserIcon,
} from "@/assets/icons";
import Widget from "./Widget";

const widgetsData = [
  {
    id: 1,
    icon: <CalendarIcon />,
    label: "Interviews Schedule",
    value: 86,
  },
  {
    id: 2,
    icon: <SuitcaseIcon />,
    label: "Application Sent",
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
    label: "Unread Message",
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
