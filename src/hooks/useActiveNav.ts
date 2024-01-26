import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const positionTop: Record<number, string> = {
  0: "translate-y-0",

  // small screens
  74: "translate-y-[74px]",
  148: "translate-y-[148px]",
  222: "translate-y-[222px]",
  296: "translate-y-[296px]",
  370: "translate-y-[370px]",

  // medium screens
  78: "translate-y-[78px]",
  156: "translate-y-[156px]",
  234: "translate-y-[234px]",
  312: "translate-y-[312px]",
  390: "translate-y-[390px]",

  // large screens
  90: "translate-y-[90px]",
  180: "translate-y-[180px]",
  270: "translate-y-[270px]",
  360: "translate-y-[360px]",
  450: "translate-y-[450px]",
};

export default function useActiveNav() {
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

  return { positionTop, sidebarRef, offsetTop, pathname };
}
