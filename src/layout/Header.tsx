import { BellIcon, ChatIcon, SearchIcon, ToggleIcon } from "@/assets/icons";
import { adminData } from "@/data/adminData";
import { useLocation } from "react-router-dom";

type HeaderProps = { onToggle: () => void };

export default function Header({ onToggle }: HeaderProps) {
  const { pathname } = useLocation();

  const title = pathname.slice(1).replace("-", " ");

  return (
    <header className="col-start-2 col-end-3 row-start-1 row-end-2 flex justify-between rounded-tl-[48px] bg-body px-6 py-5 lg:px-8 xl:px-10 xl:py-7 xxl:px-12 xxl:py-8">
      {/* Toggle & Title */}
      <div className="flex items-center gap-6 lg:gap-8 xl:gap-11">
        <button
          className="border-none bg-transparent outline-transparent"
          onClick={onToggle}
        >
          <ToggleIcon />
        </button>
        <h1 className="hidden text-heading font-semibold capitalize sm:block">
          {title}
        </h1>
      </div>

      {/* Rest */}
      <div className="xl:gap-18 flex w-2/3 items-center md:gap-10 lg:gap-14 xxl:gap-24">
        {/* Search */}

        <form
          className="relative hidden flex-grow lg:block"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search something here..."
            className="w-full min-w-[300px] rounded-[82px] bg-gray-100 px-6 py-3 placeholder:text-gray-500 focus:outline-primary xl:h-14 xl:px-8 xxl:px-9 xxl:py-4"
          />

          <button className="absolute bottom-3 right-8 top-3">
            <SearchIcon />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-8 lg:gap-10 xl:gap-12 xxl:gap-16">
          {/* Badge Buttons */}
          <div className="flex gap-1 sm:gap-4 lg:gap-5 xl:gap-8 xxl:gap-11">
            <button className="relative grid h-10 w-10 place-content-center rounded-full bg-white xl:h-12 xl:w-12 xxl:h-14 xxl:w-14">
              <ChatIcon />
              <span className="absolute right-[-5px] top-[-3px] grid h-[20px] w-[20px] place-content-center rounded-full bg-primary text-xs font-semibold text-white drop-shadow-[0_6px_8px_rgba(135,67,223,0.37)] xl:h-[24px] xl:w-[24px] xxl:h-[28px] xxl:w-[28px] xxl:text-sm">
                18
              </span>
            </button>
            <button className="relative grid h-10 w-10 place-content-center rounded-full bg-white xl:h-12 xl:w-12 xxl:h-14 xxl:w-14">
              <BellIcon />
              <span className="absolute right-[-5px] top-[-3px] grid h-[20px] w-[20px] place-content-center rounded-full bg-primary text-xs font-semibold text-white drop-shadow-[0_6px_8px_rgba(135,67,223,0.37)] xl:h-[24px] xl:w-[24px] xxl:h-[28px] xxl:w-[28px] xxl:text-sm">
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
              className="h-10 w-10 rounded-full object-cover xl:h-12 xl:w-12 xxl:h-14 xxl:w-14"
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
