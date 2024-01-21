import {
  ApplicationsIcon,
  DashboardIcon,
  NewsIcon,
  SearchJobIcon,
  StatisticsIcon,
  UserIcon,
} from "@/assets/icons";

import { useSidebarContext } from "@/contexts/SidebarProvider";
import MainLogo from "@/shared/MainLogo";
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

export default function Sidebar() {
  const { isLargeOpen, isSmallOpen, isScreenSmall, isOpen } =
    useSidebarContext();
  const { pathname } = useLocation();

  return (
    <aside
      className={`${isScreenSmall ? "fixed bottom-0 left-0 top-[80px] z-10" : ""} col-start-1 ${isSmallOpen || !isScreenSmall ? "translate-x-0" : "-translate-x-full"} col-end-2 row-span-full bg-primary text-white ${
        !isScreenSmall
          ? isLargeOpen
            ? "w-[300px] pl-5"
            : "w-[100px] pl-3"
          : "w-[260px] rounded-tr-[1.25rem] pl-4 pt-6"
      } flex flex-col gap-6 overflow-hidden transition-all duration-300`}
    >
      <div className="hidden py-7 pl-[14px] md:block">
        <MainLogo />
      </div>
      <nav>
        <ul className="flex flex-col gap-[10px]">
          {sidebarNavigation.map((nav) => {
            const isActive = pathname.slice(1) === nav.path;

            return (
              <li key={nav.label} className="group">
                <Link
                  to={nav.path}
                  className={`group-hover:active-nav flex items-center gap-11 rounded-l-[48px] py-5 pl-6 text-lg font-medium text-gray-200 transition-colors duration-200 xl:py-7 xl:pl-8 [&_path]:fill-gray-200 [&_svg]:h-7 [&_svg]:w-7 ${
                    isActive ? "active-nav" : ""
                  }`}
                >
                  <span>{nav.icon}</span>
                  <span
                    className={`whitespace-nowrap ${isOpen ? "" : "hidden"}`}
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
        <div className="mb-8 mt-auto pr-10 md:pr-0">
          <p className="mb-2 text-balance text-sm font-semibold text-primary-600 md:whitespace-nowrap">
            Jobie Job Portal Admin Dashboard
          </p>
          <p className="mb-6 text-xs text-primary-600 md:whitespace-nowrap">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          <span className="text-sm text-primary-700 md:whitespace-nowrap">
            Made with ❤ by Peterdraw
          </span>
        </div>
      )}
    </aside>
  );
}
