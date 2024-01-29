import { Link } from "react-router-dom";
import {
  ApplicationsIcon,
  DashboardIcon,
  NewsIcon,
  SearchJobIcon,
  StatisticsIcon,
  UserIcon,
} from "@/assets/icons";

import MainLogo from "@/shared/MainLogo";
import ToggleThemeBtn from "@/shared/ToggleThemeBtn";
import { useSidebarContext } from "@/contexts/SidebarProvider";
import { useActiveNav } from "@/hooks/useActiveNav";

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
  const { isLargeOpen, isSmallOpen, isScreenSmall, isOpen, close } =
    useSidebarContext();

  const { positionTop, pathname, sidebarRef, offsetTop } = useActiveNav();

  let classNames: string;

  if (!isScreenSmall) {
    if (isLargeOpen) classNames = "w-[18.5rem] pl-5";
    else classNames = "w-[6rem] pl-1";
  } else
    classNames =
      "max-w-[260px] w-full rounded-tr-[1.25rem] pl-4 pt-10 fixed bottom-0 left-0 top-[4.75rem] z-10";

  return (
    <>
      {isScreenSmall && isSmallOpen && (
        <div
          className="fixed inset-0 z-10 bg-slate-200/20 backdrop-blur-sm"
          onClick={close}
        />
      )}
      <aside
        className={`col-[1/2] ${isSmallOpen || !isScreenSmall ? "translate-x-0" : "-translate-x-full"} row-span-full bg-primary text-white ${classNames} flex flex-col gap-6 overflow-hidden transition-all duration-300`}
      >
        <div className="hidden py-7 pl-[14px] md:block">
          <MainLogo />
        </div>
        <nav className="relative isolate">
          <div
            className={`duration-400 absolute -top-6 right-4 transition-opacity md:-top-28 ${!isLargeOpen ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <ToggleThemeBtn />
          </div>
          <div
            data-type="active-nav"
            className={`active-nav absolute left-2 right-0 top-0 transition ${positionTop[offsetTop]} -z-10 h-16 rounded-l-[48px] py-5 pl-6 text-lg font-medium text-gray-200 transition lg:gap-9 xl:h-20 xl:gap-11 xl:py-7 xl:pl-8 [&_path]:fill-gray-200`}
          />
          <ul className="flex flex-col gap-[10px] pl-2" ref={sidebarRef}>
            {sidebarNavigation.map((nav) => {
              const isActive = pathname.split("/").at(-1) === nav.path;

              return (
                <li
                  key={nav.label}
                  className="h-20"
                  onClick={() => isScreenSmall && close()}
                  data-active={isActive}
                >
                  <Link
                    to={nav.path}
                    className={`group-hover:active-nav flex h-fit items-center gap-8 rounded-l-[48px] py-5 pl-6 text-lg transition lg:gap-9 xl:gap-11 xl:py-7 xl:pl-8 [&_path]:fill-gray-200 ${
                      isActive
                        ? "font-semibold text-dark [&_svg_path]:fill-primary dark:[&_svg_path]:fill-white"
                        : "font-medium text-gray-200"
                    }`}
                  >
                    <span className="[&_svg]:h-5 [&_svg]:w-5 lg:[&_svg]:h-6 lg:[&_svg]:w-6 xl:[&_svg]:h-7 xl:[&_svg]:w-7">
                      {nav.icon}
                    </span>
                    <span
                      className={`whitespace-nowrap  ${isOpen ? "" : "hidden"}`}
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
    </>
  );
}
