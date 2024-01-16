import {
  ApplicationsIcon,
  DashboardIcon,
  NewsIcon,
  SearchJobIcon,
  StatisticsIcon,
  UserIcon,
} from "@/assets/icons";
import logo from "@/assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const sidebarNavigation = [
  {
    path: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "search-jobs",
    label: "Search Job",
    icon: <SearchJobIcon />,
  },
  {
    path: "applications",
    label: "Applications",
    icon: <ApplicationsIcon />,
  },
  {
    path: "companies",
    label: "Companies",
    icon: <NewsIcon />,
  },
  {
    path: "statistics",
    label: "Statistics",
    icon: <StatisticsIcon />,
  },
  {
    path: "profile",
    label: "Profile",
    icon: <UserIcon />,
  },
];

type SidebarProps = { isOpen: boolean };

export default function Sidebar({ isOpen }: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <aside
      className={`row-span-full col-start-1 col-end-2 bg-primary text-white ${
        isOpen ? "pl-[32px]" : "pl-[24px]"
      } transition-all duration-300 flex flex-col gap-6 overflow-hidden`}
    >
      <div className="pl-[14px] py-7">
        <div className="w-[188px] h-[66px]">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              width={188}
              height={66}
              className="w-full h-full object-fill"
            />
          </Link>
        </div>
      </div>
      <nav>
        <ul className="flex flex-col gap-[10px]">
          {sidebarNavigation.map((nav) => {
            const isActive = pathname.slice(1) === nav.path;

            return (
              <li key={nav.label} className="group">
                <Link
                  to={nav.path}
                  className={`flex items-center transition-colors [&_path]:fill-gray-200 [&_svg]:w-7 [&_svg]:h-7 duration-200 pl-8 text-gray-200 text-lg font-medium gap-11 py-7 rounded-l-[48px] group-hover:active-nav ${
                    isActive ? "active-nav" : ""
                  }`}
                >
                  <span>{nav.icon}</span>
                  <span
                    className={`whitespace-nowrap ${!isOpen ? "hidden" : ""}`}
                  >
                    {nav.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {isOpen && (
        <div className="mt-auto mb-8">
          <p className="text-primary-600 text-sm font-semibold whitespace-nowrap">
            Jobie Job Portal Admin Dashboard
          </p>
          <p className="text-primary-600 text-xs mb-6 whitespace-nowrap">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          <span className="text-primary-700 text-sm whitespace-nowrap">
            Made with ❤ by Peterdraw
          </span>
        </div>
      )}
    </aside>
  );
}
