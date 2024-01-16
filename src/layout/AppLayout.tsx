import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`grid transition-all duration-300 grid-rows-[120px_1fr] h-screen ${
        isOpen ? "grid-cols-[344px_1fr]" : "grid-cols-[120px_1fr]"
      }`}
    >
      <Sidebar isOpen={isOpen} />
      <Header onToggle={handleToggle} />
      <div className="grid row-start-2 row-end-3 col-start-2 col-end-3 px-[50px] overflow-y-auto pt-[30px] pb-12">
        <Outlet />
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 z-[-1] bg-primary" />
    </div>
  );
}
