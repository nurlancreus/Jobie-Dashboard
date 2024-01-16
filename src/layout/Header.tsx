import { BellIcon, ChatIcon, SearchIcon, ToggleIcon } from "@/assets/icons";
import { adminData } from "@/data/adminData";
import { useLocation } from "react-router-dom";

type HeaderProps = {onToggle: () => void}

export default function Header({onToggle}:HeaderProps ) {
  const { pathname } = useLocation();

  const title = pathname.slice(1).replace("-", " ");

  return (
    <header className="flex col-start-2 col-end-3 row-start-1 row-end-2 py-8 px-[50px] rounded-tl-[48px] bg-body">
      {/* Toggle & Title */}
      <div className="flex items-center gap-[44px]">
        <button className="bg-transparent border-none outline-transparent" onClick={onToggle}>
          <ToggleIcon />
        </button>
        <h1 className="text-heading font-semibold capitalize">{title}</h1>
      </div>

      {/* Rest */}
      <div className="flex items-center ml-auto w-2/3 gap-24">
        {/* Search */}
        <form
          className="relative flex-grow"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search something here..."
            className="bg-gray-100 py-4 px-[36px] focus:outline-primary rounded-[82px] h-14 w-full placeholder:text-gray-500"
          />
          <button className="absolute top-3 bottom-3 right-8">
            <SearchIcon />
          </button>
        </form>

        <div className="flex items-center gap-16">
          {/* Badge Buttons */}
          <div className="flex gap-11">
            <button className="w-14 h-14 rounded-full grid place-content-center bg-white relative">
              <ChatIcon />
              <span className="text-white bg-primary drop-shadow-[0_6px_8px_rgba(135,67,223,0.37)] rounded-full w-[28px] h-[28px] text-sm font-semibold grid place-content-center absolute right-[-5px] top-[-3px]">
                18
              </span>
            </button>
            <button className="w-14 h-14 rounded-full grid place-content-center bg-white relative">
              <BellIcon />
              <span className="text-white bg-primary drop-shadow-[0_6px_8px_rgba(135,67,223,0.37)] rounded-full w-[28px] h-[28px] text-sm font-semibold grid place-content-center absolute right-[-5px] top-[-3px]">
                52
              </span>
            </button>
          </div>

          {/* Super Admin */}
          <div className="flex items-center gap-8">
            <img
              src={adminData.avatar}
              alt="avatar"
              width={58}
              height={58}
              className="rounded-full object-cover h-14 w-14"
            />
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">{adminData.name}</p>
              <span className="text-sm text-gray-300">Super Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
