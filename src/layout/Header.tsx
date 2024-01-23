import {
  ArrowIcon,
  BellIcon,
  ChatIcon,
  SearchIcon,
  ToggleIcon,
} from "@/assets/icons";
import { useSidebarContext } from "@/contexts/SidebarProvider";
import { adminData } from "@/data/adminData";
import MainLogo from "@/shared/MainLogo";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { toggle, isScreenSmall, isLargeOpen, isSmallOpen } =
    useSidebarContext();
  const { pathname } = useLocation();

  const title = pathname.slice(1).replace("-", " ");

  let icon: JSX.Element;

  if (isScreenSmall) {
    if (isSmallOpen) icon = <ArrowIcon />;
    else icon = <ToggleIcon />;
  } else {
    if (!isLargeOpen) icon = <ArrowIcon />;
    else icon = <ToggleIcon />;
  }

  return (
    <header className="relative z-10 col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-between bg-body px-6 py-5 md:rounded-tl-[48px] lg:px-8 xl:px-10 xl:py-7 xxl:px-12 xxl:py-8">
      {/* Toggle & Title */}
      {isScreenSmall && (
        <div className="absolute bottom-0 left-0 top-0 w-20 overflow-hidden bg-primary px-2">
          <MainLogo variant="header" />
        </div>
      )}
      <div className="absolute left-[5.5rem] top-1/2 flex -translate-y-1/2 items-center gap-6 sm:left-24 md:static md:translate-y-0 lg:gap-8 xl:gap-11">
        <button
          className="border-none bg-transparent outline-transparent [&_svg]:h-6 [&_svg]:w-6 xl:[&_svg]:h-auto xl:[&_svg]:w-auto"
          onClick={toggle}
        >
          {icon}
        </button>
        <h1 className="hidden whitespace-nowrap text-heading font-semibold capitalize sm:block">
          {title}
        </h1>
      </div>

      {/* Rest */}
      <div className="xl:gap-18 ml-auto flex w-2/3 items-center md:ml-0 md:gap-8 lg:gap-10 xxl:gap-24">
        {/* Search */}

        <form
          className="relative hidden grow lg:block"
          onSubmit={(e) => e.preventDefault()}
          id="mainSearchForm"
          name="mainSearchForm"
        >
          <input
            type="text"
            id="mainSearch"
            name="mainSearch"
            placeholder="Search something here..."
            className="w-full min-w-[18.75rem] rounded-[5.125rem] bg-gray-100 px-6 py-3 placeholder:text-gray-500 focus:outline-primary xl:h-14 xl:px-8 xxl:px-9 xxl:py-4"
          />

          <button className="absolute bottom-3 right-6 top-3 xl:right-8 [&_svg]:h-5 [&_svg]:w-5 xl:[&_svg]:h-auto xl:[&_svg]:w-auto">
            <SearchIcon />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-5 sm:gap-8 lg:gap-10 xl:gap-12 xxl:gap-16">
          {/* Badge Buttons */}
          <div className="flex gap-2 sm:gap-4 lg:gap-5 xl:gap-8 xxl:gap-11 [&_svg]:h-5 [&_svg]:w-5 lg:[&_svg]:h-6 lg:[&_svg]:w-6 xl:[&_svg]:h-auto xl:[&_svg]:w-auto">
            <button className="relative grid h-fit w-fit place-content-center rounded-full bg-white p-2 xl:p-3">
              <ChatIcon />
              <span className="absolute right-[-5px] top-[-3px] grid h-5 w-5 place-content-center rounded-full bg-primary text-xs font-semibold text-white drop-shadow-[0_6px_8px_rgba(135,67,223,0.37)] xl:h-6 xl:w-6 xxl:h-7 xxl:w-7 xxl:text-sm">
                18
              </span>
            </button>
            <button className="relative grid h-fit w-fit place-content-center rounded-full bg-white p-2 xl:p-3">
              <BellIcon />
              <span className="absolute right-[-5px] top-[-3px] grid h-5 w-5 place-content-center rounded-full bg-primary text-xs font-semibold text-white drop-shadow-[0_6px_8px_rgba(135,67,223,0.37)] xl:h-6 xl:w-6 xxl:h-7 xxl:w-7 xxl:text-sm">
                52
              </span>
            </button>
          </div>

          {/* Super Admin */}
          <div className="flex items-center sm:gap-2 lg:gap-4 xl:gap-8">
            <img
              src={adminData.avatar}
              alt="avatar"
              width={58}
              height={58}
              className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10 lg:h-12 lg:min-h-12 lg:w-12 lg:min-w-12 xl:h-14 xl:min-h-14 xl:w-14 xl:min-w-14"
            />
            <div className="hidden sm:flex sm:flex-col sm:gap-1">
              <p className="whitespace-nowrap text-base font-semibold">
                {adminData.name}
              </p>
              <span className="whitespace-nowrap text-sm text-gray-300">
                Super Admin
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
