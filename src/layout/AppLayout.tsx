import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`grid h-screen grid-rows-[auto_1fr] transition-all duration-300 ${
        isOpen ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_1fr]"
      }`}
    >
      <Sidebar isOpen={isOpen} />
      <Header onToggle={handleToggle} />
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 grid overflow-y-auto px-4 pb-12 pt-[30px] md:px-6 lg:px-8 xl:px-10 xxl:px-12">
        <Outlet />
      </div>
      <div className="z-[-1] col-start-2 col-end-3 row-start-1 row-end-2 bg-primary" />
    </div>
  );
}
