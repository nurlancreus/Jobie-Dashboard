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
import { useEffect, useRef, useState } from "react";
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

const positionTop: Record<number, string> = {
  0: "translate-y-0",
  74: "translate-y-[74px]",
  148: "translate-y-[148px]",
  222: "translate-y-[222px]",
  296: "translate-y-[296px]",
  370: "translate-y-[370px]",

  78: "translate-y-[78px]",
  156: "translate-y-[156px]",
  234: "translate-y-[234px]",
  312: "translate-y-[312px]",
  390: "translate-y-[390px]",

  90: "translate-y-[90px]",
  180: "translate-y-[180px]",
  270: "translate-y-[270px]",
  360: "translate-y-[360px]",
  450: "translate-y-[450px]",
};

export default function Sidebar() {
  const { isLargeOpen, isSmallOpen, isScreenSmall, isOpen, close } =
    useSidebarContext();
  const { pathname } = useLocation();
  const sidebarRef = useRef<HTMLUListElement>(null);
  const [offsetTop, setOffsetTop] = useState<number>(0);

  useEffect(() => {
    if (!sidebarRef.current) return;
    const list = sidebarRef.current;

    const activeLi = list.querySelector(
      '[data-active = "true"]',
    ) as HTMLLIElement;

    if (!activeLi) return;

    setOffsetTop(activeLi.offsetTop);
    
  }, [pathname]);

  let classNames: string;

  if (!isScreenSmall) {
    if (isLargeOpen) classNames = "w-[18.75rem] pl-5";
    else classNames = "w-[6.25rem] pl-3";
  } else
    classNames =
      "max-w-[260px] w-full rounded-tr-[1.25rem] pl-4 pt-6 fixed bottom-0 left-0 top-[4.75rem] z-10";

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
            data-type="active-nav"
            className={`active-nav absolute left-0 right-0 top-0 transition ${positionTop[offsetTop]} -z-10 h-16 rounded-l-[48px] py-5 pl-6 text-lg font-medium text-gray-200 transition lg:gap-9 xl:h-20 xl:gap-11 xl:py-7 xl:pl-8 [&_path]:fill-gray-200`}
          />
          <ul className="flex flex-col gap-[10px]" ref={sidebarRef}>
            {sidebarNavigation.map((nav) => {
              const isActive = pathname.slice(1) === nav.path;

              return (
                <li
                  key={nav.label}
                  className="h-20"
                  onClick={() => isScreenSmall && close()}
                  data-active={isActive}
                >
                  <Link
                    to={nav.path}
                    className={`group-hover:active-nav flex h-fit items-center gap-8 rounded-l-[48px] py-5 pl-6 text-lg   transition lg:gap-9 xl:gap-11 xl:py-7 xl:pl-8 [&_path]:fill-gray-200 ${
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
