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
      className={`col-start-1 col-end-2 row-span-full hidden bg-primary text-white sm:block ${
        isOpen ? "w-[344px] pl-[32px]" : "w-[120px] pl-[24px]"
      } flex flex-col gap-6 overflow-hidden transition-all duration-300`}
    >
      <div className="py-7 pl-[14px]">
        <div className="h-[66px] w-[188px]">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              width={188}
              height={66}
              className="h-full w-full object-fill"
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
                  className={`group-hover:active-nav flex items-center gap-11 rounded-l-[48px] py-7 pl-8 text-lg font-medium text-gray-200 transition-colors duration-200 [&_path]:fill-gray-200 [&_svg]:h-7 [&_svg]:w-7 ${
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
        <div className="mb-8 mt-auto">
          <p className="whitespace-nowrap text-sm font-semibold text-primary-600">
            Jobie Job Portal Admin Dashboard
          </p>
          <p className="mb-6 whitespace-nowrap text-xs text-primary-600">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          <span className="whitespace-nowrap text-sm text-primary-700">
            Made with ❤ by Peterdraw
          </span>
        </div>
      )}
    </aside>
  );
}
