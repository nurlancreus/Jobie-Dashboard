import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] transition-all duration-300">
      <Sidebar />
      <Header />
      <div className="col-[2/3] row-[2/3] grid overflow-y-auto px-4 pb-12 pt-[30px] md:px-6 lg:px-8 xl:px-10 xxl:px-12">
        <Outlet />
      </div>
      <div className="z-[-1] col-[2/3] row-[1/2] hidden bg-primary md:block" />
    </div>
  );
}
