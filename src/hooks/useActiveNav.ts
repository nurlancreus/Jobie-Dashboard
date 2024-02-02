import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const positionTop: Record<number, string> = {
  0: "translate-y-0",

  // small screens
  76: "translate-y-[76px]",
  152: "translate-y-[152px]",
  228: "translate-y-[228px]",
  304: "translate-y-[304px]",
  380: "translate-y-[380px]",

  // large screens
  92: "translate-y-[92px]",
  184: "translate-y-[184px]",
  276: "translate-y-[276px]",
  368: "translate-y-[368px]",
  460: "translate-y-[460px]",
};

export function useActiveNav() {
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
